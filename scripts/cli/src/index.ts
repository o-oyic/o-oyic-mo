import cac from 'cac';
import { defineLintCommand } from './lint';
import { defineCodeWorkspaceCommand } from './code-workspace';

try {
  const oci = cac('oci');

  // oci lint [options = --format]
  defineLintCommand(oci);

  // oci gen code-workspace [options = --auto-commit]
  defineCodeWorkspaceCommand(oci);

  // Invalid command
  oci.on('command:*', () => {
    console.error('Invalid command!');
    process.exit(1);
  });

  oci.usage('oci');
  oci.help();
  oci.parse();
} catch (error) {
  console.error(error);
  process.exit(1);
}
