import { defineTypeof } from "../../Utils/Utils";
import { Dom, findElem } from "../../Utils/Dom";
import { BaseComponent } from "../BaseCompo";

var defaultNavBarConfig = {
  orientation: 'vertical',//horizontal,vertical
  placement: 'top',//start,end,top,bottom
  varient: '',
  theme: 'var(--color-theme-primary)'
};

export class NavBar extends BaseComponent {
  constructor(config) {
    const NavBarContainer = Dom.create('div');
    super(NavBarContainer);
    this.UItype = "NavBar";
  }
}