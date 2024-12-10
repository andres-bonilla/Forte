import {FortressRecord} from '../../types/types';

import EncryptedStorage from 'react-native-encrypted-storage';
const CryptoStore = EncryptedStorage;

export const readCS = (identifier: string): Promise<FortressRecord> => {
  return CryptoStore.getItem(identifier)
    .then(item => {
      if (item) return JSON.parse(item) as FortressRecord;
      return [];
    })
    .catch((error: Error) => {
      console.error(`Fail to load: ${error.message}`);
      return [];
    });
};
