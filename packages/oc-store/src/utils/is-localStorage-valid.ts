function isLocalStorageValid(): boolean {
  try {
    // 检查localStorage是否存在
    if (typeof localStorage === 'undefined') {
      return false;
    }

    // 检查基本API是否存在
    if (!('setItem' in localStorage) || !('getItem' in localStorage) || !('removeItem' in localStorage)) {
      return false;
    }

    // 测试实际功能是否可用
    const testKey = '__test__';
    localStorage.setItem(testKey, 'test');
    const retrievedValue = localStorage.getItem(testKey);
    localStorage.removeItem(testKey);

    // 验证读写是否正常
    return retrievedValue === 'test';
  } catch {
    // 如果出现任何异常，认为不支持
    return false;
  }
}

export { isLocalStorageValid };
