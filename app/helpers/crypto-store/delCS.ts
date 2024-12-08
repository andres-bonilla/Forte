import EncryptedStorage from 'react-native-encrypted-storage';

export const delCS = (): Promise<void> => {
  return EncryptedStorage.removeItem('Forte')
    .then(() => console.log('removed'))
    .catch((error: Error) => console.error(`Fail to remove: ${error.message}`));
};
