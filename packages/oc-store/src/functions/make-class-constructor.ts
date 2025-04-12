import { derive } from './utils';

export function makeClassConstructor<TConstructor>(prototype: object, constructor: any) {
  derive(constructor).from({ prototype });
  return constructor as any as TConstructor;
}
