/**
 * @description 浏览器支持的存储引擎类型
 */
export type StorageEngineType = 'indexedDB' | 'localStorage' | 'sessionStorage';

export interface IDriver {
  select(key: string): Promise<any>;
  insert(key: string, value: any): Promise<void>;
  update(key: string, value: any): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  count(): Promise<number>;
  clearExpiredItems(): Promise<void>;
  drop(): Promise<void>;
  keys(): Promise<string[]>;
  size(): Promise<number>;
}
