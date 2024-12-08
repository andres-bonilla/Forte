/**
 * @format
 */

import React from 'react';
import {View, Text, ViewStyle, TextStyle, Button, Alert} from 'react-native';
import {delCS} from './helpers/crypto-store/delCS';
import {writeCS} from './helpers/crypto-store/writeCS';
import {readCS} from './helpers/crypto-store/readCS';
import {clearCS} from './helpers/crypto-store/clearCS';

interface Data {
  name: String;
}

export const App: React.FC = () => {
  const containerStyle: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  const textStyle: TextStyle = {fontSize: 20};

  const handleSave = () => {
    writeCS()
      .then(() => {
        Alert.alert('Success', 'Data deleted successfully!');
      })
      .catch(error => {
        Alert.alert('Error', `Failed to delete data: ${error.message}`);
      });
  };

  const handleLoad = () => {
    readCS()
      .then(result => {
        const data: Data | null = result;
        Alert.alert('Success', JSON.stringify(data));
      })
      .catch(error => {
        Alert.alert('Error', `Failed to delete data: ${error.message}`);
      });
  };

  const handleDelete = () => {
    delCS()
      .then(() => {
        Alert.alert('Success', 'Data deleted successfully!');
      })
      .catch(error => {
        Alert.alert('Error', `Failed to delete data: ${error.message}`);
      });
  };

  const handleClear = () => {
    clearCS()
      .then(() => {
        Alert.alert('Success', 'Data cleared successfully!');
      })
      .catch(error => {
        Alert.alert('Error', `Failed to clear data: ${error.message}`);
      });
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Hola, mundo!</Text>
      <Button title="Save" onPress={handleSave} />
      <Button title="Load" onPress={handleLoad} />
      <Button title="Delete" onPress={handleDelete} />
      <Button title="Clear" onPress={handleClear} />
    </View>
  );
};
