import { BaseComponent } from "../BaseCompo";
import { Dom } from "../../Utils/Dom";

const defaultBreadConfig = {
    paths: [], // [{ label, href?, handler? }] - 三者互斥：href → <a>、handler → <button>、兩者都沒有 → 當前頁純文字
    theme: 'var(--stx-system-primary)',
    size: 'md',
};

export class Breadcrumbs extends BaseComponent {
    constructor(configs) {
        const crumbList = Dom.create('div');
        super(crumbList);
        this.UItype = 'Breadcrumbs';
        this._config = Object.assign({}, defaultBreadConfig, configs);
        this._init();
    }

    /**
     * 從指定 DOM 元素往上遍歷，自動收集有 data-route 屬性的祖先節點，建立麵包屑
     * @param {HTMLElement} currentEl - 當前所在的最深層導覽節點
     * @param {string} attr - 識別導覽節點的 data attribute 名稱，預設 'data-route'
     * @returns {Breadcrumbs}
     */
    /**
     * @param {HTMLElement} currentEl
     * @param {object} [options]
     * @param {string} [options.attr='data-route'] - 識別導覽節點的 data attribute
     * @param {function} [options.onNavigate] - 點擊非當前頁時的 callback，接收對應的 HTMLElement
     */
    static fromElement(currentEl, { attr = 'data-route', onNavigate } = {}) {
        const nodes = [];
        let current = currentEl;

        while (current) {
            if (current.hasAttribute(attr)) {
                nodes.unshift({ el: current, label: current.getAttribute(attr) });
            }
            current = current.parentElement;
        }

        const paths = nodes.map(({ el, label }, index) => {
            const isLast = index === nodes.length - 1;
            if (isLast || !onNavigate) return { label };
            return { label, handler: () => onNavigate(el) };
        });

        return new Breadcrumbs({ paths });
    }

    _init() {
        Dom.setAttr(this.el, 'aria-label', 'breadcrumb');
        Dom.addClass(this.el, 'breadcrumb');

        const ol = Dom.create('ol');
        Dom.addClass(ol, 'breadcrumb-list');

        this._config.paths.forEach((path, index) => {
            const isLast = index === this._config.paths.length - 1;
            const li = Dom.create('li');
            Dom.addClass(li, ['breadcrumb-item']);

            if (isLast) {
                Dom.setAttr(li, 'aria-current', 'page');
                Dom.addClass(li, ['breadcrumb-item--current']);
                Dom.setText(li, path.label);
            } else if (path.href) {
                const a = Dom.create('a');
                a.href = path.href;
                Dom.setText(a, path.label);
                li.append(a);
            } else if (path.handler) {
                const btn = Dom.create('button');
                btn.type = 'button';
                Dom.addClass(btn, ['breadcrumb-btn']);
                Dom.setText(btn, path.label);
                this.onevent(btn, 'click', path.handler);
                li.append(btn);
            } else {
                Dom.setText(li, path.label);
            }

            ol.append(li);
        });

        this.el.append(ol);
    }
}
