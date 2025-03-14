import js from "@eslint/js";
import globals from "globals";
import type { Linter } from "eslint";

export async function javascript(): Promise<Linter.Config[]> {
  return [
    {
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: "latest",
          sourceType: "module",
        },
        sourceType: "module",
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        // "unused-imports": pluginUnusedImports,
      },
      rules: {
        ...js.configs.recommended.rules,
        "accessor-pairs": ["error", { enforceForClassMembers: true, setWithoutGet: true }], //对象或class中，setter和getter必须要配套
        "array-callback-return": "error", // 数组遍历方法除了forEach外，必须要有返回值
        "block-scoped-var": "error", // 当变量在其定义的块之外被使用时
        "constructor-super": "error", // 派生类（子类）的构造者必须调用 super()
        // "default-case-last": "error",
        // "dot-notation": ["error", { allowKeywords: true }],
        eqeqeq: ["error", "always"], // 必须使用全等`===`，`!==`
        "new-cap": ["error", { capIsNew: false, newIsCap: true, properties: true }],
        "no-alert": "error", // 禁止alert
        "no-array-constructor": "error", // 不允许使用Array(0,1,2)的方式构建数组
        "no-async-promise-executor": "error", // 不允许在Promise的executor中使用异步
        "no-caller": "error", // 禁止使用 arguments.caller 和 arguments.callee
        "no-case-declarations": "error", // 不允许在 case/default 子句中进行声明（let、const、function 和 class）
        "no-class-assign": "error", // 不希望修改类声明的变量 class A {}; A = 0 ×  let A = class A{}; A = 0 √
        "no-compare-neg-zero": "error", // 禁止与-0进行比较
        "no-const-assign": "error", // 禁止重新分配const分配的变量
        "no-delete-var": "error", // 禁止使用delete删除变量
        "no-dupe-args": "error",
        "no-dupe-class-members": "error", // 禁止在类中使用重复的类成员
        "no-dupe-keys": "error", // 禁止在对象中使用重复的key
        "no-duplicate-case": "error", // 禁止在switch中使用重复的case
        "no-empty": ["error", { allowEmptyCatch: true }], // 禁止使用空的代码块
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-eval": "error", // 禁止使用eval()
        "no-ex-assign": "error", // 禁止对catch子句中的异常参数赋值
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error", // 禁止使用__proto__属性
        "no-prototype-builtins": "error", // 禁止直接在对象实例上调用Object.prototype的方法
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-restricted-globals": [
          "error",
          { message: "Use `globalThis` instead.", name: "global" },
          { message: "Use `globalThis` instead.", name: "self" },
        ],
        "no-restricted-properties": [
          "error",
          {
            message: "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
            property: "__proto__",
          },
          {
            message: "Use `Object.defineProperty` instead.",
            property: "__defineGetter__",
          },
          {
            message: "Use `Object.defineProperty` instead.",
            property: "__defineSetter__",
          },
          {
            message: "Use `Object.getOwnPropertyDescriptor` instead.",
            property: "__lookupGetter__",
          },
          {
            message: "Use `Object.getOwnPropertyDescriptor` instead.",
            property: "__lookupSetter__",
          },
        ],
        "no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement",
          "TSEnumDeclaration[const=true]",
          "TSExportAssignment",
        ],
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error", // 禁止使用稀疏数组
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "off",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
          },
        ],
        "no-unused-vars": [
          "error",
          {
            args: "none",
            caughtErrors: "none",
            ignoreRestSiblings: true,
            vars: "all",
          },
        ],
        "no-use-before-define": ["error", { classes: false, functions: false, variables: false }],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error", // 禁止使用var声明变量
        "no-with": "error", // 禁止使用with语句
        "object-shorthand": ["error", "always", { avoidQuotes: true, ignoreConstructors: false }],
        "one-var": ["error", { initialized: "never" }],
        "prefer-arrow-callback": [
          "error",
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        "prefer-const": [
          "error",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true,
          },
        ],
        "prefer-exponentiation-operator": "error",

        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "space-before-function-paren": "off",
        "spaced-comment": "error",
        "symbol-description": "error",
        "unicode-bom": ["error", "never"],

        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            vars: "all",
            varsIgnorePattern: "^_",
          },
        ],
        "use-isnan": ["error", { enforceForIndexOf: true, enforceForSwitchCase: true }],
        "valid-typeof": ["error", { requireStringLiterals: true }],

        "vars-on-top": "error",
        yoda: ["error", "never"],
      },
    },
  ];
}
