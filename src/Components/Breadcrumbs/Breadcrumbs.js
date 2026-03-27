import { BaseComponent } from "../BaseCompo";
import { Dom } from "../../Utils/Dom";

const defaultBreadConfig = {
    size: 'md',
    separator: '/',//str or svg icon?
    ellipsis: false,
    current: undefined,
    limits: '5',
    theme: 'var(--color-pimary-500)', //decide the active color
    paths: [],//all route
};

export class Breadcrumbs extends BaseComponent {
    constructor(configs) {
        const container = Dom.create("div");
        super(container);
        this.UItype = 'Breadcrumbs';
        this._config = Object.assign({}, defaultBreadConfig, configs);
    }


    _init() {

    }

    _render() { }
}


const defaultCrumbConfig = {
    title: '',
    icon: null,
};

class Crumbs {
    coonstructor() {
        this.el = Dom.create("a");
    }
}