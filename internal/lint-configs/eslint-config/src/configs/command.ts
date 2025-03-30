import { interopDefault } from '@oyic/kit';

export async function command() {
  const [createCommand] = await Promise.all([interopDefault(import('eslint-plugin-command/config'))] as const);

  return [createCommand()];
}
