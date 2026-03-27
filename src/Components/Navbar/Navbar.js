import { defineTypeof } from "../../Utils/Utils";
import { Dom, findElem } from "../../Utils/Dom";
import { BaseComponent } from "../BaseCompo";

var defaultNavBarConfig = {
  orientation: 'vertical',//horizontal,vertical
  placement: 'top',//start,end,top,bottom
  animation: '',//cubiz, float, ease-in...
  in: '',
  out: '',
  varient: '',
  theme: 'var(--color-theme-primary)',
  items: [],//navitems
  size: 'md',//container尺寸(依照breakpoint)
};

export class NavBar extends BaseComponent {
  constructor(config) {
    const NavBarContainer = Dom.create('div');
    super(NavBarContainer);
    this.UItype = "NavBar";
    this._config = Object.assign({}, defaultNavBarConfig, config);
    this.navitems = this._sortItems(this._config.items);
  }

  //[內部控制]-把items依照順序排列
  _sortItems(items) {
    const navitems = items.map(item => new NavItem(item));
    return navitems.sort((a, b) => a.sort - b.sort);
  }

  _init() {
    this.el.append(...this.navitems);
  }

}

const defaultNavitemConfig = {
  title: '',
  size: 'md',//xs,sm,md,lg,xl 
  sort: 1,//在Navbar會依照順序排列
  handler: undefined,
  content: null,//可以是HTMLElement,string,component,innerHTML
};

//TODO NavItem或許會有subNavItems(compo參數可以放其他元件)
class NavItem extends BaseComponent {
  constructor(config) {
    const container = Dom.create("li");
    super(container);
    this._config = Object.assign({}, defaultNavitemConfig, config);
    this.size = this._config.size;
    this.sort = this._config.sort;
    this._init();

  }
  _init() {
    this.el.append(this._config.content);
  }
  _render() { }

  _setContent(){
    
  }
}