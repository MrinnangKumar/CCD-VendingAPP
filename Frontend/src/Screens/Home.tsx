/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// // eslint-disable-next-line prettier/prettier
// /* eslint-disable eslint-comments/no-unused-disable */
// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-shadow */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/self-closing-comp */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable prettier/prettier */
// // /* eslint-disable prettier/prettier */
// // // /* eslint-disable eqeqeq */
// // // /* eslint-disable react-hooks/rules-of-hooks */

// // // /* eslint-disable quotes */
// // // /* eslint-disable react/self-closing-comp */
// // // /* eslint-disable space-infix-ops */
// // // /* eslint-disable @typescript-eslint/no-unused-vars */
// // // /* eslint-disable react-hooks/exhaustive-deps */
// // // /* eslint-disable no-trailing-spaces */
// // // /* eslint-disable prettier/prettier */
// // // /* eslint-disable semi */

// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   TextInput,
//   Button,
// } from 'react-native';
// import React, {useCallback, useEffect, useState} from 'react';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootNavigationProps} from '../AppNavigator';
// import {useIsFocused, useRoute} from '@react-navigation/native';
// import {FlatList} from 'react-native-gesture-handler';
// import Loader from './Components/Loader';
// import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

// interface MyProps {
//   navigation: StackNavigationProp<RootNavigationProps, 'Home'>;
// }
// type Notes = {
//   // title: string;
//   // description: string;
//   _id: string;
//   id: string;
//   Customer_Name: string;
//   Machine_No: string;
//   Remark: string;
// };

// const Home = ({navigation}: MyProps) => {
//   const [notes, setNotes] = useState<Notes[]>([]);
//   const [data, setData] = useState<Notes[]>([]);
//   const route = useRoute();
//   const isFocused = useIsFocused();
//   const [loading, setLoading] = useState<boolean>(false);

//   //! GET NOTES
//   // const getNotes = async()=>{
//   //   try {

//   //     console.log('Starting login Process.....')
//   //     const headers = new Headers();
//   //     console.log(route.params.id);

//   //     headers.append('Content-Type', 'application/json');

//   //     console.log('Sending fetch request....');

//   //     const res = await fetch('http://10.0.2.2:8000/api/notes/getNotes', {
//   //       headers: headers,
//   //       method: 'GET',

//   //     });

//   //     console.log('received response from fetch...');

//   //     // if (!res.ok) {
//   //     //   throw new Error(`HTTP error! status: ${res.status}`);
//   //     // }

//   //     const data = await res.json();
//   //     setNotes(data);
//   //     console.log('Login Data Successful',data);

//   //   } catch (error) {
//   //     console.error('There was a problem with the fetch operation:', error);
//   //   }
//   // };
  // useEffect(() => {
  //   getempdetails();
  // }, [isFocused]);
  
//   //! DELETE NOTE API STARTS
//   // const deleteNote=async(id:string)=>{
//   //   try {
//   //     setLoading(true);
//   //     console.log('Starting Deleting Process.....')
//   //     const headers = new Headers();
//   //     headers.append('Content-Type', 'application/json');

//   //     const res = await fetch('http://10.0.2.2:8000/api/notes/deleteNote/'+id, {
//   //       headers: headers,
//   //       method: 'DELETE',
//   //     });

//   //     const data = await res.json();
//   //     setLoading(false);
//   //     getNotes();

//   //   } catch (error) {
//   //     console.error('There was a problem with the fetch operation:', error);
//   //   }
//   // };
//   //! DELETE NOTE API ENDS
//   // return (
//   //   <View style={styles.container}>
//   //    <StatusBar backgroundColor={'white'} barStyle={'dark content'}></StatusBar>
//   //     <View style={styles.header}>
//   //       <Text style={styles.title}>Fullstack Notes Application</Text>
//   //     </View>
//   // )


//   //! ----------------------------PRPLX CODE ----------------------------------------------
  
  
    
//     const [id, setID] = useState('');
//     const [Machine_No, setMachineNo] = useState('');
//     const [Customer_Name, setCustomer_Name] = useState('');
//     const [Remark, setRemark] = useState('');
  
