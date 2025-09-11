import { Dropdown } from "./Dropdown";

export const createDropdown = ({ target, trigger, bindFilteroption = {}, filter, filterHandler, changeHandler = null }) => {
    bindFilteroption.filter = filter;
    bindFilteroption.filterHandler = filterHandler

    if (Array.isArray(trigger)) {
        return new Dropdown(target, trigger, bindFilteroption, changeHandler);
    } else {
        let container = document.createElement("div");
        container.innerHTML = `
            <h3 class="input-label">title</h3>
            <label class="label input-label">
                <input type="text" class="dropdown-input" />
            </label>
            <ul id="${target}" class="dropdown-item"></ul>
            <select id="${target.split('_')[0]}" class="select dropdown-select">
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
            </select>
        `;
        let targetEl = container.querySelector(`#${target}`);
        let triggerEl = targetEl.previousElementSibling.querySelector(`${trigger}`);
        return new Dropdown(targetEl, triggerEl, bindFilteroption, changeHandler);
    }
};
