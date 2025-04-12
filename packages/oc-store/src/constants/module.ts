import { IndexedDBAdapter, LocalStorageAdapter, SessionStorageAdapter } from '../classes/driver';

export const DEFAULT_DRIVERS = {
  indexedDB: IndexedDBAdapter,
  localStorage: LocalStorageAdapter,
  sessionStorage: SessionStorageAdapter,
} as const;
