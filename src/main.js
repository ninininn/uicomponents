import "./style.css";
import { Button } from "./Components/Button";
import { Dropdown } from "./Components/Dropdown";
import { Slider, Input } from "./Components/Slider";

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

function targetfunction() {
  //取得value並操作...
  console.log("value:", this.getValue());
}
const sliderdom = document.querySelector(".sliderdom");

let slider3 = new Slider(sliderdom, {
  initValue: 79,
  handlers: targetfunction,
});

let testInput = new Input({
  type: 'text',
});
console.log(testSlider, testSlider2, slider3);
console.log(testInput);
body.appendChild(testBtn._elem);
body.appendChild(testSlider.getElem());
body.appendChild(testSlider2.getElem());
body.appendChild(testInput.getElem());
