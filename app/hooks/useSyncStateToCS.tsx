import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useAtomValue} from 'jotai';

import {fortressRecordAtom} from '../state/FortressRecordAtoms';

import {writeCS} from '../helpers/crypto-store/writeCS';

export const useSyncStateToCS = () => {
  const fortressRecord = useAtomValue(fortressRecordAtom);

  useEffect(() => {
    writeCS('Fortress-Alias-Record', fortressRecord)
      .then(message => {
        Alert.alert('SyncStateToCS:', message);
      })
      .catch((error: Error) => {
        Alert.alert(`Fail to SyncStateToCS: ${error.message}`);
      });
  }, [fortressRecord]);
};
