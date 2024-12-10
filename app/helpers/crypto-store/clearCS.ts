import EncryptedStorage from 'react-native-encrypted-storage';
const CryptoStore = EncryptedStorage;

export const clearCS = (): Promise<void> => {
  return CryptoStore.clear()
    .then(() => console.log('Clear'))
    .catch((error: Error) => console.error(`Fail to clear: ${error.message}`));
};
