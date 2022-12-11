
import reactDom from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicialScreen from './screens/home';
import CadastroScreen from './screens/cadastro';




const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={InicialScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;