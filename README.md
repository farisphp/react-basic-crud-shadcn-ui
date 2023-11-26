# React + Vite + TypeScript Template (react-vite-ui)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Dan5py/react-vite-ui/blob/main/LICENSE)

A React + Vite template powered by shadcn/ui.

## 🎉 Features

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS** - A utility-first CSS framework.
- **Tailwind Prettier Plugin** - A Prettier plugin for formatting Tailwind CSS classes.
- **ESLint** - A pluggable linting utility for JavaScript and TypeScript.
- **PostCSS** - A tool for transforming CSS with JavaScript.
- **Autoprefixer** - A PostCSS plugin to parse CSS and add vendor prefixes.
- **shadcn/ui** - Beautifully designed components that you can copy and paste into your apps.
- **react-query** - Powerful asynchronous state for React.
- **react-cookies** - Universal cookies for React.
- **react-router-dom** - Declarative routing for React web applications.

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 16 or above)
- pnpm (package manager)

## 🚀 Getting Started

Follow these steps to get started with the react-vite-ui template:

1. Clone the repository:

   ```bash
   git clone https://github.com/dan5py/react-vite-ui.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-vite-ui
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```
4. Copy .env.example and update the configuration:

   ```bash
   cp .env.example .env
   ```

5. Start the development server:

   ```bash
   pnpm dev
   ```

## 📜 Available Scripts

- pnpm dev - Starts the development server.
- pnpm build - Builds the production-ready code.
- pnpm lint - Runs ESLint to analyze and lint the code.
- pnpm preview - Starts the Vite development server in preview mode.

## 📂 Project Structure

```python
react-vite-ui/
  ├── node_modules/      # Project dependencies
  ├── public/            # Public assets
  ├── src/               # Application source code
  │   ├── components/    # React components
  │   │   └── ui/        # shadc/ui components
  │   │   └── shared/        # shared components
  │   ├── config/        # Config file
  │   ├── libs/          # Utility functions
  │   ├── pages/         # Pages file and relative components/utils
  │   ├── routes/        # Application routes
  │   ├── schemas/       # Application form schemas
  │   ├── styles/        # CSS stylesheets
  │   └── main.tsx      # Main rendering file
  ├── .eslintrc.json     # ESLint configuration
  ├── index.html         # HTML entry point
  ├── postcss.config.js  # PostCSS configuration
  ├── tailwind.config.js # Tailwind CSS configuration
  ├── tsconfig.json      # TypeScript configuration
  └── vite.config.ts     # Vite configuration
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
