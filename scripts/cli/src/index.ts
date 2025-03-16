import cac from 'cac';
import * as execa from 'execa';

console.log(123);
console.log(123);

const cli = cac('oci');
const { execaCommand } = execa;

cli
  .command('lint')
  .usage('Batch execute project lint check.')
  .option('--format', 'Format lint problem.')
  .action(runLint);

async function runLint({ format }: any) {
  if (format) {
    await execaCommand(`stylelint "**/*.{vue,css,less.scss}" --cache --fix`, {
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
    execaCommand(`stylelint "**/*.{vue,css,less.scss}" --cache`, {
      stdio: 'inherit',
    }),
  ]);
}
