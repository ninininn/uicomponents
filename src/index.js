//通用函式庫
import { Palette } from "./Utils/Color";
import { Exporter } from "./Utils/Exporter";
import { Printer } from "./Utils/Printer";
import { Checkbox } from "./Components/Checkbox/Checkbox";
import { Dropdown } from "./Components/Dropdown/Dropdown";
import { ColorPicker } from "./Components/ColorPicker/ColorPicker";
import { Notification } from "./Components/Notification/Notification";
import { Slider } from "./Components/Slider/Slider";
import { BasicInfoCard } from "./Components/Card/Cards";
import { Tabs } from "./Components/Tabs/Tabs";
import { Table } from "./Components/Table/Table";
import { tools } from "./Utils/Utils";
import { Dom } from "./Utils/Dom";
import { BaseComponent } from "./Components/BaseCompo";
import { DraggableItem } from "./Components/DraggableItem/DraggableItem";
import { createSignal, createEffect, computed } from "./Utils/Reactive";

//Styles
import "./Styles/style.css";

const UIcompos = {
  base: BaseComponent,
  tools: tools,
  palette: Palette,
  table: Table,
  checkbox: Checkbox,
  dropdown: Dropdown,
  notification: Notification,
  slider: Slider,
  card: BasicInfoCard,
  dom: Dom,
  colorpicker: ColorPicker,
  draggable: DraggableItem,
  tabs: Tabs
};

export { UIcompos as default, Checkbox, Dropdown, Table, Slider, Notification, ColorPicker, BasicInfoCard, DraggableItem, Tabs, Palette, Dom, tools, BaseComponent, createSignal, createEffect, computed };
