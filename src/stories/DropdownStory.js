import { Dropdown } from "./Components/Dropdown/Dropdown";

export const createDropdown = ({ ...args }) => {
    const dropdown = new Dropdown(target, trigger, null, selectOptions);
    console.log(dropdown);
    return dropdown;
};
