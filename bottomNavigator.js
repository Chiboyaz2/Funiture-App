import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Order from './pages/Order';
import Favourite from './pages/Favourite';

// Import your screens


const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Tab.Screen name="Order" component={Order} options={{ headerShown: false }}/>
          <Tab.Screen name="Favourite" component={Favourite} options={{ headerShown: false }}/>
          <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default Bottom;
