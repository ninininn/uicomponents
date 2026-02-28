const COLOR_DIGITS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const COLOR_HUEDEGS = [0, 60, 120, 180, 240, 300];
const COLOR_TONE = ["red", "yellow", "green", "cyan", "blue", "purple"];

const color_circle = COLOR_TONE.reduce((hueObj, tone, index) => {
  hueObj[tone] = COLOR_HUEDEGS[index];
  return hueObj;
}, {});

const DIGITs_MAP = new Map();

for (let i = 0; i < COLOR_DIGITS.length; i++) {
  DIGITs_MAP.set(i, COLOR_DIGITS[i]);
}
//@ Helper functions
export class ColorHelper {
  static normalizeCircular(hue) {
    return ((hue % 360) + 360) % 360;
  }
  static getRandomNum(min, max) {
    //防呆排序
    let rangeBuffer = [min, max].sort((a, b) => a - b);
    return (
      Math.floor(Math.random() * (rangeBuffer[1] - rangeBuffer[0] + 1)) +
      rangeBuffer[0]
    );
  }
  static randomDigit() {
    return Math.floor(Math.random() * 15) + 1;
  }

  static randomHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += DIGITs_MAP.get(ColorHelper.randomDigit());
    }
    return hexColor;
  }

  static tohexDigits(strDigit) {
    let digit = strDigit.map((str) =>
      Array.from(DIGITs_MAP.values()).indexOf(str.toLowerCase())
    );
    return digit[0] * 16 + digit[1];
  }

  static circular_distance(a, b) {
    const distance = Math.abs(a - b);
    return Math.min(distance, 360 - distance);
  }

  static luminance(rgbStr) {
    // relative luminance
    // let L = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    //contrast ratio = (L1 + 0.05) / (L2 + 0.05)
    let [R, G, B] = rgbStr.replace(/[rgb()\s+]/g, "").split(",");
    return (0.2126 * R + 0.7152 * G + 0.0722 * B) / 255;
  }
}

var defaultPaletteConfig = {
  colorCounts: 1, //how many color you want to generate
  alpha: 1, //opacity, number between 0~1
  colorMode: "hex", //which color mode system represented
  style: "random", //random/contrast/same
  tone: COLOR_TONE[ColorHelper.getRandomNum(0, 5)], //specific color tone?
  offset: 10,
  saturationFixed: false,
  lightnessFixed: false,
};

//@ core - Palette
export function Palette(colorConfig = defaultPaletteConfig) {
  let paletteConfig = Object.assign({}, defaultPaletteConfig, colorConfig);
  let colorMode = paletteConfig.colorMode;

  let palette = paletteGenarator(paletteConfig);
  switch (colorMode) {
    case "hex":
      return palette.map((color) => color.toHex());
    case "rgb":
      return palette.map((color) => color.toRgb());
    default:
      return palette.map((color) => color.toHsl());
  }
}

function paletteGenarator({
  colorCounts,
  alpha,
  style,
  tone,
  offset,
  saturationFixed,
  lightnessFixed,
}) {
  let palette = [];
  let mainHue = color_circle[tone];
  for (let i = 0; i < colorCounts; i++) {
    let hue = createHue(style, mainHue, offset);
    let saturation = createSaturation(saturationFixed);
    let lightness = createLightness(lightnessFixed);
    let color = new Color(hue, saturation, lightness, alpha);
    palette.push(color);
  }

  return palette.sort(function (c1, c2) {
    //依照視覺上的顏色[淺->深]排序
    let L1 = 116 * Math.pow((c1.luminance + 0.055) / 1.055, 2) - 16;
    let L2 = 116 * Math.pow((c2.luminance + 0.055) / 1.055, 2) - 16;

    return L2 - L1;

    //判斷在main左還是右
    function hueDelta(h, main) {
      let d = ColorHelper.normalizeCircular(h - main);
      if (d >= 180) d -= 360;
      return d;
    }
    const da = hueDelta(c1.hue, mainHue);
    const db = hueDelta(c2.hue, mainHue);

    const sideA = da === 0 ? 0 : da < 0 ? -1 : +1; // -1 left, +1 right, 0 center
    const sideB = db === 0 ? 0 : db < 0 ? -1 : +1;

    if (sideA !== sideB) {
      if (sideA === 0) return -1;
      if (sideB === 0) return 1;

      return sideA - sideB; // left(-1) 會在 right(+1) 前
    }

    //距離近 -> 遠
    const distA = Math.abs(da);
    const distB = Math.abs(db);
    if (distA !== distB) return distA - distB;

    //同側同距離
    return c1 - c2;
  });
}

//個別產生H/S/L數值
function createHue(style, mainHue, offset) {
  function randomHue(styleType) {
    let hue;
    switch (styleType) {
      case "contrast":
        hue = mainHue + ColorHelper.getRandomNum(120, 240);
        break;
      case "same":
        hue = mainHue + ColorHelper.getRandomNum(-30, 30);
        break;
      default:
        hue = ColorHelper.getRandomNum(0, 359);
        break;
    }

    return ColorHelper.normalizeCircular(hue);
  }

  //check repeat、instance
  function checkHue(hueList) {
    if (style !== "random")
      return checkOffset(hueList, offset, () => {
        return randomHue(style);
      });
    return hueList;
  }
  return randomHue(style);
}

function createSaturation(fixed = false) {
  let saturation =
    typeof fixed === "number" ? fixed : ColorHelper.getRandomNum(20, 90);
  return saturation;
}

function createLightness(fixed = false) {
  let lightness =
    typeof fixed === "number" ? fixed : ColorHelper.getRandomNum(20, 90);
  return lightness;
}

