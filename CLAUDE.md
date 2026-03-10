# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) 
when working with code in this repository.

始終用繁體中文說明

## Project Overview
UICompos is an UI library for our own team project, without using any framworks(etc.React).

### Build & Run
- `npm run dev` -for devoloping
- `npm run storybook` - for storybook Docs
- `npm run deploy storybook` - Deploy storybook on githubPge

## Technology Stack
- Vanilla JavaScript
- Tailwindcss
- Storybook
- Vite

## Key Directories
- `src/Components/` - components
- `src/Doc/` - Global storyconfig
- `src/Utils/` - Utility functions
- 
## Architecture
uicomponents/
├─ src/  
│ 	├── components/  
│	│ ├── Button/  
│	│ │ ├── Button.js  
│	│ │ ├── Button.css  
│	│ │ └── __stories__/  
│	│ │ ├── Button.stories.js  
│	│ │ └── Button.mdx  
│	│ │  
│	│ ├── Card/  
│	│ │ ├── Card.js  
│	│ │ ├── Card.css  
│	│ │ └── __stories__/  
│	│ │ └── Card.stories.js  
│	│ │  
│	│ └── ...  
│  
├── styles/  
│ ├── tokens.css  
│ ├── base.css  
│ └── index.css  
│  
└── index.js
│
├─ .storybook/
│  ├─ main.js
│  └─ preview.js                 # import ../src/styles/index.css
│
├─ dist/                         # ✅ build output（發佈到 npm 的）
│  ├─ index.js
│  ├─ index.cjs
│  └─ style.css
│
├─ vite.config.js
└─ package.json