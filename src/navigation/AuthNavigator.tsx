import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SplashScreen from '../screens/Auth/SplashScreen';
import SignupScreen from '../screens/Auth/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    
  return (
    <Stack.Navigator 
    initialRouteName="Splash"
    screenOptions={{headerShown: false}}>
         <Stack.Screen
    name="Splash"
    component={SplashScreen}
  />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        
    </Stack.Navigator>
  );
};

export default AuthNavigator;