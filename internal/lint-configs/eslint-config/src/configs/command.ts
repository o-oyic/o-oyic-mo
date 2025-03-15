import { interopDefault } from "../util";

export async function command() {
  const [createCommand] = await Promise.all([interopDefault(import("eslint-plugin-command/config"))] as const);

  return [createCommand()];
}
