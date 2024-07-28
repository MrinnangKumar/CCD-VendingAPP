//
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import Login from './Screens/Login';
import AddNotes from './Screens/AddNotes';
import DetailScreen from './Screens/DetailScreen';
import CameraScreen from './Screens/CameraScreen';

export type RootNavigationProps = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  AddNotes: {id: string};
  DetailScreen: {
    empid: string;
    machineNo: string;
    customerName: string;
    capturedImage?: string;
  };
  CameraScreen: {empid: string; machineNo: string; customerName: string};
};

const Stack = createStackNavigator<RootNavigationProps>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Signup" component={Signup} options={{title: ''}} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AddNotes"
          component={AddNotes}
          options={{headerShown: true, title: 'Add New Notes'}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: true, title: 'Details Of Employee'}}
        />
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default AppNavigator;
