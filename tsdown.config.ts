import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["index.ts"],
  format: ["esm"],
  minify: false,
  publint: true,
  shims: true,
});
