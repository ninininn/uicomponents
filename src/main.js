import './style.css';
import { Button } from './Components/Button';
import { Dropdown } from './Components/Dropdown';
import { Slider } from './Components/Slider';


let body = document.querySelector("body");

// btn-component
let testBtn = new Button('primary-btn', { text: 'Shown Btn', classes: ['btn', 'filled-btn'] });


// dropdown-component
// let dropdown = document.getElementById("map-out");
// let testdropdown = new Dropdown(dropdown, "dropdown-btn", { selectOptions: ['options01', 'options02'] });
// console.log(testdropdown);

// Slider-components
let testSlider = new Slider({ initValue: 55 });
let testSlider2 = new Slider({ initValue: 66, range: true, thumbImg: '/sticker.png' });
console.log(testBtn, testSlider, testSlider2);
body.appendChild(testBtn._elem);
body.appendChild(testSlider.getElem());
body.appendChild(testSlider2.getElem());