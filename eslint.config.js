import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**", "eslint.config.js", "jest.config.js", "next-env.d.ts"],
  },
  ...compat.extends("next", "next/core-web-vitals"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": ["warn"],
    },
  },
];