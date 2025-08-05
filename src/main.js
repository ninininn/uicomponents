import "./style.css";
import { Button } from "./Components/Button";
import { Dropdown } from "./Components/Dropdown";
import { Slider } from "./Components/Slider";
import { Checkbox } from "./Components/Checkbox";
import { BaseComponent } from "./Utils";

let body = document.querySelector("body");

// btn-component
let testBtn = new Button("primary-btn", {
  text: "Shown Btn",
  classes: ["btn", "filled-btn"],
});

// Slider-components
let testSlider = new Slider({ initValue: 55, theme: "#c55acaff", disabled: true, });
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
  theme: "#c55acaff",
  disabled: true,
  handlers: targetfunction,
});

let sliderbind = new Slider({ initValue: 55, theme: "#69c17bff" });

// 如果是手動新增的元素就要append!
let label = document.createElement("ul");
//Checkbox Comonent
let testCheckbox = new Checkbox(label, {
  style: "toggle",
  checkImg: ["/eye.svg", "/eye-off.svg"],
  title: "testing",
  handlers: function (checkedValue) {
    sliderbind.setDisabled(checkedValue);
  },
});
console.log(slider3);
console.log(testCheckbox);
console.log(sliderbind);
// console.log(testSlider, testSlider2, slider3);
// body.appendChild(testBtn._elem);
// body.appendChild(testSlider.getElem());
// body.appendChild(testSlider2.getElem());
body.appendChild(sliderbind.getElem());
body.appendChild(label);


let indexCheckbox = document.getElementById("indexCheckbox");

const indexcheckCom = new Checkbox(indexCheckbox, { style: "switch", title: "A|B" });

console.log(indexcheckCom);