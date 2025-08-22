# @jimmy.codes/prettier-config

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jimmy-guzman/prettier-config/cd.yml?style=flat-square&logo=github-actions)
[![version](https://img.shields.io/npm/v/prettier-config.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/@jimmy.codes/prettier-config)
[![downloads](https://img.shields.io/npm/dm/prettier-config.svg?logo=npm&style=flat-square)](http://www.npmtrends.com/@jimmy.codes/prettier-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://semantic-release.gitbook.io/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=prettier)](https://github.com/prettier/prettier)

> 💄 My personal [prettier](https://prettier.io) config

## 🐣 Features

- Supports `tailwindcss` through [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- Supports `astro` through [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- Sorts `package.json` properties through [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)
- Ignores `pnpm-lock.yaml`
- Uses `prettier`'s defaults except for `quoteProps` which is set as `"consistent"`
- [TypeScript prettier config file](https://prettier.io/docs/configuration#typescript-configuration-files) support

## 🛠️ Usage

First you need to install `@jimmy.codes/prettier-config`, for example with `pnpm`:

```
pnpm add -D @jimmy.codes/prettier-config
```

Then you can add the `prettier` key to your `package.json`, like so:

```json
{
  "prettier": "@jimmy.codes/prettier-config"
}
```

Or you can create a custom Prettier `prettier.config.ts` file:

```ts
import type { Config } from "prettier";
import base from "@jimmy.codes/prettier-config";

const config = {
  ...base,
} satisfies Config;

export default config;
```

### Tailwind CSS v4

Tailwind v4 requires telling the Prettier plugin where your Tailwind stylesheet is.
Because this path is project-specific, create a local Prettier config that extends this preset:

```ts
// prettier.config.ts
import type { Config } from "prettier";

import base from "@jimmy.codes/prettier-config";

const config = {
  ...base,
  tailwindStylesheet: "./src/styles/global.css",
} satisfies Config;

export default config;
```
