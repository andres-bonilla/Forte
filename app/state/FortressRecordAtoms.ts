import {FortressRecord} from '../types/types';

import {atom} from 'jotai';

import {newRelease} from '../helpers/version-sistem/newRelease';

const emptyFortressRecord: FortressRecord = [];

export const fortressRecordAtom = atom(emptyFortressRecord);

export const addFortressIDAtom = atom(null, (get, set, alias: string) => {
  const newEntry = {
    id: 0,
    alias,
    release: newRelease(),
  };
  set(fortressRecordAtom, [...get(fortressRecordAtom), newEntry]);
});

export const editFortressIDAtom = atom(
  null,
  (get, set, {id, newAlias}: {id: number; newAlias?: string}) => {
    const modifiedFortressRecord = get(fortressRecordAtom).map(fortressID => {
      if (fortressID.id !== id) return fortressID;

      if (newAlias) fortressID.alias = newAlias;
      fortressID.release = newRelease(fortressID.release.version);
      return fortressID;
    });
    set(fortressRecordAtom, modifiedFortressRecord);
  },
);

export const removeFortressIDAtom = atom(null, (get, set, id: number) => {
  const filteredFortressRecord = get(fortressRecordAtom).filter(
    fortressID => fortressID.id !== id,
  );
  set(fortressRecordAtom, filteredFortressRecord);
});
