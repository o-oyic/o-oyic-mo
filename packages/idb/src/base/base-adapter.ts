export abstract class BaseAdapter {
  checkExpiration(key: string): Promise<any> {
    return Promise.resolve(key);
  }

  setEncryptionKey(key: string): Promise<any> {
    return Promise.resolve(key);
  }

  abstract validateConnection(): Promise<boolean>;

  abstract connect(storeName: string): Promise<IDBDatabase | null | any>;
  abstract close(): Promise<void>;
}
