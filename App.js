import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import PasswordChangedScreen from './src/screens/PasswordChangedScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import {  SafeAreaView } from 'react-native';
import { NativeBaseProvider} from 'native-base';
const Stack = createNativeStackNavigator();
const ScrollAndNativeBaseWrapper=(props)=>{
  useEffect(()=>{
    // handle auth here
  },[])
  return    (
  <SafeAreaView style={styles.container}>
    <NativeBaseProvider>
      {props.childern}
    </NativeBaseProvider>
  </SafeAreaView>);
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={<ScrollAndNativeBaseWrapper><SplashScreen/></ScrollAndNativeBaseWrapper>}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={<ScrollAndNativeBaseWrapper><SignUpScreen /></ScrollAndNativeBaseWrapper>}
          options={{ headerShown: false, headerBackVisible: false }}
        />
        <Stack.Screen
          name="LogInScreen"
          component={<ScrollAndNativeBaseWrapper><LogInScreen /></ScrollAndNativeBaseWrapper>}
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


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
  },
})