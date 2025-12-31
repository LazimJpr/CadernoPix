/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import Login from "./src/pages/login";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Cadastro from './src/pages/cadastro';

function App() {

  return (
    <SafeAreaProvider>
      <ScrollView>


        <Cadastro />
        <View style={styles.version}>
          <Text style={styles.versionText}>versão 0.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  version: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  versionText: {
    color: '#58c3a5',
  },
});
