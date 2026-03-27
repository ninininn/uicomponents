import { createBreadcrumbs, createBreadcrumbsFromElement } from "./BreadcrumbsStory";
import "../Breadcrumbs.css";
import BreadcrumbsAPIdoc from "./BreadcrumbsAPIdoc.mdx";

export default {
    title: "Components/Breadcrumbs",
    tags: ["autodocs"],
    parameters: {
        docs: {
            source: {
                format: true,
                language: "html",
            },
            page: BreadcrumbsAPIdoc,
        },
    },
    render: ({ ...args }) => {
        return createBreadcrumbs({ ...args });
    },
    argTypes: {
        paths: {
            control: "object",
            description: "麵包屑路徑清單，每項為 `{ label, href }`。最後一項不填 href 視為當前頁，不會加上連結",
            table: {
                category: "configurations",
                type: { summary: "Array<{ label: string, href?: string }>" },
                defaultValue: { summary: "[]" },
            },
        },
        theme: {
            control: "color",
            description: "主題色",
            table: {
                category: "configurations",
                defaultValue: { summary: "var(--stx-system-primary)" },
                type: { summary: "string" },
            },
        },
    },
    args: {
        paths: [
            { label: "首頁", href: "/" },
            { label: "產品列表", href: "/products" },
            { label: "產品詳細", href: "/details" },
            { label: "產品詳細內容" },
        ],
        theme: "var(--stx-system-primary)",
    },
};

/** 手動傳入 paths 陣列 */
export const Manual = {
    args: {
        paths: [
            { label: "首頁", href: "/" },
            { label: "產品列表", href: "/products" },
            { label: "產品詳細", href: "/details" },
            { label: "產品詳細內容" },
        ],
    },
};

/** 使用 Breadcrumbs.fromElement() — 自動從巢狀 DOM 的 data-route 屬性產生路徑 */
export const FromElement = {
    render: () => createBreadcrumbsFromElement(),
    args: {},
};
