export const keys = Object.keys;
export const _hasOwn = {}.hasOwnProperty;
export function hasOwn(obj: any, prop: any) {
  return _hasOwn.call(obj, prop);
}
export const getProto = Object.getPrototypeOf;
export const defineProperty = Object.defineProperty;

export function extend<T = any, X = any>(obj: T, extension: X): T & X {
  if (typeof extension !== 'object') return obj as T & X;

  keys(extension as any).forEach((key) => {
    (obj as any)[key] = (extension as any)[key];
  });
  return obj as T & X;
}

export function props(proto: any, extension: any) {
  if (typeof extension === 'function') extension = extension(getProto(proto));
  (typeof Reflect === 'undefined' ? keys : Reflect.ownKeys)(extension).forEach((key) => {
    setProp(proto, key, extension[key]);
  });
}

export function setProp(obj: any, prop: any, functionOrGetSet: any, options?: any) {
  defineProperty(
    obj,
    prop,
    extend(
      functionOrGetSet && hasOwn(functionOrGetSet, 'get') && typeof functionOrGetSet.get === 'function'
        ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true }
        : { value: functionOrGetSet, configurable: true, writable: true },
      options,
    ),
  );
}

export function derive(Child: any) {
  return {
    from(Parent: any) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, 'constructor', Child);
      return {
        extend: props.bind(null, Child.prototype),
      };
    },
  };
}
