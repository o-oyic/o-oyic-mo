/**
 * @type {import('stylelint').Config}
 */
export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/*.json", "**/*.md"],
  overrides: [
    {
      // scss文件推荐格式化配置
      files: ["*.scss"],
      extends: ["stylelint-config-standard-scss"],
    },
    {
      customSyntax: "postcss-scss",
      extends: ["stylelint-config-recommended-scss", "stylelint-config-recommended-vue/scss"],
      files: ["*.scss", "**/*.scss"],
    },
    {
      // 针对vue文件的配置
      files: ["*.vue", "**/*.vue"],
      customSyntax: "postcss-scss",
      extends: ["stylelint-config-standard-scss", "stylelint-config-recommended-vue"],
      rules: {
        "no-empty-source": null,
      },
    },
  ],
  plugins: ["@stylistic/stylelint-plugin", "stylelint-scss"],
};
