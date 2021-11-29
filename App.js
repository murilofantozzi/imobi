import React from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import HomeAdm from './src/pages/HomeAdm';
import Cad_user from './src/pages/Cad_user';
import Cad_imob from './src/pages/Cad_imob';
import Relatorio from './src/pages/Relatorio';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} /*Tirar o header*/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeAdm" component={HomeAdm} />
        <Stack.Screen name="Cad_user" component={Cad_user} />
        <Stack.Screen name="Cad_imob" component={Cad_imob} />
        <Stack.Screen name="Relatorio" component={Relatorio} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
