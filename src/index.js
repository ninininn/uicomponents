//通用函式庫
import { Palette } from "./Utils/Color";
import { Exporter } from "./Utils/Exporter";
import { Printer } from "./Utils/Printer";
import { Checkbox } from "./Components/Checkbox/Checkbox";
import { Dropdown } from "./Components/Dropdown/Dropdown";
import { Notification } from "./Components/Notification/Notification";
import { Slider } from "./Components/Slider/Slider";
import { Table } from "./Components/Table/Table";
import { tools, Dom, debounce, BaseComponent } from "./Utils/Utils";
import { Reactive } from "./Utils/Reactive";

const UIcompos = {
  base: BaseComponent,
  tools: tools,
  palette: Palette,
  table: Table,
  checkbox: Checkbox,
  dropdown: Dropdown,
  notification: Notification,
  slider: Slider,
  dom: Dom,
};

export { UIcompos as default };
