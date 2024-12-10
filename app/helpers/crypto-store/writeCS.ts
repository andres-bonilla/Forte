import {Fortress, FortressRecord} from '../../types/types';

import EncryptedStorage from 'react-native-encrypted-storage';
const CryptoStore = EncryptedStorage;

export const writeCS = (
  identifier: string,
  newData: Fortress | FortressRecord,
): Promise<string> => {
  return CryptoStore.setItem(identifier, JSON.stringify(newData))
    .then(() => 'Ready')
    .catch((error: Error) => `Fail to save: ${error.message}`);
};