//     const addItem = () => {
//       const newItem = {
//         id,
//         Machine_No,
//         Customer_Name,
//         Remark,
//       };
//       setData([...data, newItem]);
//       setID('');
//       setMachineNo('');
//       setCustomer_Name('');
//       setRemark('');
//     };
    

//     //! GET EMPLOYEE DETAILS API
//   const getempdetails = async () => {
//     try {
//       console.log('Starting login Process.....');
//       const headers = new Headers();
//       // console.log(route.params as any).id;
//       const userId = (route.params as any).id;      

//       headers.append('Content-Type', 'application/json');
//       console.log('Sending fetch request....');

//       const res = await fetch(
//         'http://10.0.2.2:8000/api/empdet/getempdetails/' + userId,
//         {
//           headers: headers,
//           method: 'GET',
//         },
//       );
//       console.log('received response from fetch...');
      
//       const data = await res.json();
//       setNotes(data);
//       console.log('Login Data Successful', data);
      
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };
//     return (
//       <View style={styles.container}>
//         <StatusBar backgroundColor={'white'} barStyle={'dark-content'}></StatusBar>
//         <View style={styles.header}>
//           <Text style={styles.title}>CDB Vending Details</Text>
//         </View>

//         {/* Header or basically fields of table */}
//         <View style={styles.tableHeader}>
//           <View style={styles.headerCell}>
//             <Text style={styles.headerText}>ID</Text>
//           </View>
//           <View style={styles.headerCell}>
//             <Text style={styles.headerText}>Machine No</Text>
//           </View>
//           <View style={styles.headerCell}>
//             <Text style={styles.headerText}>Customer Name</Text>
//           </View>
//           <View style={styles.headerCell}>
//             <Text style={styles.headerText}>Remark</Text>
//           </View>
//         </View>
//          <FlatList 
         
//           data={notes}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('DetailScreen', {
//                   id: item.id,
//                   machineNo: item.Machine_No,
//                   Customer_Name: item.Customer_Name,
//                   Remark: item.Remark,
//                 })
//               } 
//             >
//               {/* <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}> */}
//               <View style={styles.row}>
//                 <Text>ID: {item.id}</Text>
//                 <Text>Machine No: {item.Machine_No}</Text>
//                 <Text>Customer Name: {item.Customer_Name}</Text>
//                 <Text>Remark: {item.Remark}</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={() => {navigation.navigate('AddNotes',(route.params as any).id); //* , {id: route.params.id, type: 'NEW'}
//         }}>
//           <Text style={styles.btnText}>Add New Data</Text>
//         </TouchableOpacity>
//         <Loader visible={loading}></Loader>
//       </View>
//       // <View style={styles.container}>
//       //   <Text style={styles.Mainheader}>CDB Vending</Text>
  
      
//       // </View>
//     );
//   };
  
//   // return (
//   //   //! ---------------------------------Old Main Code ---------------------------------------------   



// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     //!Orignal Content
//     flex: 1,
//     flexDirection: 'column',
//     height: '100%',
//     backgroundColor: 'white',

