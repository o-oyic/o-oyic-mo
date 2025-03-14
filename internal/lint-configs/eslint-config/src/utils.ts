export type Awaitable<T> = Promise<T> | T;

/**
 * 处理具名导出和默认导出模块的互操作性。
 * @param m 模块
 * @returns
 */
async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m;

  return (resolved as any)?.default || resolved;
}

export { interopDefault };
