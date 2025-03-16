import type { Linter, ESLint } from 'eslint';
import { interopDefault } from '../util';

export async function importPluginConfig(): Promise<Linter.Config[]> {
  const [pluginImport] = await Promise.all([
    interopDefault(import('eslint-plugin-import-x')) as unknown as ESLint.Plugin,
  ] as const);
  return [
    {
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-unresolved': 'off',
        'import/no-webpack-loader-syntax': 'error',
      },
    },
  ];
}