function checkOffset(list, offset, callback) {
  let checkedColors = list.reduce((checked, curr) => {
    let lastIndex = checked.length - 1;
    let distance = ColorHelper.circular_distance(checked[lastIndex], curr);
    if (distance < offset || distance == 0) {
      curr = callback();
    }
    return checked.concat(curr);
  }, []);

  return checkedColors;
}

//@ color
export class Color {
  constructor(hue, saturation, lightness, alpha) {
    this.base = { h: hue, s: saturation, l: lightness, a: alpha };
    this.luminance = ColorHelper.luminance(this.toRgb());
  }

  toRgb() {
    return ColorFormat.hslTorgb(this.toHsl());
  }

  toHex() {
    return ColorFormat.hslTohex(this.toHsl());
  }

  toHsl() {
    let { h, s, l, a } = this.base;
    if (a !== 1) {
      return `hsl(${h} ${s} ${l} / ${a})`;
    }
    return `hsl(${h} ${s} ${l})`;
  }
}

//@ formatter
export class ColorFormat {
  static hexTorgb(hexString) {
    let rgbResult = "";
    const Rstr = Array.from(hexString.slice(1, 3));
    const Gstr = Array.from(hexString.slice(3, 5));
    const Bstr = Array.from(hexString.slice(5, 7));
    const Astr = Array.from(hexString.slice(7, 9));

    let R = ColorHelper.tohexDigits(Rstr);
    let G = ColorHelper.tohexDigits(Gstr);
    let B = ColorHelper.tohexDigits(Bstr);
    let A = Math.round((ColorHelper.tohexDigits(Astr) / 255) * 100) / 100;

    if (A == 1) {
      rgbResult = `rgb(${R},${G},${B})`;
    } else {
      rgbResult = `rgb(${R},${G},${B},${A})`;
    }

    return rgbResult;
  }
  static rgbTohsl(rgbString) {
    let trimStr = rgbString
      .toLowerCase()
      .replace(/[rgb()\s+]/g, "")
      .split(",");
    let eachRgb = trimStr.map(
      (strNum) => Math.round((strNum / 255) * 100) / 100
    );
    let [R, G, B, A] = eachRgb;

    let max = Math.max(...eachRgb);
    let min = Math.min(...eachRgb);
    let delta = max - min;

    let hue, saturation, lightness, alpha;
    if (max === min) {
      hue = 0;
    } else if (max == R && G >= B) {
      hue = 60 * ((G - B) / delta) + 0;
    } else if (max == R && G < B) {
      hue = 60 * ((G - B) / delta) + 360;
    } else if (max == G) {
      hue = 60 * ((B - R) / delta) + 120;
    } else if (max == B) {
      hue = 60 * ((R - G) / delta) + 240;
    }

    lightness = Math.round(((max + min) / 2) * 100) / 100;
    if (lightness == 0 || max == min) {
      saturation = 0;
    } else if (lightness > 0 && lightness <= 0.5) {
      saturation = Math.round(Math.abs(delta / (2 * lightness)) * 100);
    } else if (lightness > 0.5) {
      saturation = Math.round(Math.abs(delta / (2 - 2 * lightness)) * 100);
    }

    saturation = saturation > 100 ? 100 : saturation;
    lightness = lightness * 100 > 100 ? 100 : lightness * 100;

    alpha = A ? A : 1;
    if (alpha !== 1) {
      return `hsl(${Math.round(hue)},${saturation}%,${lightness}%/${alpha})`;
    }
    return `hsl(${Math.round(hue)},${saturation}%,${lightness}%)`;
  }
  static hslTorgb(hslString) {
    let trimStr = hslString
      .toLowerCase()
      .replace(/[hsl()/+]/g, "")
      .replace(/\s+/g, ",")
      .split(",");
    let [h, s, l, a] = trimStr;
    //整理回去原始數值
    h = ((h % 360) + 360) % 360;
    s = parseInt(s) / 100;
    l = parseInt(l) / 100;

    //RGB向量
    const chroma = (1 - Math.abs(2 * l - 1)) * s; //
    const hh = h / 60;
    const x = chroma * (1 - Math.abs((hh % 2) - 1));

    let r1 = 0,
      g1 = 0,
      b1 = 0;
    if (0 <= hh && hh < 1) [r1, g1, b1] = [chroma, x, 0];
    else if (1 <= hh && hh < 2) [r1, g1, b1] = [x, chroma, 0];
    else if (2 <= hh && hh < 3) [r1, g1, b1] = [0, chroma, x];
    else if (3 <= hh && hh < 4) [r1, g1, b1] = [0, x, chroma];
    else if (4 <= hh && hh < 5) [r1, g1, b1] = [x, 0, chroma];
    else if (5 <= hh && hh < 6) [r1, g1, b1] = [chroma, 0, x];

    const m = l - chroma / 2;
    const r = Math.round((r1 + m) * 255);
    const g = Math.round((g1 + m) * 255);
    const b = Math.round((b1 + m) * 255);

    if (a) {
      if (a !== 1) {
        return `rgb(${r},${g},${b},${a})`;
      }
    }
    return `rgb(${r},${g},${b})`;
  }
  static rgbTohex(rgbString) {
    let colors = rgbString.replace(/[rgb()\s+]/g, "").split(",");
    let hexResult = colors.map((color) => {
      color = parseFloat(color);
      if (color < 1) {
        color = Math.floor(color * 255);
      }
      let mod = color % 16;
      let hexStr = `${DIGITs_MAP.get(Math.floor(color / 16))}${DIGITs_MAP.get(mod)}`;
      return hexStr;
    });
    return `#${hexResult.join("")}`;
  }
  static hslTohex(hslString) {
    let turnRgb = ColorFormat.hslTorgb(hslString);
    return ColorFormat.rgbTohex(turnRgb);
  }
}
