import { Breadcrumbs } from "../Breadcrumbs";
import "../Breadcrumbs.css";

/**
 * 手動傳入 paths 陣列
 */
export const createBreadcrumbs = ({ paths, theme }) => {
    const parent = document.createElement("div");
    parent.className = "p-4";

    const instance = new Breadcrumbs({ paths, theme });
    parent.appendChild(instance.el);

    console.log("instance:", instance);
    return parent;
};

/**
 * 示範 throughPath + onNavigate — 不使用 href，點擊麵包屑切換顯示的區塊
 *
 * 巢狀結構：
 * sectionA[data-route="首頁"]
 *   └─ sectionB[data-route="產品列表"]
 *        └─ sectionC[data-route="產品詳細"]
 *             └─ sectionD[data-route="產品詳細頁面"] ← 當前所在頁
 */
export const createBreadcrumbsFromElement = () => {
    const wrapper = document.createElement("div");
    wrapper.className = "p-4 flex flex-col gap-6";

    // 建立模擬巢狀導覽節點（不帶 href，純靠 handler 切換）
    const sectionA = document.createElement("section");
    sectionA.setAttribute("data-route", "首頁");

    const sectionB = document.createElement("section");
    sectionB.setAttribute("data-route", "產品列表");

    const sectionC = document.createElement("section");
    sectionC.setAttribute("data-route", "產品詳細");

    const sectionD = document.createElement("section");
    sectionD.setAttribute("data-route", "產品詳細頁面");

    sectionC.appendChild(sectionD);
    sectionB.appendChild(sectionC);
    sectionA.appendChild(sectionB);

    // 狀態顯示區（示意用）
    const status = document.createElement("p");
    status.className = "text-sm mt-2 text-gray-500";
    status.textContent = "當前：產品詳細頁面";

    const instance = Breadcrumbs.throughPath(sectionD, {
        onNavigate: (el) => {
            status.textContent = `切換到：${el.getAttribute("data-route")}`;
        },
    });

    wrapper.appendChild(instance.el);
    wrapper.appendChild(status);

    console.log(instance);
    return wrapper;
};
