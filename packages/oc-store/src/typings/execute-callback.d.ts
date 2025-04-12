export interface ExecuteCallback<T = any> {
  (error: Error | null, result?: T): void;
}
