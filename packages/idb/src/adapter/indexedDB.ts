import { BaseAdapter } from '../base/base-adapter';
import type { IAdapter } from '../type/adapter';

interface IIndexedDBAdapter {
  dbName: string;
  version: number;
  db: IDBDatabase | null;
}

class IndexedDBAdapter extends BaseAdapter implements IAdapter, IIndexedDBAdapter {
  dbName: string;
  version: number;
  db: IDBDatabase | null;
  constructor(dbName: string, version: number) {
    super();
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }

  /**
   * @description 连接数据库
   * @param storeName 存储库名称
   */
  override connect(storeName: string): Promise<IDBDatabase | null> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = () => reject(request.error);

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      request.onupgradeneeded = () => {
        const db = request.result;

        // 当indexedDB版本发生变化时，创建新的存储库
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }

  override validateConnection(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  override close(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  get(key: string): Promise<any> {
    console.log(key);

    throw new Error('Method not implemented.');
  }
  getAll(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  set(key: string, value: any): Promise<void> {
    console.log(key, value);
    throw new Error('Method not implemented.');
  }
  update(key: string, value: any): Promise<void> {
    console.log(key, value);
    throw new Error('Method not implemented.');
  }
  remove(key: string): Promise<void> {
    console.log(key);
    throw new Error('Method not implemented.');
  }
  clear(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  keys(): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  size(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}

export default IndexedDBAdapter;
