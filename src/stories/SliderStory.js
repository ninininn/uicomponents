import './Components/styles/Slider.css';
import { Slider } from "./Components/Slider";
let test = document.createElement("div");
export const createSlider = (options) => {
    const slider = new Slider(options);
    console.log(options, slider);
    return slider;
};
