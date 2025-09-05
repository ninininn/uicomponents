import './Components/Slider/Slider.css';
import { Slider } from "./Components/Slider/Slider";
export const createSlider = (options) => {
    const slider = new Slider(options);
    return slider;
};
