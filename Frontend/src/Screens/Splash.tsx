/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { StackNavigationProp} from '@react-navigation/stack';
import { RootNavigationProps } from '../AppNavigator';

interface MyProps{
    navigation: StackNavigationProp<RootNavigationProps, 'Splash'>;
}
const Splash = ({navigation}:MyProps) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Login');
    },2000); //* We'll wait here for 2 sec & then will navigate to Login Screen
  },[])
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash;
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center"
  },
  logo:{
    color: 'white',
    fontSize: 30,
  }
})