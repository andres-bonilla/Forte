import {Fortress} from '../types/types';

import React, {useEffect} from 'react';
import {Alert, Button, Text, TextStyle} from 'react-native';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';

import {screenAtom} from '../state/screenAtoms';
import {
  addFortressIDAtom,
  fortressRecordAtom,
} from '../state/FortressRecordAtoms';

import {newRelease} from '../helpers/version-sistem/newRelease';
import {writeCS} from '../helpers/crypto-store/writeCS';
import {clearCS} from '../helpers/crypto-store/clearCS';
import {useSyncCSToState} from '../hooks/useSyncCSToState';

export const Home: React.FC = () => {
  const go = useSetAtom(screenAtom);
  const textStyle: TextStyle = {fontSize: 20};

  useSyncCSToState();

  const fortressRecord = useAtomValue(fortressRecordAtom);
  const addFortressID = useSetAtom(addFortressIDAtom);

  const newFortress = () => {
    const example: Fortress = {
      id: 0,
      alias: 'example',
      release: newRelease(),
      assets: [],
    };

    writeCS('example', example)
      .then(() => {
        addFortressID('example');
      })
      .catch((error: Error) => {
        console.error(`Fail to load: ${error.message}`);
      });
  };

  const clearAll = () => {
    clearCS()
      .then(() => {
        /*setFortressAliasRecord([]);*/
        Alert.alert('Success', 'Data cleared successfully!');
      })
      .catch(error => {
        Alert.alert('Error', `Failed to clear data: ${error.message}`);
      });
  };

  return (
    <>
      <Text style={textStyle}>Home</Text>
      <Button title="Fort" onPress={() => go('FORT')} />
      <Button title="Config" onPress={() => go('CONFIG')} />
      {fortressRecord.map((fortressID, i) => {
        return <Text key={i}>{fortressID.alias}</Text>;
      })}
      <Button title="New" onPress={newFortress} />
      <Button title="clear" onPress={clearAll} />
    </>
  );
};
