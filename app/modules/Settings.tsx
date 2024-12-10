import React, {useEffect} from 'react';
import {Button, Text, TextStyle} from 'react-native';
import {useSetAtom} from 'jotai';

import {screenAtom} from '../state/screenAtoms';

export const Config: React.FC = () => {
  const go = useSetAtom(screenAtom);

  const textStyle: TextStyle = {fontSize: 20};

  return (
    <>
      <Button title="Home" onPress={() => go('HOME')} />
      <Button title="Fort" onPress={() => go('FORT')} />
      <Text style={textStyle}>Config</Text>
    </>
  );
};
