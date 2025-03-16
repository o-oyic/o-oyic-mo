import cac from 'cac';
import * as execa from 'execa';

const { execaCommand } = execa;

try {
  const cli = cac('oci');

  console.log(1);

  cli
    .command('lint')
    .usage('Batch execute project lint check.')
    .option('--format', 'Format lint problem.')
    .action(runLint);

  // Invalid command
  cli.on('command:*', () => {
    console.error('Invalid command!');
    process.exit(1);
  });

  cli.usage('vsh');
  cli.help();
  cli.parse();
} catch (error) {
  console.error(error);
  process.exit(1);
}

async function runLint({ format }: any) {
  console.log('Running lint...');

  if (format) {
    await execaCommand(`stylelint "**/*.{vue,css,less,scss}" --cache --fix`, {
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
    execaCommand(`stylelint "**/*.{vue,css,less,scss}" --cache`, {
      stdio: 'inherit',
    }),
  ]);
}
