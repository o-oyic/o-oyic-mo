import js from '@eslint/js';
import globals from 'globals';
import type { Linter } from 'eslint';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

export async function javascript(): Promise<Linter.Config[]> {
  return [
    {
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      plugins: {
        'unused-imports': pluginUnusedImports,
      },
      rules: {
        ...js.configs.recommended.rules,
        'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }], // 对象或class中，setter和getter必须要配套
        'array-callback-return': 'error', // 数组遍历方法除了forEach外，必须要有返回值
        'block-scoped-var': 'error', // 当变量在其定义的块之外被使用时
        'constructor-super': 'error', // 派生类（子类）的构造者必须调用 super()
        eqeqeq: ['error', 'always'], // 必须使用全等`===`，`!==`
        'new-cap': ['error', { capIsNew: false, properties: true }], // 构造函数名首字母必须大写，普通函数首字母必须小写
        'no-alert': 'error', // 禁止alert
        'no-array-constructor': 'error', // 不允许使用Array(0,1,2)的方式构建数组
        'no-async-promise-executor': 'error', // 不允许在Promise的executor中使用异步
        'no-caller': 'error', // 禁止使用 arguments.caller 和 arguments.callee
        'no-case-declarations': 'error', // 不允许在 case/default 子句中进行声明（let、const、function 和 class）
        'no-class-assign': 'error', // 不希望修改类声明的变量 class A {}; A = 0 ×  let A = class A{}; A = 0 √
        'no-compare-neg-zero': 'error', // 禁止与-0进行比较
        'no-const-assign': 'error', // 禁止重新分配const分配的变量
        'no-delete-var': 'error', // 禁止使用delete删除变量
        'no-dupe-args': 'error', // 不允许在函数声明或表达式中出现重复的参数名
        'no-dupe-class-members': 'error', // 禁止在类中使用重复的类成员
        'no-dupe-keys': 'error', // 禁止在对象中使用重复的key
        'no-duplicate-case': 'error', // 禁止在switch中使用重复的case
        'no-empty': ['error', { allowEmptyCatch: true }], // 禁止使用空的代码块
        'no-empty-function': 'off', // 允许空函数
        'no-empty-pattern': 'error', // 标记非结构化对象和数组中的任何空模式
        'no-eval': 'error', // 禁止使用eval()
        'no-ex-assign': 'error', // 禁止对catch子句中的异常参数赋值
        'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换
        'no-fallthrough': 'error', // 禁止case语句落空
        'no-func-assign': 'error', // 不允许重新分配 function 的声明。
        'no-implied-eval': 'error', // 禁止使用类似eval()的方法
        'no-import-assign': 'error', // 禁止对导入的绑定进行赋值
        'no-iterator': 'error', // 禁止使用__iterator__属性
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }], // 禁止使用标签语句
        'no-lone-blocks': 'error', // 禁止不必要的嵌套块
        'no-loss-of-precision': 'error', // 禁止在数值字面量中使用可能导致精度丢失的表示法
        'no-multi-str': 'error', // 禁止使用多行字符串
        'no-new': 'off', // 允许使用new操作符而不将结果赋值给变量
        'no-new-func': 'error', // 禁止使用Function构造函数
        'no-new-object': 'error', // 禁止使用Object构造函数
        'no-new-symbol': 'error', // 禁止使用Symbol构造函数
        'no-new-wrappers': 'error', // 禁止对String、Number和Boolean使用new操作符
        'no-obj-calls': 'error', // 禁止将全局对象当作函数调用
        'no-octal': 'error', // 禁止使用八进制字面量 let num = 012;×  let num = 0b12;√
        'no-proto': 'error', // 禁止使用__proto__属性
        'no-prototype-builtins': 'error', // 禁止直接在对象实例上调用Object.prototype的方法
        'no-redeclare': ['error', { builtinGlobals: false }], // 禁止重复声明变量
        'no-restricted-globals': [
          // 禁止使用特定的全局变量（global和self），使用globalThis代替
          'error',
          { message: 'Use `globalThis` instead.', name: 'global' },
          { message: 'Use `globalThis` instead.', name: 'self' },
        ],
        'no-restricted-properties': [
          // 禁止使用特定对象的特定属性
          'error',
          {
            message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
            property: '__proto__',
          },
          {
            message: 'Use `Object.defineProperty` instead.',
            property: '__defineGetter__',
          },
          {
            message: 'Use `Object.defineProperty` instead.',
            property: '__defineSetter__',
          },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupGetter__',
          },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupSetter__',
          },
        ],
        'no-self-assign': ['error', { props: true }], // 禁止自我赋值，但是允许自我属性赋值
        'no-self-compare': 'error', // 禁止自身比较
        'no-shadow-restricted-names': 'error', // 禁止将标识符定义为受限的名字
        'no-sparse-arrays': 'error', // 禁止使用稀疏数组
        'no-this-before-super': 'error', // 禁止在构造函数中，在调用super()之前使用this或super
        'no-throw-literal': 'error', // 不允许抛出不可能是 Error 对象的字面和其他表达式
        'no-unexpected-multiline': 'error', // 禁止出现令人困惑的多行表达式
        'no-unreachable': 'error', // 禁止在return、throw、continue和break语句后出现不可达代码
        'no-unreachable-loop': 'error', // 禁止出现无法到达的循环
        'no-unsafe-finally': 'error', // 禁止在finally块中出现控制流语句
        'no-unsafe-negation': 'error', // 禁止对关系运算符的左操作数使用否定操作符
        'no-unused-expressions': [
          // 禁止出现未使用的表达式，但允许短路求值、三元表达式和标记模板字面量
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
          },
        ],
        'no-unused-vars': [
          // 禁止出现未使用的变量
          'error',
          {
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
          },
        ],
        'no-use-before-define': ['error', { classes: false, functions: false, variables: false }], // 禁止在变量定义之前使用它们，但允许函数和类的提升
        'no-useless-call': 'error', // 禁止不必要的call和apply
        'no-useless-catch': 'error', // 禁止不必要的catch子句
        'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
        'no-useless-constructor': 'error', // 禁止不必要的构造函数
        'no-useless-rename': 'error', // 禁止在import、export和解构赋值中将引用重命名为相同的名字
        'no-useless-return': 'error', // 禁止多余的return语句
        'no-var': 'error', // 禁止使用var声明变量
        'no-with': 'error', // 禁止使用with语句
        'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }], // 要求使用对象字面量简写语法
        'prefer-arrow-callback': [
          // 要求回调函数使用箭头函数
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        'prefer-const': [
          // 要求使用const声明那些声明后不再被修改的变量
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
          },
        ],
        'prefer-exponentiation-operator': 'error', // 要求使用指数运算符而不是Math.pow()

        'prefer-rest-params': 'error', // 要求使用剩余参数而不是arguments
        'prefer-spread': 'error', // 要求使用扩展运算符而不是.apply()
        'prefer-template': 'error', // 要求使用模板字面量而不是字符串连接
        'space-before-function-paren': 'off', // 函数名或 function 关键字和开头的括号之间允许有空白
        'spaced-comment': 'error', // 要求在注释前有空白
        'symbol-description': 'error', // 要求symbol描述
        'unicode-bom': ['error', 'never'], // 文件就不能以 U+FEFF 开头
        'unused-imports/no-unused-imports': 'error', // 查找并删除未使用的 es6 模块导入
        'unused-imports/no-unused-vars': [
          // 禁止未使用的变量，但允许以_开头的未使用参数
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
        'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }], // 要求使用isNaN()检查NaN
        'valid-typeof': ['error', { requireStringLiterals: true }], // 强制将 typeof 表达式与有效的字符串字面量进行比较
        'vars-on-top': 'error', // 要求变量声明放在作用域顶部
        yoda: ['error', 'never'], // 禁止Yoda条件（如if (42 === age)）
      },
    },
  ];
}
