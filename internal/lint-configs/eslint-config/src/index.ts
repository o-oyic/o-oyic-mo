import type { Linter } from 'eslint';
import { javascript, vue, typescript, importPluginConfig, command, ignores, jsonc } from './configs';
import type { ConfigWithExtendsArray } from './configs';
import { customConfig } from './custom-config';

type FlatConfig = Linter.Config;

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>
  | Promise<ConfigWithExtendsArray>;

async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    importPluginConfig(),
    typescript(),
    command(),
    vue(),
    javascript(),
    jsonc(),
    ignores(),
    ...customConfig,
    ...config,
  ];
  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
