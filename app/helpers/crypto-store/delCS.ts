import EncryptedStorage from 'react-native-encrypted-storage';
const CryptoStore = EncryptedStorage;

export const delCS = (): Promise<void> => {
  return CryptoStore.removeItem('Forte')
    .then(() => console.log('removed'))
    .catch((error: Error) => console.error(`Fail to remove: ${error.message}`));
};