//     //!Copied/Tested   
//     // width: '100%',
//     // height: 200,
//     // backgroundColor: 'red',
//     // // elevation: 5,
//     // justifyContent: 'center', 
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   Mainheader:{
//     width: '100%',
//     height: 60,
//     backgroundColor: 'purple',
//     elevation: 5,
//     justifyContent: 'center',
//     fontWeight: 'bold',
//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     height: 60,
//     backgroundColor: 'white',
//     elevation: 5,
//     justifyContent: 'center',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   headerCell: {
//     flex: 1,
//     padding: 5,
//   },
//   headerText: {
//     fontWeight: 'bold',
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   title: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   btn: {
//     width: 200,
//     height: 50,
//     borderRadius: 30,
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   notesItem: {
//     flexDirection: 'row',
//     padding: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     width: '90%',
//     height: 80,
//     borderWidth: 1,
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginTop: 10,
//     justifyContent: 'space-between',
//   },
//   noDataView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   noteText: {
//     color: '#000',
//     fontWeight: '700',
//     margin: 2,
//   },
//   // ! ---------------------------------------------PRPLX CODE--------------------------------------------------
//   itemContainer: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 8,
//     marginVertical: 8,
//   },
//   itemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   itemText: {
//     fontSize: 16,
//     color: '#333333',
//   },
//   flatList: {
//     flex: 1,
//   },
//   flatListContainer: {
//     paddingHorizontal: 16,
//   },
// });




// const Home = ({ navigation }: MyProps) => {
//   const [notes, setNotes] = useState<Notes[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const route = useRoute();
//   const isFocused = useIsFocused();

//   const getempdetails = useCallback(async () => {
//     try {
//       setLoading(true);
//       const userId = (route.params as any).id;
//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
      
//       const url = `http://10.0.2.2:8000/api/empdet/getempdetails/${userId}`;
//       console.log(`Fetching data from ${url}`);

//       const res = await fetch(url, {
//         headers: headers,
//         method: 'GET',
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       setNotes(data);
//       console.log('Data fetched successfully', data);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, [route.params]);

//   useEffect(() => {
//     if (isFocused) {
//       getempdetails();
//     }
//   }, [isFocused, getempdetails]);

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
//       <View style={styles.header}>
//         <Text style={styles.title}>CDB Vending Details</Text>
//       </View>

//       <View style={styles.tableHeader}>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>ID</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Machine No</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Customer Name</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Remark</Text>
//         </View>
//       </View>

//       <FlatList
//         data={notes}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate('DetailScreen', {
//                 id: item.id,
//                 machineNo: item.Machine_No,
//                 Customer_Name: item.Customer_Name,
//                 Remark: item.Remark,
//               })
//             }
//           >
//             <View style={styles.row}>
//               <Text>ID: {item.id}</Text>
//               <Text>Machine No: {item.Machine_No}</Text>
//               <Text>Customer Name: {item.Customer_Name}</Text>
//               <Text>Remark: {item.Remark}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />

//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('AddNotes', { id: (route.params as any).id })}
//       >
//         <Text style={styles.btnText}>Add New Data</Text>
//       </TouchableOpacity>

//       <Loader visible={loading} />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     height: 60,
//     backgroundColor: 'white',
//     elevation: 5,
//     justifyContent: 'center',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   headerCell: {
//     flex: 1,
//     padding: 5,
//   },
//   headerText: {
//     fontWeight: 'bold',
//   },
//   title: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   btn: {
//     width: 200,
//     height: 50,
//     borderRadius: 30,
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// import React, { useEffect, useState, useCallback } from 'react';
// import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useIsFocused, useRoute } from '@react-navigation/native';
// import Loader from './Components/Loader';
// import { RootNavigationProps } from '../AppNavigator';

// interface MyProps {
//   navigation: StackNavigationProp<RootNavigationProps, 'Home'>;
// }

// type Notes = {
//   _id: string;
  
//   empid: string;
//   Customer_Name: string;
//   Machine_No: string;
//   Remark: string;
// };

// const Home = ({ navigation }: MyProps) => {
//   const [notes, setNotes] = useState<Notes[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const route = useRoute();
//   const isFocused = useIsFocused();

//   const getempdetails = useCallback(async () => {
//     try {
//       setLoading(true);
//       const empid = (route.params as any).empid;
//       console.log(`User ID from route: ${empid}`); // Add logging for debugging

//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
      
//       const url = `http://10.0.2.2:8000/api/empdet/getempdetails/${empid}`;
//       console.log(`Fetching data from ${url}`);

//       const res = await fetch(url, {
//         headers: headers,
//         method: 'GET',
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       setNotes(data);
//       console.log('Data fetched successfully', data);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, [route.params]);

//   useEffect(() => {
//     if (isFocused) {
//       getempdetails();
//     }
//   }, [isFocused, getempdetails]);

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
//       <View style={styles.header}>
//         <Text style={styles.title}>CDB Vending Details</Text>
//       </View>

//       <View style={styles.tableHeader}>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>ID</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Machine No</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Customer Name</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Remark</Text>
//         </View>
//       </View>

//       <FlatList
//         data={notes}
//         keyExtractor={(item) => item.empid}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate('DetailScreen', {
//                 empid: item.empid,
//                 machineNo: item.Machine_No,
//                 Customer_Name: item.Customer_Name,
//                 Remark: item.Remark,
//               })
//             }
//           >
//             <View style={styles.row}>
//               <Text>ID: {item.empid}</Text>
//               <Text>Machine No: {item.Machine_No}</Text>
//               <Text>Customer Name: {item.Customer_Name}</Text>
//               <Text>Remark: {item.Remark}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />

//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('AddNotes', { empid: (route.params as any).empid })}
//       >
//         <Text style={styles.btnText}>Add New Data</Text>
//       </TouchableOpacity>

//       <Loader visible={loading} />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     height: 60,
//     backgroundColor: 'white',
//     elevation: 5,
//     justifyContent: 'center',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#e0e0e0',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   headerCell: {
//     flex: 1,
//     padding: 5,
//   },
//   headerText: {
//     fontWeight: 'bold',
//   },
//   title: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   btn: {
//     width: 200,
//     height: 50,
//     borderRadius: 30,
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });


// import React, { useEffect, useState, useCallback } from 'react';
// import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useIsFocused, useRoute } from '@react-navigation/native';
// import Loader from './Components/Loader';
// import { RootNavigationProps } from '../AppNavigator';

// interface MyProps {
//   navigation: StackNavigationProp<RootNavigationProps, 'Home'>;
// }

// type Notes = {
//   _id: string;
//   empid: string;
//   Customer_Name: string;
//   Machine_No: string;
//   Remark: string;
// };

// const Home = ({ navigation }: MyProps) => {
//   const [notes, setNotes] = useState<Notes[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const route = useRoute();
//   const isFocused = useIsFocused();

//   const getEmpDetails = useCallback(async () => {
//     try {
//       setLoading(true);
     
//       // console.log('User ID from route:',(route.params as any).id);

//       // const headers = new Headers();
//       // headers.append('Content-Type', 'application/json');

//       // const url = 'http://10.0.2.2:8000/api/empdet/getempdetails/'+(route.params as any).id;
//       // console.log(`Fetching data from ${url}`);

//       // const res = await fetch('http://10.0.2.2:8000/api/empdet/getempdetails/'+(route.params as any).id, {
//       //   headers: headers,
//       //   method: 'GET',
//       // });
//       const userId = (route.params as any).id; // Fetch the user id from route params
//       console.log(`User ID from route: ${userId}`);

//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');

//       const url = `http://10.0.2.2:8000/api/empdet/getempdetails/${userId}`;
//       console.log(`Fetching data from ${url}`);

//       const res = await fetch(url, {
//         headers: headers,
//         method: 'GET',
//       });
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json();
//       setNotes(data);
//       console.log('Data fetched successfully', data);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, [route.params]);

//   useEffect(() => {
//     if (isFocused) {
//       getEmpDetails();
//     }
//   }, [isFocused, getEmpDetails]);

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
//       <View style={styles.header}>
//         <Text style={styles.title}>CDB Vending Details</Text>
//       </View>

//       {/* This is basically header component or headings of the table */}
//       <View style={styles.tableHeader}>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>ID</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Machine No</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Customer Name</Text>
//         </View>
//         <View style={styles.headerCell}>
//           <Text style={styles.headerText}>Remark</Text>
//         </View>
//       </View>

//       {/*! This is GPT Mofified COde AKA Orignal code with error  */}
//       {/* <FlatList
//         data={notes}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate('DetailScreen', { empid: item.empid,
//                 machineNo: item.Machine_No,
//                 Customer_Name: item.Customer_Name,
//                 Remark: item.Remark, })
//             }>
//             <View style={styles.row}>
//               <View style={styles.cell}>
//                 <Text style={styles.cellText}>{item.empid}</Text>
//               </View>
//               <View style={styles.cell}>
//                 <Text style={styles.cellText}>{item.Machine_No}</Text>
//               </View>
//               <View style={styles.cell}>
//                 <Text style={styles.cellText}>{item.Customer_Name}</Text>
//               </View>
//               <View style={styles.cell}>
//                 <Text style={styles.cellText}>{item.Remark}</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         )}
//       /> */}

//       {/* This is YouTube Orignal code   */}
//       {notes.length > 0 ? (
//         <FlatList
//           data={notes}
          
//           renderItem={({ item }: {item:Notes}) => (
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate('DetailScreen', { empid: item.empid,
//                   machineNo: item.Machine_No,
//                   Customer_Name: item.Customer_Name,
//                   Remark: item.Remark, })
//               }>
//               <View style={styles.row}>
//                 <View style={styles.cell}>
//                   <Text style={styles.cellText}>{item.empid}</Text>
//                 </View>
//                 <View style={styles.cell}>
//                   <Text style={styles.cellText}>{item.Machine_No}</Text>
//                 </View>
//                 <View style={styles.cell}>
//                   <Text style={styles.cellText}>{item.Customer_Name}</Text>
//                 </View>
//                 <View style={styles.cell}>
//                   <Text style={styles.cellText}>{item.Remark}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       ) : (
//           <View  style={styles.noDataView}>
//             <Text>No Employee Data Found</Text>
//           </View>
//       )}
      
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('AddNotes', { id: (route.params as any).id })}
//       >
//         <Text style={styles.btnText}>Add New Data</Text>
//       </TouchableOpacity>
//       <Loader visible={loading} />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   header: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#f8f8f8',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerCell: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   headerText: {
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   cell: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   cellText: {
//     fontSize: 16,
//   },
//     btn: {
//     width: 200,
//     height: 50,
//     borderRadius: 30,
//     position: 'absolute',
//     right: 20,
//     bottom: 20,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   noDataView:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontWeight: '600',
//   }
// });


import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useIsFocused, useRoute } from '@react-navigation/native';
import Loader from './Components/Loader';
import { RootNavigationProps } from '../AppNavigator';

interface MyProps {
  navigation: StackNavigationProp<RootNavigationProps, 'Home'>;
}

type Notes = {
  _id: string;
  empid: string;
  Customer_Name: string;
  Machine_No: string;
  Remark: string;
};

const Home = ({ navigation }: MyProps) => {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute();
  const isFocused = useIsFocused();


  //! Add Data Page API To add data
  const getEmpDetails = useCallback(async () => {
    try {
      setLoading(true);
      const userId = (route.params as any).id;
      console.log('User ID from route:', userId);

      const headers = new Headers();
      headers.append('Content-Type','application/json');

      const url = 'http://192.168.1.48:8000/api/empdet/getempdetails/'+ (route.params as any).id;
      // const url = 'http://10.0.2.2:8000/api/empdet/getempdetails/'+ (route.params as any).id;
      console.log(`Fetching data from ${url}`);

      const res = await fetch(url, {
        headers: headers,
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setNotes(data);
      console.log('Data fetched successfully', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setLoading(false);
    }
  }, [route.params]);

  useEffect(() => {
    if (isFocused) {
      getEmpDetails();
    }
  }, [isFocused, getEmpDetails]);



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.title}>CDB Vending Details</Text>
      </View>


      {/* This is frontend view to show the UI  */}
      <View style={styles.tableHeader}>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>ID</Text>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Machine No</Text>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Customer Name</Text>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Remark</Text>
        </View>
      </View>

      {notes.length > 0 ? (
        <FlatList
          data={notes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailScreen', {
                  empid: item.empid,
                  machineNo: item.Machine_No,
                  customerName: item.Customer_Name,
                  // remarks: item.Remark,
                })
              }>
              <View style={styles.row}>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{item.empid}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{item.Machine_No}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{item.Customer_Name}</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.cellText}>{item.Remark}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.noDataView}>
          <Text>No Employee Data Found</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('AddNotes', { id: (route.params as any).id })}
      >
        <Text style={styles.btnText}>Add New Data</Text>
      </TouchableOpacity>
      <Loader visible={loading} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F2',
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF9C66'
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerCell: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#EEEEEE'
  },
  cell: {
    flex: 1,
    alignItems: 'center',
  },
  cellText: {
    fontSize: 16,
    color: 'black'
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
  },
});
