/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider  } from 'react-native-safe-area-context';
import Login from "./src/pages/login";
import { StyleSheet, Text, View } from 'react-native';

function App() {

  return (
    <SafeAreaProvider>
      <Login />
      <View style={styles.version}>
        <Text style={styles.versionText}>versão 0.0.0</Text>
      </View>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  version: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  versionText: {
    color: '#58c3a5',
  },
});
