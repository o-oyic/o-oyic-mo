import type { TableSchema } from './table-schema';

export type DbSchema = { [tableName: string]: TableSchema };
