// import tableCss from "/storybook-static/assets/Table-DxuPI7tj.css?raw";
// import indexCss from "/dist/assets/index-yBittNtT.css?raw";
export function Printer(elem, dataObj, type = 'table') {
    const printObj = Object.assign({}, dataObj);
    const printElem = elem;

    const printWin = window.open("about:blank", "_blank");
    //print-css-style
    const style = document.createElement("style");
    style.type = 'text/css';

    const cssContent = `
    *{color:#000;}
    @media print{
        * {
            -webkit-print-color-adjust: exact !important;
        }
        .noBreak {
            break-inside: avoid;
        }
        .noPrint{
            display:none;
        }
    }

    @page{
        size:A4 portrait;
    }

    table{
        border-collapse:collapse;
        border:1px solid #000;
    }

    thead{
        background-color:var(--theme);
        border-bottom:1px solid #000;
    }
        thead .icon,th[data-print=print],.table-resizer{
        display:none;}
    tr:not(:last-child){
        border-bottom:1px solid #000
    }
        th,td{
            border-right:1px solid #000;
        }
    `;

    style.innerText = cssContent;
    document.head.appendChild(style);

    switch (type) {
        case "table":
            elem.classList.add("table");
            break;
        default:
            break;
    }
    printWin.document.head.append(style);
    printWin.document.body.appendChild(elem);

    printWin.print();
};