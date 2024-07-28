/* eslint-disable react/self-closing-comp */
/* eslint-disable eqeqeq */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigationProps} from '../AppNavigator';
import Loader from './Components/Loader';

interface MyProps {
  navigation: StackNavigationProp<RootNavigationProps, 'Signup'>;
}
const Signup = ({navigation}: MyProps) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [badEmail, setBadEmail] = useState<boolean>(false);
  const [badName, setBadName] = useState<boolean>(false);
  const [badPassword, setBadpassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //* Now suppose email is4 empty or incorrect or password is empty or incorrect
  const validate = () => {
    let valid = true;

    if (name == '') {
      setBadName(true);
      valid = false;
    } else if (name != '') {
      setBadName(false);
    }
    if (email == '') {
      setBadEmail(true);
      valid = false;
    } else if (email != '') {
      setBadEmail(false);
    }
    if (password == '') {
      setBadpassword(true);
      valid = false;
    } else if (password != '') {
      setBadEmail(false);
    }
    return valid;
  };

  const signup = async () => {
    // try {
    //   setLoading(true)
    //   const headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   const body = { email: email, password: password, name:name };
      
    //   const res = await fetch('http://10.0.2.2:8000/api/auth/register', 
    //     {
    //       headers: headers,
    //       method: 'POST',
    //       body: JSON.stringify(body),
    //     }
    //   );
      
    //   if (!res.ok) {
    //     throw new Error(`HTTP error! status: ${res.status}`);
    //   }
      
    //   const data = await res.json();
    //   setLoading(false);
    //   console.log(data);
    //   navigation.navigate('Home',{id:data._id})
      
    // } catch (error) {
    //   console.error('There was a problem with the fetch operation:', error);
    // }
    try {  
      setLoading(true);
      console.log('Starting login process...');
  
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
  
      const body = { email: email, password: password };
      console.log('Request payload:', body);
  
      const res = await fetch('http://192.168.1.48:8000/api/auth/register', {
        headers: headers,
        method: 'POST',
        body: JSON .stringify(body),
      });
  
      console.log('Received response from fetch...');
  
      if (!res.ok) {
        // Log the response for better debugging
        const responseText = await res.text();
        console.error('Response status:', res.status);
        console.error('Response text:', responseText);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json();
      setLoading(false);
      console.log('Login successful', data);
  
      navigation.navigate('Home', { id: data._id });
    } catch (error) {
      setLoading(false);
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Account</Text>
      <TextInput
        value={name}
        onChangeText={txt => setName(txt)}
        placeholder="Enter Name"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={txt => setEmail(txt)}
        placeholder="Enter Email"
        style={styles.input}
      />
      {badEmail && <Text style={styles.errorText}> Please Enter Email</Text>}
      <TextInput
        value={password}
        onChangeText={txt => setPassword(txt)}
        placeholder="Enter Password"
        secureTextEntry={true}
        style={styles.input}
      />
      {badPassword && (
        <Text style={styles.errorText}> Please Enter Password</Text>
      )}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (validate()) {
            signup();
          }
        }}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <TouchableOpacity
        style={[
          styles.loginBtn,
          {backgroundColor: 'white', borderColor: 'black', borderWidth: 1},
        ]}>
        <Text style={[styles.btnText, {color: 'black'}]}>Login </Text>
      </TouchableOpacity>
      <Loader visible={loading}></Loader>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    color: 'black',
    marginLeft: 20,
    marginTop: 100,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#9e9e9e',
    marginTop: 20,
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 10,
  },
  loginBtn: {
    width: '90%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
    marginTop: 5,
  },
});
