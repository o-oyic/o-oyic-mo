import cac from 'cac';
import { defineLintCommand } from './lint';

try {
  const oci = cac('oci');

  // oci lint [options = --format]
  defineLintCommand(oci);

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
