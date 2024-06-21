import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// export default ({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

//   const proxy_url =
//     process.env.VITE_DEV_REMOTE === 'remote'
//       ? process.env.VITE_BACKEND_SERVER
//       : 'http://localhost:8888/';

//   const config = {
//     plugins: [react()],
//     resolve: {
//       base: '/',
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//     server: {
//       port: 3000,
//       proxy: {
//         '/api': {
//           target: proxy_url,
//           changeOrigin: true,
//           secure: false,
//         },
//       },
//     },
//   };
//   return defineConfig(config);
// };

// PRETTIER RC CONTENT

// {
//   "printWidth": 100,
//   "trailingComma": "es5",
//   "tabWidth": 2,
//   "semi": true,
//   "singleQuote": true
// }

// PRETTIER IGNORE CONTENT
// # Ignore artifacts:
// build
// coverage
// node_modules
// public

// ESLINTRC.JSON  CONTENT

// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//     'react/prop-types': 0,
//   },
// };
