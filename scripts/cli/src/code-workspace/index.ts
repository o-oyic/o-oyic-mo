import type { CAC } from 'cac';
import { findMonorepoRoot, getPackages, outputJSON, prettierFormat, toPosixPath } from '@oyic/node-utils';
import { join, relative } from 'node:path';

const CODE_WORKSPACE_FILE = join('o-oyic.code-workspace');

interface CodeWorkspaceCommandOptions {
  autoCommit?: boolean;
  spaces?: number;
}

async function createCodeWorkspace({ autoCommit = false, spaces = 2 }: CodeWorkspaceCommandOptions) {
  const { packages, rootDir } = await getPackages();

  let folders = packages.map((pkg) => {
    const { dir, packageJson } = pkg;
    return {
      name: packageJson.name,
      path: toPosixPath(relative(rootDir, dir)),
    };
  });

  folders = folders.filter(Boolean);

  const monorepoRoot = findMonorepoRoot();
  const outputPath = join(monorepoRoot, CODE_WORKSPACE_FILE);
  await outputJSON(outputPath, { folders }, spaces);

  await prettierFormat(outputPath);
  console.log(autoCommit);

  // TODO 自动提交到git缓存区，不然会存在其他文件都提交了，但是code-workspace文件还在更改状态
  // if (autoCommit) {
  //   await gitAdd(CODE_WORKSPACE_FILE, monorepoRoot);
  // }
}

async function runCodeWorkspace({ autoCommit, spaces }: CodeWorkspaceCommandOptions) {
  await createCodeWorkspace({
    autoCommit,
    spaces,
  });
  // if (autoCommit) {
  //   return;
  // }
}

function defineCodeWorkspaceCommand(cac: CAC) {
  cac
    .command('code-workspace')
    .usage('Update the `.code-workspace` file')
    .option('--spaces [number]', '.code-workspace JSON file spaces.', {
      default: 2,
    })
    .option('--auto-commit', 'auto commit .code-workspace JSON file.', {
      default: false,
    })
    .action(runCodeWorkspace);
}

export { defineCodeWorkspaceCommand };
