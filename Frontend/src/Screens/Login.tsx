/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable comma-dangle */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text, StyleSheet, TouchableOpacity,ActivityIndicator   } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProp} from '@react-navigation/stack';
import { RootNavigationProps } from '../AppNavigator';
import { TextInput } from 'react-native-gesture-handler';
import Loader from './Components/Loader';
interface MyProps{
    navigation: StackNavigationProp<RootNavigationProps, 'Login'>;
}

const Login = ({navigation}:MyProps) => {
  const[email, setEmail] = useState<string>('')
  const[password, setPassword] = useState<string>('')
  const[badEmail, setBadEmail] = useState<boolean>(false)
  const[badPassword, setBadpassword] = useState<boolean>(false)
  const[loading, setLoading] = useState<boolean>(false)

  //* Now suppose email is4 empty or incorrect or password is empty or incorrect
  const validate = ()=>{
    let valid = true;
    if(email == ''){
      setBadEmail(true);
      valid = false;
    } else if(email != ''){
      setBadEmail(false)
    }
    if(password == ''){
      setBadpassword(true);
      valid = false;
    } 
    else if(password != ''){
      setBadEmail(false);
    }
    return valid;
  };

 
  const login = async () => {
    try {
      setLoading(true);
      console.log('Starting login Process.....')
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const body = { email: email, password: password };
      
      console.log('Sending fetch request....');
      
      const res = await fetch('http://192.168.1.48:8000/api/auth/login', {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body),
      });
      // const res = await fetch('http://10.0.2.2:8000/api/auth/login', {
      //   headers: headers,
      //   method: 'POST',
      //   body: JSON.stringify(body),
      // });
      
      console.log('received response from fetch...');
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setLoading(false);
      console.log('Login Data Successful',data);
      navigation.navigate('Home',{id:data._id})
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Welcome Back </Text>
    <TextInput value={email} onChangeText={txt=>setEmail(txt)} placeholder="Enter Email" style={styles.input} />
    {badEmail && <Text style={styles.errorText}> Please Enter Email</Text>}
    <TextInput value={password} onChangeText={txt=>setPassword(txt)} placeholder="Enter Password" secureTextEntry={true} style={styles.input} />
    {badPassword && <Text style={styles.errorText}> Please Enter Password</Text>}
    <TouchableOpacity style={styles.loginBtn}
      onPress={()=>{
        if(validate()){
          login();
        }
      }}
    >
      <Text style={styles.btnText}>Login </Text>
    </TouchableOpacity>

    {/* Create Account */}
    <TouchableOpacity style={[styles.loginBtn ,{backgroundColor:'white', borderColor:'black',borderWidth:1 }]} onPress={() => {
      navigation.navigate("Signup")
    }}>
      <Text style={[styles.btnText,{color:'black'}]}>Create Account </Text>
    </TouchableOpacity>
    <Loader visible={loading} />
    </View>
  )
 
}

export default Login;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  heading:{
    fontSize:30,
    color: 'black',
    marginLeft: 20,
    marginTop: 100,
    fontWeight: '500',
  },
  input:{ 
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor:'#9e9e9e',
    marginTop: 20,
    alignSelf: 'center',
    paddingLeft:20,
    borderRadius:10,
  },
  loginBtn:{
    width:'90%',
    height:50,
    backgroundColor:'black',
    borderRadius:10,
    marginTop:50,
    alignSelf:'center',
    justifyContent:'center',
    alignItems: 'center',
  },
  btnText:{
    color:'white',
    fontSize: 16,
  },
  errorText:{
    color: 'red',
    marginLeft: 20,
    marginTop: 5,
  },
});
