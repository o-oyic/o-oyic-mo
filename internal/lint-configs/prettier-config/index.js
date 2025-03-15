export default {
  endOfLine: "auto",
  overrides: [
    {
      files: ["*.json5"],
      options: {
        quoteProps: "preserve",
        singleQuote: false,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
  proseWrap: "never",
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
  printWidth: 120,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: "ignore",
  vueIndentScriptAndStyle: false,
  useEditorConfig: false,
  singleAttributePerLine: true,
};
