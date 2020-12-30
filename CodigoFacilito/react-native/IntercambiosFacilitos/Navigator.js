import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

import HomeScreen from './screens/HomeScreen';

const AuthNavigator = createStackNavigator();

function Navegator() {
  return (
    <NavigationContainer>
      <AuthNavigator.Navigator>
        {false ? (
          <>
            <AuthNavigator.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <AuthNavigator.Screen name="SignUp" component={SignUpScreen} />
            <AuthNavigator.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </AuthNavigator.Navigator>
    </NavigationContainer>
  );
}
const AppNavigator = createStackNavigator();

export default Navegator;
