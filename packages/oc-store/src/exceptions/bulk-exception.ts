import { BaseException } from './base-exception';

export class BulkException extends BaseException {
  constructor(public errors: Error[]) {
    super('Bulk operation failed');
  }
}
