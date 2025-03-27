import type { StorageEngineType } from './type/engine';

class StorageFactory {
  private engineType: StorageEngineType | undefined;
  private static instance: StorageFactory | null = null;

  constructor() {
    this.engineType = this.detectStorageEngine();
  }

  public static getInstance(): StorageFactory {
    if (!StorageFactory.instance) {
      StorageFactory.instance = new StorageFactory();
    }
    return StorageFactory.instance;
  }

  public async create(dbName: string, version = 1) {
    const Adapter = (await import(`./adapter/${this.engineType}`)) as {
      // TODO default需要修改为具体的适配器类型
      default: new (dbName: string, version: number) => any;
    };
    return new Adapter.default(dbName, version);
  }

  /**
   * 检测当前浏览器支持的存储引擎
   */
  private detectStorageEngine() {
    if (window.indexedDB) {
      return 'indexedDB';
    } else if (window.localStorage) {
      return 'localStorage';
    } else if (window.sessionStorage) {
      return 'sessionStorage';
    }
    throw new Error('No storage engine available');
  }

  /**
   * 获取当前使用的存储引擎类型
   */
  public getEngineType() {
    return this.engineType;
  }
}

export { StorageFactory };
