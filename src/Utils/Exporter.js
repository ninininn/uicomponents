import ExcelJs from "exceljs";

export function Exporter({ title, data, type, name }) {
    const workbook = new ExcelJs.Workbook();
    const sheet = workbook.addWorksheet(title);
    sheet.addTable({
        name: name,
        headerRow: true,
        ref: 'A1', // 從A1開始
        columns: [...data.columns],
        rows: [...data.rows],
    });

    switch (type) {
        case 'xslx':
            workbook.xlsx.writeBuffer().then((content) => {
                console.log("blob content:", content);
                const link = document.createElement("a");
                const blobData = new Blob([content], {
                    type: "application/vnd.ms-excel;charset=utf-8;"
                });
                link.download = `${title}.xlsx`;
                link.href = URL.createObjectURL(blobData);
                link.click();
            });
            break;
        case 'csv':
            break;
    }
}