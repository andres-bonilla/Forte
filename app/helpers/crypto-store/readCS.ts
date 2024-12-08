import EncryptedStorage from 'react-native-encrypted-storage';

interface Data {
  name: String;
}

export const readCS = (): Promise<Data | null> => {
  return EncryptedStorage.getItem('Forte')
    .then(result => {
      if (result) return JSON.parse(result) as Data;
      return null;
    })
    .catch((error: Error) => {
      console.error(`Fail to load: ${error.message}`);
      return null;
    });
};
