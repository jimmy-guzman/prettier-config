import { defineConfig } from "tsdown";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  minify: false,
  publint: true,
  shims: true,
});
