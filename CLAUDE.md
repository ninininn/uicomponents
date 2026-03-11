# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) 
when working with code in this repository.

始終用繁體中文說明

## Project Overview
UICompos is an UI library for our own team project, without using any framworks(etc.React).

### Build & Run
- `npm run dev` -for developing
- `npm run storybook` - for storybook testing
- `npm run deploy-storybook` - build static storybook and deploy on gitHub pages

## Technology Stack
- Vanilla JavaScript
- Tailwindcss 4.1.11
- Storybook 9.1.4
- Vite 7.0.4

## Key Directories
- `src/Components/` - components
- `src/Components/**/_stories_` - Storybook relate files
- `src/Doc/` - Global storyconfig
- `src/Utils/` - Utility functions
  
## Architecture
uicomponents/
├─ src/  
│ 	├── Components/  
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