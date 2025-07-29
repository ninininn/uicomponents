import "./style.css";
import { Button } from "./Components/Button";
import { Dropdown } from "./Components/Dropdown";
import { Slider } from "./Components/Slider";

let body = document.querySelector("body");

// btn-component
let testBtn = new Button("primary-btn", {
  text: "Shown Btn",
  classes: ["btn", "filled-btn"],
});

// dropdown-component
// let dropdown = document.getElementById("map-out");
// let testdropdown = new Dropdown(dropdown, "dropdown-btn", { selectOptions: ['options01', 'options02'] });
// console.log(testdropdown);

// Slider-components
let testSlider = new Slider({ initValue: 55, theme: "#c55acaff" });
let testSlider2 = new Slider({
  initValue: [66, 95],
  range: true,
  thumbImg: "/sticker.png",
});

function testCallback(value) {
  console.log("callback", value);
}


const sliderdom = document.querySelector(".sliderdom");

let slider3 = new Slider(sliderdom, { initValue: 79, callback: testCallback });


console.log(testSlider, testSlider2, slider3);
body.appendChild(testBtn._elem);
body.appendChild(testSlider.getElem());
body.appendChild(testSlider2.getElem());
