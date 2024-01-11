/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './screens/Home';
import Toast from "react-native-toast-message";
import { View } from 'react-native';

function App() {
  return (
    <View>
      <Home />
      <Toast visibilityTime={1000} />
    </View>
  );
}

export default App;
