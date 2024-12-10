import {Release} from '../../types/types';

export const isMoreRecentRelease = (
  releaseA: Release,
  releaseB: Release,
): boolean => {
  const lastModifiedA = new Date(releaseA.lastModified).getTime();
  const lastModifiedB = new Date(releaseB.lastModified).getTime();

  if (lastModifiedA === lastModifiedB)
    return releaseA.version >= releaseB.version;

  return lastModifiedA > lastModifiedB;
};
