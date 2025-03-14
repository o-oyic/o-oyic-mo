import type { Linter } from "eslint";

type FlatConfig = Linter.Config;

// type FlatConfigPromise = FlatConfig | FlatConfig[] | Promise<FlatConfig> | Promise<FlatConfig[]>;

async function defineConfig(config: FlatConfig) {
  const [] = [];

  return config;
}

export { defineConfig };
