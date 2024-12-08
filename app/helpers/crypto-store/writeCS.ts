import EncryptedStorage from 'react-native-encrypted-storage';

interface Data {
  name: String;
}

export const writeCS = (): Promise<string> => {
  const forte: Data = {name: 'Andres'};
  return EncryptedStorage.setItem('Forte', JSON.stringify(forte))
    .then(() => 'ready')
    .catch((error: Error) => `Fail to save: ${error.message}`);
};
