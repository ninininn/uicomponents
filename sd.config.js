import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary, {
  expand: {
    typography: true,
    shadow: false,  // false = 讓 ts/shadow/css/shorthand 轉成 CSS 字串
    border: true,
  },
});

// 自訂 preprocessor：修正 Tokens Studio 多 set 匯出的 reference 路徑問題
// tokens-studio preprocessor 會在路徑前加 set 名稱（如 ref.fontWeight.inter-semibold）
// 但 token value 內的 reference 仍是舊格式（{fontWeight.inter-semibold}），造成找不到的錯誤
// 此 preprocessor 會在 tokens-studio 之前執行，先將所有 reference 補上正確的 set 前綴
StyleDictionary.registerPreprocessor({
  name: 'ts/fix-set-references',
  preprocessor: (dictionary) => {
    const setNames = Object.keys(dictionary).filter(k => !k.startsWith('$'));

    // 建立 tokenPath → setName 的查找表
    function buildLookup(obj, setName, prefix = '') {
      const lookup = {};
      for (const [key, val] of Object.entries(obj)) {
        const path = prefix ? `${prefix}.${key}` : key;
        if (val && typeof val === 'object' && '$value' in val) {
          lookup[path] = setName;
        } else if (val && typeof val === 'object') {
          Object.assign(lookup, buildLookup(val, setName, path));
        }
      }
      return lookup;
    }

    const tokenLookup = {};
    for (const setName of setNames) {
      Object.assign(tokenLookup, buildLookup(dictionary[setName], setName));
    }

    // 將 {tokenPath} 補上正確的 set 前綴
    function fixRefs(value) {
      if (typeof value === 'string') {
        return value.replace(/\{([^}]+)\}/g, (match, ref) => {
          const root = ref.split('.')[0];
          if (setNames.includes(root)) return match; // 已有 set 前綴，略過
          const ownerSet = tokenLookup[ref];
          return ownerSet ? `{${ownerSet}.${ref}}` : match;
        });
      }
      if (Array.isArray(value)) return value.map(fixRefs);
      if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fixRefs(v)]));
      }
      return value;
    }

    const result = {};
    for (const [key, val] of Object.entries(dictionary)) {
      result[key] = key.startsWith('$') ? val : fixRefs(val);
    }
    return result;
  },
});

// 建立 kebab-case 命名的 transform group（將 name/camel 換成 name/kebab）
const tsTransforms = [...StyleDictionary.hooks.transformGroups['tokens-studio']];
StyleDictionary.registerTransformGroup({
  name: 'tokens-studio-kebab',
  transforms: tsTransforms.map(t => t === 'name/camel' ? 'name/kebab' : t),
});

// component token 專用 name transform
// - component tokens：去掉 set 前綴  → --stx-btn-primary-bg
// - ref/system tokens（被引用時）：保留完整路徑 → --stx-ref-white、--stx-system-container-primary
StyleDictionary.registerTransform({
  name: 'name/kebab/no-component-prefix',
  type: 'name',
  transform: (token, options) => {
    const path = token.path[0] === 'component' ? token.path.slice(1) : token.path;
    return [options.prefix, ...path].join('-').toLowerCase();
  },
});
StyleDictionary.registerTransformGroup({
  name: 'tokens-studio-kebab-component',
  transforms: tsTransforms.map(t => t === 'name/camel' ? 'name/kebab/no-component-prefix' : t),
});

const sd = new StyleDictionary({
  source: ['tokens.json'],
  preprocessors: ['ts/fix-set-references', 'tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio-kebab',
      prefix: 'stx',
      files: [
        {
          destination: 'src/Styles/primitive.css',
          format: 'css/variables',
          filter: (tk) => tk.path[0] === 'ref',
          options: {
            selector: ':root',
            outputReferences: false,
          },
        },
        {
          destination: 'src/Styles/semantic.css',
          format: 'css/variables',
          filter: (tk) => tk.path[0] === 'system',
          options: {
            selector: ':root',
            outputReferences: true,
          },
        },
      ],
    },
    'css-component': {
      transformGroup: 'tokens-studio-kebab-component',
      prefix: 'stx',
      files: [
        {
          destination: 'src/Styles/component.css',
          format: 'css/variables',
          filter: (tk) => tk.path[0] === 'component',
          options: {
            selector: ':root',
            outputReferences: true,
          },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
