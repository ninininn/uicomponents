

class customTable extends HTMLElement {
    static observedAttributes = ['cols', 'width', 'height'];
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    //Invoked when the custom element is first connected to the document's DOM.
    connectedCallback() {
        console.log("connect!");
        this._render();
    }

    //Invoked when the custom element is disconnected from the document's DOM.
    disconnectedCallback() {

    }

    //Invoked when the custom element is moved to a new document.
    adoptedCallback() {

    }

    //Invoked when one of the custom element's attributes is added, removed, or changed.
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
        );
    }

    _render() {
        this.shadowRoot.innerHTML = `
      <table class="table">
        <thead></thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
    `;
        this.createCol(this.col).map((colElem) => {
            this.shadowRoot.querySelector("thead").appendChild(colElem);
        });

    }

    setData(json) {
        this._columnData = json;
        this._render();
    }

    setCol(col) {
        this.col = col;
    }

    createCol(colsetting) {
        let columns = colsetting.map((col) => {
            let columnElem = document.createElement("custom-table-col");
            columnElem.setAttribute("title", col.title);
            columnElem.setAttribute("path", col.field);
            return columnElem;
        });

        return columns;
    }

    _findColumnNode(slot) {
        const nodes = [];
        for (let elem of slot.assignedNodes({ flatten: true })) {
            if (elem.matches(elem, "custom-table-col")) {
                nodes.push(elem);
            }
        }
        return nodes;
    }

}


class customTableCol extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

    }

    static get observedAttributes() {
        return ['path', 'title', 'field'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'title') {
            this.shadowRoot.innerHTML = `<td>${newValue}</td>`;
        }
    }
}

window.customElements.define('custom-table', customTable);
window.customElements.define('custom-table-col', customTableCol);
