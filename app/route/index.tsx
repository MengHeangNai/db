import React from 'react';
import HomeContainer from '../screen/Home/HomeContainer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeModules } from 'react-native';
import Todo from '../screen/Todo/Todo';
import MyTabs from './App_Tab';


const Stack = createStackNavigator();


function RootStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="APP_TAb" component={MyTabs} />
      <Stack.Screen name="TODO" component={Todo} />  
      <Stack.Screen name="HOME" component={HomeContainer} />
    </Stack.Navigator>
  );
}

export default function Index() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
