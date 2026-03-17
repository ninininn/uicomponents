import '../Slider.css';
import { Slider } from "../Slider";
export const createSlider = (options) => {
    const slider = new Slider(options);
    console.log(slider);
    return slider;
};
