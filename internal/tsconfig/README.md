# tsconfig.json

```json
{
  "compilerOptions": {
    /* 项目相关 */
    "incremental": true /* 增量编译，允许将编译结果保存到 .tsbuildinfo 文件中，以优化后续的编译速度 */,
    "composite": true /* 组合项目，允许将多个项目组合成一个项目，以优化编译速度 */,
    "tsBuildInfoFile": "./" /* 指定 .tsbuildinfo 文件的输出目录 */,
    "disableSourceOfProjectReferenceRedirect": true /* 禁用项目引用的源文件重定向 */,
    "disableSolutionSearching": true /* 禁用解决方案搜索 */,
    "disableReferencedProjectLoad": true /* 禁用引用的项目加载 */,

    /* 语言和环境 */
    "target": "esnext" /* 编译目标，可选值：es3、es5、es6、es2015、es2016、es2017、es2018、es2019、es2020、esnext */,
    "lib": ["dom", "dom.iterable", "esnext"] /* 编译时需要引入的库文件 */,
    "jsx": "preserve" /* 控制 JSX 在 JavaScript 文件中的输出方式，可选值：react、react-jsx、react-jsxdev、react-native、preserve */,
    "experimentalDecorators": true /* 启用实验性的装饰器语法 */,
    "emitDecoratorMetadata": true /* 启用装饰器元数据 */,
    "jsxFactory": "React.createElement" /* 指定 JSX 的工厂函数 */,
    "jsxFragmentFactory": "React.Fragment" /* 指定 JSX 的片段工厂函数 */,
    "jsxImportSource": "react" /* 指定 JSX 的导入源 */,
    "reactNamespace": "React" /* 指定 React 的命名空间 */,
    "noLib": true /* 不引入默认的库文件 */,
    "useDefineForClassFields": true /* 使用 ECMAScript 中的类字段定义语法 */,
    "moduleDetection": "auto" /* 模块检测，可选值：auto、legacy、force */,

    /* 模块解析选项 */
    "module": "commonjs" /* 模块解析策略，可选值：none、commonjs、amd、system、umd、es2015、esnext */,
    "rootDir": "./" /* 指定项目根目录 */,
    "moduleResolution": "bundler" /* 模块解析策略，可选值：node、bundler、node16、nodenext，node项目建议使用node16选项 */,
    "baseUrl": "./" /* 指定模块解析的基本目录 */,
    "paths": {} /* 指定模块名到基于 baseUrl 的路径映射 */,
    "rootDirs": [] /* 指定多个根目录 */,
    "typeRoots": [] /* 指定类型声明文件的查找目录 */,
    "types": [] /* 指定需要引入的类型声明文件 */,
    "allowUmdGlobalAccess": true /* 允许 UMD 模块访问全局变量 */,
    "moduleSuffixes": [] /* 指定模块后缀名 */,
    "allowImportingTsExtensions": true /* 允许导入 .ts 文件 */,
    "resolvePackageJsonExports": true /* 解析 package.json 中的 exports 字段 */,
    "resolvePackageJsonImports": true /* 解析 package.json 中的 imports 字段 */,
    "customConditions": [] /* 指定自定义的条件 */,
    "resolveJsonModule": true /* 解析 JSON 模块 */,
    "allowArbitraryExtensions": true /* 允许导入任意扩展名的文件 */,
    "noResolve": true /* 不解析模块 */,
    "allowJs": true /* 允许编译 JavaScript 文件 */,
    "checkJs": true /* 允许检查 JavaScript 文件 */,
    "maxNodeModuleJsDepth": 1 /* 指定在 node_modules 中查找 JavaScript 文件的深度 */,

    /* 源码映射选项 */
    "declaration": true /* 生成声明文件 */,
    "declarationMap": true /* 生成声明文件映射文件 */,
    "emitDeclarationOnly": true /* 只生成声明文件 */,
    "sourceMap": true /* 生成源码映射文件 */,
    "inlineSourceMap": true /* 将源码映射文件内联到输出文件中 */,
    "outFile": "./" /* 将输出文件合并为一个文件 */,
    "outDir": "./" /* 指定输出目录 */,
    "removeComments": true /* 删除注释 */,
    "noEmit": true /* 不生成输出文件 */,
    "importHelpers": true /* 从 tslib 导入辅助函数 */,
    "importsNotUsedAsValues": "remove" /* 删除未使用的导入 */,
    "downlevelIteration": true /* 降级迭代器 */,
    "sourceRoot": "" /* 指定源码根目录 */,
    "mapRoot": "" /* 指定源码映射文件的根目录 */,
    "inlineSources": true /* 将源码内联到源码映射文件中 */,
    "emitBOM": true /* 在输出文件中添加 BOM */,
    "newLine": "lf" /* 指定换行符，可选值：crlf、lf */,
    "stripInternal": true /* 删除内部注释 */,
    "noEmitHelpers": true /* 不生成辅助函数 */,
    "noEmitOnError": true /* 编译错误时不生成输出文件 */,
    "preserveConstEnums": true /* 保留 const 枚举 */,
    "declarationDir": "./" /* 指定声明文件的输出目录 */,
    "preserveValueImports": true /* 保留值导入 */,
    "isolatedModules": true /* 禁用一些不支持的特性 */,
    "verbatimModuleSyntax": true /* 禁用模块解析 */,
    "allowSyntheticDefaultImports": true /* 允许从没有默认导出的模块中导入 */,
    "esModuleInterop": true /* 允许从 CommonJS 模块中导入 */,
    "preserveSymlinks": true /* 保留符号链接 */,
    "forceConsistentCasingInFileNames": true /* 强制文件名大小写一致 */,

    /* 类型检查选项 */
    "strict": true /* 启用所有严格类型检查选项 */,
    "noImplicitAny": true /* 禁止隐式的 any 类型 */,
    "strictNullChecks": true /* 启用严格的空值检查 */,
    "strictFunctionTypes": true /* 启用严格的函数类型检查 */,
    "strictBindCallApply": true /* 启用严格的 bind/call/apply 检查 */,
    "strictPropertyInitialization": true /* 启用严格的属性初始化检查 */,
    "noImplicitThis": true /* 禁止 this 表达式隐式的 any 类型 */,
    "useUnknownInCatchVariables": true /* 使用 unknown 替代 catch 变量的 any 类型 */,
    "alwaysStrict": true /* 在每个源文件中添加 'use strict' */,
    "noUnusedLocals": true /* 禁止未使用的局部变量 */,
    "noUnusedParameters": true /* 禁止未使用的参数 */,
    "exactOptionalPropertyTypes": true /* 启用精确的可选属性类型检查 */,
    "noImplicitReturns": true /* 禁止函数中的隐式返回 */,
    "noFallthroughCasesInSwitch": true /* 禁止 switch 语句的落空 case */,
    "noUncheckedIndexedAccess": true /* 禁止未检查的索引访问 */,
    "noImplicitOverride": true /* 禁止重写类成员的隐式声明 */,
    "noPropertyAccessFromIndexSignature": true /* 禁止从索引签名中访问属性 */,
    "allowUnusedLabels": true /* 允许未使用的标签 */,
    "allowUnreachableCode": true /* 允许不可达代码 */,

    /* 附加检查 */
    "skipDefaultLibCheck": true /* 跳过对默认库的类型检查 */,
    "skipLibCheck": true /* 跳过对声明文件的类型检查 */,

    /* 输出格式 */
    "noErrorTruncation": true /* 禁止错误信息截断 */,
    "preserveWatchOutput": true /* 保留 watch 输出 */,
    "pretty": true /* 使用漂亮的输出 */
  },
  "files": [
    "core.ts",
    "types.ts",
    "utils.ts",
    "maomao.ts"
  ] /* 指定 TypeScript 编译器应该编译哪些文件（支持相对路径、绝对路径） */,
  "include": [
    "src/**/*",
    "tests/**/*"
  ] /* 用于指定 TypeScript 编译器应该编译哪些文件（支持相对路径、绝对路径和 glob 模式） */,
  "exclude": ["node_modules", "maomao"] /* 用于指定 TypeScript 编译器应该忽略哪些文件，从而不对这些文件进行编译 */,
  "extends": "./tsconfig.base.json" /* 用于指定父级配置文件的路径，从而继承父级配置文件中的编译选项 */,
  "references": [{ "path": "./tsconfig.base.json" }] /* 用于指定项目引用的路径，从而引用项目 */
}
```

## web配置为什么不需要生成类型文件

web为业务项目，业务项目不需要构建ts类型文件
