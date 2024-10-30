import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true,
    environment: "node",
    include: ["*.spec.ts"],
    coverage: {
      reporter: ["text"],
    },
  },
});
