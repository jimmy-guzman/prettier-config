/** @type {import("prettier").Options} */
module.exports = {
  semi: true,
  singleQuote: false,
  printWidth: 80,
  jsxSingleQuote: false,
  arrowParens: "always",
  trailingComma: "all",
  quoteProps: "consistent",
  overrides: [
    {
      files: ["pnpm-lock.yaml", "CHANGELOG.md"],
      options: {
        rangeEnd: 0,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
