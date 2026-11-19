import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n}from"./blocks-gwT75y1v.js";import{s as r}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i,r as a}from"./react-DITjJg24.js";function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,hr:`hr`,img:`img`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(n,{title:`Symbols`}),`# ArcGIS Symbols工具函式\r
包裝 ArcGIS 相關類別，方便調用。`]}),`
`,(0,c.jsx)(t.h1,{id:`symbols`,children:`Symbols`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:`https://developers.arcgis.com/javascript/latest/references/core/symbols/types/#SymbolUnion`,rel:`nofollow`,children:`ArcGIS SymbolUnion 類別`})}),`
`,(0,c.jsx)(t.h3,{id:`symbol2dunion`,children:`Symbol2DUnion`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`用於 2D 場景的圖標類別`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:`.storybook%5CSymbol2DUnion.png`,alt:`Symbol2DUnion`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`TextSymbol`}),`\r
`,(0,c.jsx)(t.code,{children:`GetTextSymbol(p_color, p_text, p_halocolor, p_halosize, p_xoffset, p_yoffset, p_size, p_family, p_weight)`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let defText = {\r
    type: 'text',\r
    color: p_color,\r
    text: p_text,\r
    haloColor: p_halocolor, \r
    haloSize: p_halosize,   \r
    xoffset: p_xoffset,\r
    yoffset: p_yoffset,\r
    font: {\r
        size: p_size,\r
        family: p_family,\r
        weight: p_weight\r
    }\r
};
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`SimpleMarkerSymbol`}),`\r
`,(0,c.jsx)(t.code,{children:`GetSimpleMarkerSymbol(p_color, p_style, p_size, p_olcolor, p_olwidth, p_olstyle)`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let defSimMrk = {\r
    type: 'simple-marker',\r
    style: p_style,\r
    color: p_color,\r
    size: p_size,\r
    outline: {\r
        width: p_olwidth,\r
        color: p_olcolor,\r
        style: p_olstyle\r
    }\r
}; 
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`PictureMarkerSymbol`}),`\r
`,(0,c.jsx)(t.code,{children:`GetPictureMarkerSymbol(p_url, p_width, p_height)`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let defPicMrk = {\r
    type: 'picture-marker',\r
    url: p_url,\r
    width: p_width,\r
    height: p_height,\r
};
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`SimpleLineSymbol`}),`\r
`,(0,c.jsx)(t.code,{children:`GetSimpleLineSymbol(p_style, p_color, p_width)`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let defSimLine = {\r
    type: 'simple-line',\r
    style: p_style,\r
    color: p_color,\r
    width: p_width\r
};
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`SimpleFillSymbol`}),`\r
`,(0,c.jsx)(t.code,{children:`GetSimpleFillSymbol(p_color, p_style, p_olcolor, p_olwidth, p_olstyle)`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let defSimFill = {\r
    type: 'simple-fill',\r
    style: p_style,\r
    color: p_color,\r
    outline: {\r
        width: p_olwidth,\r
        color: p_olcolor,\r
        style: p_olstyle\r
    }\r
};
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`symbol3dunion`,children:`Symbol3DUnion`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`用於 3D 場景的圖標類別`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{src:`.storybook%5CSymbol3DUnion.png`,alt:`Symbol3DUnion`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`PolygonSymbol3D`}),`\r
`,(0,c.jsx)(t.code,{children:`GetPolygonSymbol3D(p_type, p_size, p_color)`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let def3DPolygon = {\r
    type: 'polygon-3d',\r
    symbolLayers: [{     \r
        type: p_type,\r
        size: p_size,\r
        material: { color: p_color }\r
    }]\r
};
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`LabelSymbol3D`}),`\r
`,(0,c.jsx)(t.code,{children:`GetLabelSymbol3D(p_symtype, p_text, p_size, p_matcolor, p_hacolor, p_hasize, p_family, p_weight, p_fontsty, p_scrlen, p_maxwdlen, p_minwdlen, p_couttype, p_coutsize, p_coutcolor, p_coutbdcolor)`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let def3DLabel = {\r
    type: p_symtype,   \r
    symbolLayers: [{\r
        type: 'text',\r
        text: p_text,\r
        size: p_size,\r
        material: { color: p_matcolor },          \r
        halo: {\r
            color: p_hacolor, \r
            size: p_hasize\r
        },\r
        font: {\r
            family: p_family,\r
            weight: p_weight,  \r
            style: p_fontsty    \r
        }\r
    }],\r
    verticalOffset: {\r
        screenLength: p_scrlen,\r
        maxWorldLength: p_maxwdlen,\r
        minWorldLength: p_minwdlen\r
    },\r
    callout: new LineCallout3D({\r
        type:p_couttype,\r
        size: p_coutsize,\r
        color: p_coutcolor,\r
        border: { color: p_coutbdcolor }\r
    })\r
};
`})}),`
`,(0,c.jsx)(t.h4,{id:`pointsymbol3d`,children:(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`PointSymbol3D`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.code,{children:`GetPointSymbol3D_icon( p_size, p_source, p_matcolor, p_anchor, p_olcolor, p_olsize, p_scrlen, p_maxwdlen, p_minwdlen, p_couttype, p_coutsize, p_coutcolor, p_coutbdcolor)`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let def3DPoint = {\r
    type: p_symtype,   \r
    symbolLayers: [{\r
        type: 'text',\r
        text: p_text,\r
        size: p_size,\r
        material: { color: p_matcolor },          \r
        halo: {\r
            color: p_hacolor, \r
            size: p_hasize\r
        },\r
        font: {\r
            family: p_family,\r
            weight: p_weight,  \r
            style: p_fontsty    \r
        }\r
    }],\r
    verticalOffset: {\r
        screenLength: p_scrlen,\r
        maxWorldLength: p_maxwdlen,\r
        minWorldLength: p_minwdlen\r
    },\r
    callout: new LineCallout3D({\r
        type:p_couttype,\r
        size: p_coutsize,\r
        color: p_coutcolor,\r
        border: { color: p_coutbdcolor }\r
    })\r
};
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h3,{id:`webstylesymbol`,children:`WebStyleSymbol`})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};