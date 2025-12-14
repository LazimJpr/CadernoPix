/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider  } from 'react-native-safe-area-context';
import Login from "./src/pages/login";

function App() {

  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  );
}

export default App;
