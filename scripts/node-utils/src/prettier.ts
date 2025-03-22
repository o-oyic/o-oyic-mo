import fsPromises from 'node:fs/promises';

import { format, getFileInfo, resolveConfig } from 'prettier';

async function prettierFormat(filepath: string) {
  const prettierOptions = await resolveConfig(filepath, {});

  const fileInfo = await getFileInfo(filepath);

  const input = await fsPromises.readFile(filepath, 'utf8');
  const output = await format(input, {
    ...prettierOptions,
    parser: fileInfo.inferredParser as any,
  });
  if (output !== input) {
    await fsPromises.writeFile(filepath, output, 'utf8');
  }
  return output;
}

export { prettierFormat };
