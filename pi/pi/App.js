import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/components/LoginScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import ForgetPw from './src/components/ForgetPw';
import SignUp from './src/components/SignUp';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPw" component={ForgetPw} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}