import { Config } from "prettier";
// @ts-expect-error no types available
import * as astro from "prettier-plugin-astro";
import * as tailwind from "prettier-plugin-tailwindcss";
// @ts-expect-error no types available
import sortPkg from "prettier-plugin-packagejson";

export default {
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
  plugins: [astro, tailwind, sortPkg],
} satisfies Config;
