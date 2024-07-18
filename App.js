import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './assets/screens/SplashScreen';
import SignUpScreen from './assets/screens/SignUpScreen';
import LogInScreen from './assets/screens/LogInScreen';
import ForgotPasswordScreen from './assets/screens/ForgotPasswordScreen';
import PasswordChangedScreen from './assets/screens/PasswordChangedScreen';
import NewPasswordScreen from './assets/screens/NewPasswordScreen';
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="PasswordChangedScreen"
          component={PasswordChangedScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{ headerShown: false, headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
