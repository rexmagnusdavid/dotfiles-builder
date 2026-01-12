import { type Config } from "prettier";

const config: Config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  printWidth: 80,
  trailingComma: "none",
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports"
  ]
};

export default config;
