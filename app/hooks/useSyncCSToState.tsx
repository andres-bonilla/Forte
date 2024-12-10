import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useSetAtom} from 'jotai';

import {fortressRecordAtom} from '../state/FortressRecordAtoms';

import {readCS} from '../helpers/crypto-store/readCS';

export const useSyncCSToState = () => {
  const setFortressRecord = useSetAtom(fortressRecordAtom);

  useEffect(() => {
    readCS('Fortress-Alias-Record')
      .then(recordOnCS => setFortressRecord(recordOnCS || []))
      .catch((error: Error) => {
        Alert.alert(`Fail to SyncCSToState: ${error.message}`);
      });
  }, []);
};
