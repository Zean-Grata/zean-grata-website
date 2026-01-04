import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // so you don’t need to import describe/it/expect everywhere
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});