function objSetPrototype<T extends object>(obj: T, properties: Record<keyof T, PropertyDescriptor>) {
  Object.defineProperties(obj, properties);
}
export { objSetPrototype };
