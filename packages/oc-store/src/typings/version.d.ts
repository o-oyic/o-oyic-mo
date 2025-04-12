export interface StoreOptions {
  driver?: StorageEngineType;
  /**
   * 数据库名字，默认值为 'oc'，在localstorage中会作为所有key的前缀
   */
  name?: string;
  /**
   * 在添加前缀key的分隔符，默认为'-'
   */
  separator?: string;
  /**
   * 数据库描述，给开发者看的
   */
  description?: string;
}

export interface Version {
  versionNumber: number;
  store(config: StoreOptions): Version;
}
