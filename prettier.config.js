// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  printWidth: 80,
  tabWidth: 4,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  importOrder: [
    "^@core/(.*)$",
    "",
    "^@server/(.*)$",
    "",
    "^@ui/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
