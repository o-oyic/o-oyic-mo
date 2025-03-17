// import type { CAC } from 'cac';

// import { join, relative } from 'node:path';

// import {
//   colors,
//   findMonorepoRoot,
//   getPackages,
//   gitAdd,
//   outputJSON,
//   prettierFormat,
//   toPosixPath,
// } from '@vben/node-utils';

// const CODE_WORKSPACE_FILE = join('o-oyic.code-workspace');

// interface CodeWorkspaceCommandOptions {
//   autoCommit?: boolean;
//   spaces?: number;
// }

// /*
// 1.找到所有
// 2.

// */

// async function createCodeWorkspace({ autoCommit = false, spaces = 2 }: CodeWorkspaceCommandOptions) {
//   const { packages, rootDir } = await getPackages();

//   let folders = packages.map((pkg) => {
//     const { dir, packageJson } = pkg;
//     return {
//       name: packageJson.name,
//       path: toPosixPath(relative(rootDir, dir)),
//     };
//   });

//   folders = folders.filter(Boolean);

//   const monorepoRoot = findMonorepoRoot();
//   const outputPath = join(monorepoRoot, CODE_WORKSPACE_FILE);
//   await outputJSON(outputPath, { folders }, spaces);

//   await prettierFormat(outputPath);
//   if (autoCommit) {
//     await gitAdd(CODE_WORKSPACE_FILE, monorepoRoot);
//   }
// }

// async function runCodeWorkspace({ autoCommit, spaces }: CodeWorkspaceCommandOptions) {
//   await createCodeWorkspace({
//     autoCommit,
//     spaces,
//   });
//   if (autoCommit) {
//     return;
//   }
//   console.log('');
//   console.log(colors.green(`${CODE_WORKSPACE_FILE} is updated!`));
//   console.log('');
// }

// function defineCodeWorkspaceCommand(cac: CAC) {
//   cac
//     .command('code-workspace')
//     .usage('Update the `.code-workspace` file')
//     .option('--spaces [number]', '.code-workspace JSON file spaces.', {
//       default: 2,
//     })
//     .option('--auto-commit', 'auto commit .code-workspace JSON file.', {
//       default: false,
//     })
//     .action(runCodeWorkspace);
// }

// export { defineCodeWorkspaceCommand };
console.log(1);
