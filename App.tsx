/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// 1. Importações do React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Suas páginas
import Login from "./src/pages/login";
import Cadastro from './src/pages/cadastro';

// 2. Criando o Stack Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{ backgroundColor: '#1c1c1c'}}>

      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>

          <NavigationContainer>

            <Stack.Navigator initialRouteName="Login">

              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ title: 'Criar nova conta' }}
              />

            </Stack.Navigator>

          </NavigationContainer>

          <View style={styles.version} pointerEvents="none">
            <Text style={styles.versionText}>versão 0.0.0</Text>
          </View>

        </SafeAreaProvider>
      </GestureHandlerRootView>
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  version: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  versionText: {
    color: '#58c3a5',
    fontWeight: 'bold',
  },
});