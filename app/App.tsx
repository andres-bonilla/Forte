/**
 * @format
 */

import React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';

export const App: React.FC = () => {
  const containerStyle: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  const textStyle: TextStyle = {fontSize: 20};
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Hola, mundo!</Text>
    </View>
  );
};
