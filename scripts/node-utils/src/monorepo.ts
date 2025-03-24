import { findUpSync } from 'find-up';
import { dirname } from 'node:path';
import { getPackagesSync as getPackagesSyncFunc, getPackages as getPackagesFunc } from '@manypkg/get-packages';
import type { Packages } from '@manypkg/get-packages';

/**
 * 查找monorepo仓库的根目录
 * @param cwd 当前工作路径
 */
function findMonorepoRoot(cwd: string = process.cwd()) {
  const file = findUpSync('pnpm-workspace.yaml', { cwd, type: 'file' });

  return dirname(file || '');
}

/**
 * 同步版获取monorepo仓库的所有包，即packages下的所有包
 */
function getPackagesSync(): Packages {
  const root = findMonorepoRoot();
  return getPackagesSyncFunc(root);
}

/**
 * 异步版获取所有包
 */
async function getPackages(): Promise<Packages> {
  const root = findMonorepoRoot();
  return await getPackagesFunc(root);
}

/**
 * 获取指定的包
 */
async function getPackage(pkgName: string) {
  const { packages } = await getPackages();
  return packages.find((pkg) => pkg.packageJson.name === pkgName);
}

export { findMonorepoRoot, getPackagesSync, getPackages, getPackage };
