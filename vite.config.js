import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/Assets.js", // ✅ Entry file for the library
      name: "TaleemAssets",   // ✅ Library name
      fileName: () => "taleem-assets.js", // ✅ Single output file
      formats: ["es"], // ✅ Force ES module output
    },
    rollupOptions: {
      output: {
        format: "es", // ✅ Ensure ESM output
        globals: {
          howler: "Howler", // ✅ Ensure Howler is treated as an external global
        },
      },
    },
  },
});
