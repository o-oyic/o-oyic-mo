import type { StorageEngineType } from './type/engine';
import { interopDefault } from '@oyic/kit';

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
    // TODO default需要修改为具体的适配器类型
    const Adapter = await interopDefault<new (dbName: string, version: number) => any>(
      import(`./adapter/${this.engineType}`),
    );

    return new Adapter(dbName, version);
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
