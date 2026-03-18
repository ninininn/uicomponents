import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary, {
  expand: {
    typography: true,
    shadow: false,  // false = 讓 ts/shadow/css/shorthand 轉成 CSS 字串
    border: true,
  },
});

const sd = new StyleDictionary({
  source: ['tokens.json'],
  preprocessors: ['tokens-studio'],  // tokens 已在根層級，參照路徑正確，可以使用 preprocessor
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      prefix: 'stx',
      files: [
        {
          destination: 'src/designTokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: false,
          },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
