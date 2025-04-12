import { OcStore } from '../store/store';
import type { Version as IVersion, StoreOptions } from '../../typings/version';

export class Version implements IVersion {
  #db: OcStore;
  versionNumber: number;

  constructor(db: OcStore, versionNumber: number) {
    this.#db = db;
    this.versionNumber = versionNumber;
  }

  store(config: StoreOptions) {
    this.#db.name = config.name || 'oc';
    // const versions = this.#db.versions;
    console.log(this);

    return this;
  }
}
