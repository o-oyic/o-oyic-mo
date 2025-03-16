import typescriptEslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import vueParser from 'vue-eslint-parser';

/**
 * @type {import ('typescript-eslint').InfiniteDepthConfigWithExtends}
 */
export default typescriptEslint.config(
  {
    ignores: ['*.d.ts', '**/coverage', '**/dist', '*.js', '**/*/build/**/*'],
  },
  {
    files: ['**/*.{ts,vue}'],
    extends: [js.configs.recommended, ...typescriptEslint.configs.recommended],
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    rules: {
      'no-unused-vars': 'off', // 禁止未使用的变量
      'no-undef': 'warn', // 禁止未定义的变量
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁止使用console
      '@typescript-eslint/array-type': 'error', // 使用 T[] 而不是 Array<T>
      '@typescript-eslint/await-thenable': 'error', // 不允许等待不是thenable的对象
    },
    languageOptions: {
      ecmaVersion: 'latest', // 使用最新的ECMAScript版本
      sourceType: 'module', // 使用ECMAScript模块
      parser: vueParser,
      parserOptions: {
        extraFileExtensions: ['.vue'], // 检查拓展名为.vue的文件
        parser: typescriptEslint.parser, // 使用typescript-eslint的解析器，校验vue文件里的ts代码
        tsconfigRootDir: import.meta.dirname, // tsconfig.json文件的根目录
        projectService: true, // 使用typescript服务
      },
      globals: {
        // 全局变量，设置vue的宏定义为全局
        ...globals.browser,
        ...globals.node,
        defineProps: 'readable',
        defineEmits: 'readable',
        defineModel: 'readable',
        defineExpose: 'readable',
        defineOptions: 'readable',
        defineSlots: 'readable',
      },
    },
  },
  eslintConfigPrettier,
);
