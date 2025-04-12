/**
 * 获取浏览器的 IndexedDB 对象
 *
 * @description
 * 该函数用于获取不同浏览器环境下的 IndexedDB 实现
 * 由于浏览器兼容性问题，不同浏览器可能使用不同的前缀
 * 支持标准 indexedDB 以及 webkit、moz、O、ms 等前缀版本
 */
function getIDB() {
  try {
    if (typeof indexedDB !== 'undefined') {
      return indexedDB;
    }
    if (typeof window.webkitIndexedDB !== 'undefined') {
      return window.webkitIndexedDB;
    }
    if (typeof window.mozIndexedDB !== 'undefined') {
      return window.mozIndexedDB;
    }
    if (typeof window.OIndexedDB !== 'undefined') {
      return window.OIndexedDB;
    }
    if (typeof window.msIndexedDB !== 'undefined') {
      return window.msIndexedDB;
    }
  } catch {}
}

const idb = getIDB();
export { idb };
