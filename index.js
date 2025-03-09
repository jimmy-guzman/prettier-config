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
      files: ["pnpm-lock.yaml", "CHANGELOG.md", "*.gen.*"],
      options: {
        rangeEnd: 0,
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
        astroAllowShorthand: true,
      },
    },
  ],
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-astro"),
  ],
};
