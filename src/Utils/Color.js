const COLOR_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const COLOR_HUEDEGS = [0, 60, 120, 180, 240, 300];
const COLOR_TONE = ['red', 'yellow', 'green', 'cyan', 'blue', 'purple'];

const color_circle = COLOR_TONE.reduce((hueObj, key, index) => {
    hueObj[key] = COLOR_HUEDEGS[index];
    return hueObj;
}, {});

const digitsMap = new Map();

for (let i = 0; i < COLOR_DIGITS.length; i++) {
    digitsMap.set(i, COLOR_DIGITS[i]);
}
//@ Helper functions
export class ColorHelper {
    static getRandomNum(min, max) {
        //防呆排序
        let rangeBuffer = [min, max].sort((a, b) => a - b);
        return Math.floor(Math.random() * (rangeBuffer[1] - rangeBuffer[0] + 1)) + rangeBuffer[0];
    }
    static randomDigit() {
        return Math.floor(Math.random() * 15) + 1;
    }

    static randomHexColor() {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += digitsMap.get(ColorHelper.randomDigit());
        }
        return hexColor;
    }
    static tohexDigits(strDigit) {
        let digit = strDigit.map((str) => Array.from(digitsMap.values()).indexOf(str.toLowerCase()));
        return digit[0] * 16 + digit[1];
    }

    static circular_distance(a, b) {
        const distance = Math.abs(a - b);
        return Math.min(distance, 360 - distance);
    }
}

var defaultPaletteConfig = {
    colorCounts: 1, //how many color you want to generate
    alpha: 1, //opacity, number between 0~1
    colorMode: 'hex', //which color mode system represented
    style: 'random', //random/contrast/same
    tone: COLOR_TONE[ColorHelper.getRandomNum(5, 0)], //specific color tone?
    offset: 20
};

//@ core - Palette
export function Palette(colorConfig = defaultPaletteConfig) {
    let paletteConfig = Object.assign({}, defaultPaletteConfig, colorConfig);
    let { colorCounts, alpha, colorMode, style, tone, offset } = paletteConfig;

    let hues = createHue(colorCounts, style, tone, offset);
    let saturations = createSaturation(colorCounts, style);
    let lightnesses = createLightness(colorCounts, style);

    let palette = paletteGenarator(colorCounts, hues, saturations, lightnesses, alpha);
    switch (colorMode) {
        case 'hex':
            return palette.map((color) => color.toHex());
        case 'rgb':
            return palette.map((color) => color.toRgb());
        case 'hsl':
            return palette.map((color) => `hsl(${color.hue}deg,${color.saturation}%,${color.lightness}%)`);
    }
}

function paletteGenarator(colorCounts, hues, saturations, lightnesses, alpha) {
    let palette = [];
    for (let i = 0; i < colorCounts; i++) {
        palette.push(new Color(hues[i], saturations[i], lightnesses[i], alpha));
    }
    return palette;
}

//個別產生H/S/L數值
function createHue(colorCounts, style, tone, offset) {
    let mainHue = color_circle[tone];
    let hues = [];

    for (let i = 0; i < colorCounts; i++) {
        hues.push(setHue());
    }

    function setHue() {
        let hue;
        switch (style) {
            case 'contrast':
                hue = mainHue + ColorHelper.getRandomNum(100, 179);
                break;
            case 'same':
                hue = mainHue + ColorHelper.getRandomNum(-59, 59);
                break;
            default:
                hue = ColorHelper.getRandomNum(0, 359);
                break;
        }
        return ColorFormat.normalizeHue(hue);
    }

    //check repeat、instance
    function checkHue(hueLists) {
        return checkOffset(hueLists, offset, () => { setHue(); });
    }

    return checkHue(hues).sort((a, b) => a - b);
}

function createSaturation(colorCounts, style) {
    let staurations = [];
    for (let i = 0; i < colorCounts; i++) {
        staurations.push(ColorHelper.getRandomNum(20, 95));
    }
    //由灰->彩排序
    return staurations.sort((a, b) => a - b);
}

function createLightness(colorCounts, style) {
    let lightnesses = [];
    for (let i = 0; i < colorCounts; i++) {
        lightnesses.push(ColorHelper.getRandomNum(20, 90));
    }
    //由亮->暗排序
    return lightnesses.sort((a, b) => b - a);
}

function checkOffset(colors, offset, callback) {
    let count = colors.length;
    let checkedColors = colors.reduce((checked, curr) => {
        let lastIndex = checked.length - 1;
        let distance = ColorHelper.circular_distance(checked[lastIndex], curr);
        if (distance < offset || distance == 0) {
            curr = callback();
        }
        return checked.concat(curr);
    }, []);

    // relative luminance
    // let L = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    //contrast ratio = (L1 + 0.05) / (L2 + 0.05)
    return checkedColors;
}

//@ color
class Color {
    constructor(hue, saturation, lightness, alpha) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha;

        this.base = { h: this.hue, s: this.saturation, l: this.lightness, a: this.alpha };
    }

    toRgb() {
        return ColorFormat.hslTorgb(this.base);
    }

    toHex() {
        return ColorFormat.hslTohex(this.base);
    }
}

//@ formatter
export class ColorFormat {
    static normalizeHue(hue) {
        return ((hue % 360) + 360) % 360;
    }
    static hexTorgb(hexString, opacity = 1) {
        let rgbResult = '';
        const isWithAlpha = opacity >= 0 && opacity <= 1;
        const Rstr = Array.from(hexString.slice(1, 3));
        const Gstr = Array.from(hexString.slice(3, 5));
        const Bstr = Array.from(hexString.slice(5, 7));

        let R = ColorHelper.tohexDigits(Rstr);
        let G = ColorHelper.tohexDigits(Gstr);
        let B = ColorHelper.tohexDigits(Bstr);

        if (!isWithAlpha) {
            rgbResult = `rgb(${R},${G},${B})`;
        } else {
            rgbResult = `rgb(${R},${G},${B},${opacity})`;
        }

        return rgbResult;
    }
    static rgbTohsl(rgbString) {
        let trimStr = rgbString.toLowerCase().replace(/[rgb()\s+]/g, "").split(",");
        let eachRgb = trimStr.map(strNum => Math.round((strNum / 255) * 100) / 100);
        let [R, G, B] = eachRgb;

        let max = Math.max(...eachRgb);
        let min = Math.min(...eachRgb);
        let delta = max - min;

        let hue, saturation, lightness;
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

        return `hsl(${Math.round(hue)},${saturation}%,${lightness}%)`;
    }
    static hslTorgb({ h, s, l, a }) {

        //整理回去原始數值
        h = ((h % 360) + 360) % 360;
        s = s / 100;
        l = l / 100;

        //RGB向量
        const chroma = (1 - Math.abs(2 * l - 1)) * s;//
        const hh = h / 60;
        const x = chroma * (1 - Math.abs((hh % 2) - 1));

        let r1 = 0, g1 = 0, b1 = 0;
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

        return `rgb(${r},${g},${b})`;
    }
    static rgbTohex(rgbStr) {
        let colors = rgbStr.replace(/[rgb()\s+]/g, "").split(",");
        let hexResult = colors.map((color) => {
            color = parseInt(color);
            let mod = color % 16;
            let hexStr = `${digitsMap.get(Math.floor(color / 16))}${digitsMap.get(mod)}`;
            return hexStr;
        });
        return `#${hexResult.join("")}`;
    }
    static hslTohex({ h, s, l, a }) {
        let turnRgb = ColorFormat.hslTorgb({ h, s, l, a });
        return ColorFormat.rgbTohex(turnRgb);
    }
}


