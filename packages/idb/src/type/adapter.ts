export interface IAdapter {
  get(key: string): Promise<any>;
  getAll(): Promise<any[]>;
  set(key: string, value: any): Promise<void>;
  update(key: string, value: any): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  keys(): Promise<string[]>;
  size(): Promise<number>;
}
