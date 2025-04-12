function isIndexedDBValid(): boolean {
  try {
    // 检查基本的IndexedDB支持
    if (!('indexedDB' in window)) {
      return false;
    }

    // 检查IDBKeyRange支持（某些旧设备可能缺少）
    if (typeof IDBKeyRange === 'undefined') {
      return false;
    }

    // 检查Safari版本（Safari <10.1有兼容性问题）
    const isOldSafari =
      /Version\/[1-9]\.|Version\/10\.0/.test(navigator.userAgent) &&
      /Safari/.test(navigator.userAgent) &&
      !/Chrome/.test(navigator.userAgent);

    // 检查fetch支持（用于检测Safari >=10.1）
    const hasModernFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

    // 最终验证
    return !isOldSafari && hasModernFetch;
  } catch {
    return false;
  }
}
export { isIndexedDBValid };
