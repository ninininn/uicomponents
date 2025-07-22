import './style.css';
import { Button } from './Components/Button';
import { Dropdown } from './Components/Dropdown';
// import { Slider } from './Components/Slider';
import { Slider, SliderThumb } from './Components/Slider';


let body = document.querySelector("body");

// btn-component
let testBtn = new Button('primary-btn', { text: 'Shown Btn', classes: ['btn', 'filled-btn'] });


// dropdown-component
// let dropdown = document.getElementById("map-out");
// let testdropdown = new Dropdown(dropdown, "dropdown-btn", { selectOptions: ['options01', 'options02'] });
// console.log(testdropdown);

// Slider-components
let testSlider = new Slider({ value: 55 });
console.log(testBtn, testSlider);
body.appendChild(testBtn._elem);
body.appendChild(testSlider.getElem());