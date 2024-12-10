/**
 * @format
 */

import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useAtomValue} from 'jotai';

import {screenAtom} from './state/screenAtoms';

import {Home} from './modules/Home';
import {Config} from './modules/Settings';
import {Fortress} from './modules/Fortress';

import {useSyncStateToCS} from './hooks/useSyncStateToCS';

export const App: React.FC = () => {
  const activeScreen = useAtomValue(screenAtom);

  useSyncStateToCS();

  const containerStyle: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={containerStyle}>
      {activeScreen === 'HOME' && <Home />}
      {activeScreen === 'FORT' && <Fortress />}
      {activeScreen === 'CONFIG' && <Config />}
    </View>
  );
};
