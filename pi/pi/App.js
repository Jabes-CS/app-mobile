import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/components/LoginScreen';
import MainPage from './src/components/MainPage';
import ForgetPw from './src/components/ForgetPw';
import SignUp from './src/components/SignUp';

const Stack = createStackNavigator();

function ContaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conta</Text>
      <Text>Informações da conta vão aqui.</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPw" component={ForgetPw} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}