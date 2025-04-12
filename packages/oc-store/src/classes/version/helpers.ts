import type { Version } from '../../typings/version';

export function lowerVersionFirst(a: Version, b: Version) {
  return a.versionNumber - b.versionNumber;
}
