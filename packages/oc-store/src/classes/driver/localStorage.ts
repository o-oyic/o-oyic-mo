class LocalStorageAdapter {
  constructor() {
    console.log(1);
  }
  public async getItem(key: string) {
    console.log(key);
  }
}
export { LocalStorageAdapter };
