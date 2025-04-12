declare global {
  interface Window {
    indexedDB: IDBFactory;
    webkitIndexedDB: IDBFactory;
    mozIndexedDB: IDBFactory;
    OIndexedDB: IDBFactory;
    msIndexedDB: IDBFactory;
    chrome: any;
  }

  declare const InstallTrigger: any;

  interface Document {
    documentMode: any;
  }
}
export {};
