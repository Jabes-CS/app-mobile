import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// // Importar as telas que você deseja exibir
import PageHome from './PageHome';
import PageChat from './PageChat';
import PageGraphics from './PageGraphics';
import PageProfile from './PageProfile';
import PageSettings from './PageSettings';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'Chat') iconName = focused ? 'chatbubbles-outline' : 'chatbubbles-outline';
          else if (route.name === 'Graphics') iconName = focused ? 'stats-chart-outline' : 'stats-chart-outline';
          else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00ccff',
        tabBarInactiveTintColor: 'gray',
        
      })}
      
    >
      <Tab.Screen name="Home" component={PageHome} />
      <Tab.Screen name="Profile" component={PageProfile} />
      <Tab.Screen name="Chat" component={PageChat} />
      <Tab.Screen name="Graphics" component={PageGraphics} />
      <Tab.Screen name="Settings" component={PageSettings} />
    </Tab.Navigator>
  );
}
