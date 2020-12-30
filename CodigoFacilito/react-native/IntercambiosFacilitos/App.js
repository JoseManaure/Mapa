/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Navegator from './Navigator';

import {Provider as PaperProvider} from 'react-native-paper';

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <Navegator />
    </PaperProvider>
  );
};

export default App;
