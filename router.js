import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from './pages/gettingstarted/Page1';
import Page2 from './pages/gettingstarted/Page2';
import Page3 from './pages/gettingstarted/Page3';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/SingUp';

const Stack = createStackNavigator();

function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {/* Define your app's screens and navigation */}
        <Stack.Screen name="page1" component={Page1} options={{ headerShown: false }}/>
        <Stack.Screen name="page2" component={Page2} options={{ headerShown: false }}/>
        <Stack.Screen name="page3" component={Page3} options={{ headerShown: false }}/>

        {/* Authentication */}
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;
