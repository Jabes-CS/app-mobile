import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AddEntry from './AddEntry';
import HomeView from './HomeView';

const Nav = createStackNavigator();

export default function PageHome() {
  return (
      <Nav.Navigator initialRouteName="HomeView" screenOptions={{ headerShown: false }}>
        <Nav.Screen name="AddEntry" component={AddEntry} />
        <Nav.Screen name="HomeView" component={HomeView} />
      </Nav.Navigator>
  );
}