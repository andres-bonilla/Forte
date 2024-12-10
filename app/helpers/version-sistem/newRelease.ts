import {Release} from '../../types/types';

export const newRelease = (oldVersion?: number): Release => {
  return {
    lastModified: new Date().toISOString(),
    version: oldVersion ? oldVersion + 1 : 1,
  };
};
