import { ColorPicker } from "../ColorPicker";
import { Palette } from "../../../Utils/Color";
import "../ColorPicker.css";
import "../../Button/Button.css";

export const createColorPicker = ({ limits, mode, defaults }) => {
  let parent = document.createElement("div");
  parent.className = "flex items-center justify-center gap-5";

  let resetBtn = document.createElement("button");
  resetBtn.className = "btn btn-primary";
  resetBtn.textContent = 'RESET_COLOR';
  
  const picker = new ColorPicker({ limits, defaults, mode });
  
  console.log(picker);
  resetBtn.addEventListener("click", () => {
    picker.reset();
  });
  parent.append(picker.el ,resetBtn);

  return parent;
};

export const createPalette = ({
  colorCounts,
  colorMode,
  alpha,
  style,
  tone,
  offset,
  saturationFixed,
  lightnessFixed,
  saturation,
  lightness,
}) => {
  let parent = document.createElement("div");
  parent.className = "flex";

  let initOptions = {
    colorCounts,
    colorMode,
    alpha,
    style,
    tone: tone || "red",
    offset,
    saturationFixed: saturationFixed ? saturation : saturationFixed,
    lightnessFixed: lightnessFixed ? lightness : lightnessFixed,
  };
  const randomPalette = Palette(initOptions);

  for (let i = 0; i < colorCounts; i++) {
    const palette = document.createElement("div");
    palette.style.width = "30px";
    palette.style.height = "30px";
    palette.style.backgroundColor = randomPalette[i];
    parent.appendChild(palette);
  }

  return parent;
};
