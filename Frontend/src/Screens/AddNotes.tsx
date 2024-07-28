/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// /* eslint-disable space-infix-ops */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable eqeqeq */
// /* eslint-disable semi */
// /* eslint-disable prettier/prettier */
// // /* eslint-disable prettier/prettier */
// // /* eslint-disable semi */

import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Loader from './Components/Loader';

const AddNotes = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [empid, setEmpid] = useState<string>('');
  const [Machine_No, setMachineNo] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  // const [remarks, setRemarks] = useState<string>('');

  const [badid, setBadid] = useState<boolean>(false);
  const [badMachineNo, setBadMachineNo] = useState<boolean>(false);
  const [badCustomerName, setBadCustomerName] = useState<boolean>(false);
  // const [badRemarks, setBadRemarks] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    let valid = true;
    if (empid === '') {
      setBadid(true);
      valid = false;
    } else {
      setBadid(false);
    }
    if (Machine_No === '') {
      setBadMachineNo(true);
      valid = false;
    } else {
      setBadMachineNo(false);
    }
    if (customerName === '') {
      setBadCustomerName(true);
      valid = false;
    } else {
      setBadCustomerName(false);
    }
    // if (remarks === '') {
    //   setBadRemarks(true);
    //   valid = false;
    // } else {
    //   setBadRemarks(false);
    // }
    return valid;
  };


  //! Add Details API => This is basically adding details to the database whatever we enter in the frontend
  const addEmpDetails = async () => {
    try {
      setLoading(true);
      console.log('Data Is Being Entered.....');

      const body = {
        empid: empid,
        Machine_No: Machine_No,
        Customer_Name: customerName,
        // Remark: remarks,
        postedBy:( route.params as any).id,
      };

      console.log('Request body:', body);

      const res = await fetch('http://192.168.1.33:8000/api/empdet/addempdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      console.log('Received response from fetch...');

      if (!res.ok) {
        console.error(`HTTP error! status: ${res.status}`);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('Data saved successfully:', data);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={empid}
        onChangeText={txt => setEmpid(txt)}
        placeholder="Enter employee id."
        style={styles.input}></TextInput>
      {badid && <Text style={styles.errorMsg}>Please Enter id</Text>}

      <TextInput
        value={Machine_No}
        onChangeText={txt => setMachineNo(txt)}
        placeholder="Enter Machine No."
        style={styles.input}></TextInput>
      {badMachineNo && <Text style={styles.errorMsg}>Please Enter Machine No</Text>}

      <TextInput
        value={customerName}
        onChangeText={txt => setCustomerName(txt)}
        placeholder="Enter Customer Name"
        style={styles.input}></TextInput>
      {badCustomerName && (
        <Text style={styles.errorMsg}>Please Enter Customer Name</Text>
      )}

      {/* <TextInput
        value={remarks}
        onChangeText={txt => setRemarks(txt)}
        placeholder="Enter Remarks"
        style={styles.input}></TextInput>
      {badRemarks && (
        <Text style={styles.errorMsg}>Please Enter Remarks</Text>
      )} */}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (validate()) {
            addEmpDetails();
          }
        }}>
        <Text style={styles.btnText}>Add Details</Text>
      </TouchableOpacity>
      <Loader visible={loading}></Loader>
    </View>
  );
};

export default AddNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    width: '90%',
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 20,
  },
  btn: {
    width: '90%',
    height: 45,
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  errorMsg: {
    color: 'red',
    marginLeft: 20,
  },
});
