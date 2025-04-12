import { BaseException } from '../../exceptions/base-exception';
import type { OcStore as IOcStore } from '../../typings/oc-store';
import type { Version as IVersion } from '../../typings/version';
import { lowerVersionFirst } from '../version/helpers';
import { Version } from '../version/version';

class OcStore implements IOcStore {
  _name: string = '';
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  #versions: IVersion[] = []; // 注册过的版本列表

  constructor(private worker?: Worker) {
    console.log(this.worker);
  }

  /**
   * 注册数据库版本
   *
   * （仅在内存中注册，还需要调用Version实例的store创建数据库）
   *
   *  => 建库语句 create DATABASE
   * @param versionNumber 版本号
   */
  versions(versionNumber: number) {
    if (isNaN(versionNumber) || versionNumber < 0.1) {
      throw new BaseException(`Given version is not a legal number`);
    }

    // 兼容ie浏览器能够创建0.1版本的数据库，默认会在传入的版本号*10
    versionNumber = Math.round(versionNumber * 10) / 10;

    const versions = this.#versions;

    // 当前数据库版本号如果存在，直接返回，否则新建一个数据库
    let versionInstance = versions.filter((v) => v.versionNumber === versionNumber)[0];

    if (versionInstance) {
      return versionInstance;
    }

    versionInstance = new Version(this, versionNumber);
    versionInstance.store({ name: 'test', description: 'asdasd' }).store({});

    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);

    return versionInstance;
  }
}

export { OcStore };
