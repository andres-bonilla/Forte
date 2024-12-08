import EncryptedStorage from 'react-native-encrypted-storage';

export const clearCS = (): Promise<void> => {
  return EncryptedStorage.clear()
    .then(() => console.log('Clear'))
    .catch((error: Error) => console.error(`Fail to clear: ${error.message}`));
};
