import type { CAC } from 'cac';
import * as execa from 'execa';

const { execaCommand } = execa;

interface LintCommandOptions {
  /**
   * 脚本命令是否传递了format选项
   * `oci lint --format`
   */
  format?: boolean;
}

async function runLint({ format }: LintCommandOptions) {
  console.log('Running lint...');

  if (format) {
    await execaCommand(`stylelint "**/*.{vue,css,less,scss}" --cache --fix --allow-empty-input`, {
      stdio: 'inherit',
    });
    await execaCommand(`eslint . --cache --fix`, {
      stdio: 'inherit',
    });
    await execaCommand(`prettier . --write --cache --log-level warn`, {
      stdio: 'inherit',
    });
    return;
  }
  await Promise.all([
    execaCommand(`eslint . --cache`, {
      stdio: 'inherit',
    }),
    execaCommand(`prettier . --ignore-unknown --check --cache`, {
      stdio: 'inherit',
    }),
    execaCommand(`stylelint "**/*.{vue,css,less,scss}" --cache --allow-empty-input`, {
      stdio: 'inherit',
    }),
  ]);
}

function defineLintCommand(cac: CAC) {
  cac
    .command('lint')
    .usage('Batch execute project lint check.')
    .option('--format', 'Format lint problem.')
    .action(runLint);
}

export { defineLintCommand };
