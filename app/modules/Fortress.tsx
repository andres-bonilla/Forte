import React from 'react';
import {Text, TextStyle, Button, Alert} from 'react-native';
import {useSetAtom} from 'jotai';

import {screenAtom} from '../state/screenAtoms';

export const Fortress: React.FC = () => {
  const go = useSetAtom(screenAtom);

  const textStyle: TextStyle = {fontSize: 20};

  return (
    <>
      <Button title="Home" onPress={() => go('HOME')} />
      <Text style={textStyle}>Fort</Text>
      <Button title="Config" onPress={() => go('CONFIG')} />
    </>
  );
};
