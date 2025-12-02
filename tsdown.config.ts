import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  minify: false,
  publint: true,
  shims: true,
});
