import { BaseException } from './base-exception';

export class ModifyException extends BaseException {
  constructor(public errors: Error[]) {
    super('Modify operation failed');
  }
}
