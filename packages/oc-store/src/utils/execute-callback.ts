import type { ExecuteCallback } from '../typings/execute-callback';

/**
 * 封装回调的执行
 * @param promise
 * @param callback
 */
function executeCallback<T = any>(promise: Promise<T>, callback: ExecuteCallback<T>) {
  if (callback) {
    promise.then(
      (result) => {
        callback(null, result);
      },
      (error) => {
        callback(error);
      },
    );
  }
}

export { executeCallback };
