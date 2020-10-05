import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/signupScreen';
import LoginScreen from '../screens/loginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
 

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen} 
      />
    </Stack.Navigator>
  );
};

export default AuthStack;