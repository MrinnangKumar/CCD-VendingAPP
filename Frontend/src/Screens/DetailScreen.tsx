/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const DetailScreen = ({ route }) => {
//   const { empid, machineNo, customerName, remarks } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>ID: {empid}</Text>
//       <Text style={styles.label}>Machine No: {machineNo}</Text>
//       <Text style={styles.label}>Customer Name: {customerName}</Text>
//       <Text style={styles.label}>Remarks: {remarks}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   label: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default DetailScreen;
/* eslint-disable prettier/prettier */


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { RootNavigationProps } from '../AppNavigator';
// import { RouteProp } from '@react-navigation/native';
// import Loader from './Components/Loader';
// import { StackNavigationProp } from '@react-navigation/stack';

// // Define the route parameters type
// type DetailScreenRouteProp = RouteProp<RootNavigationProps, 'DetailScreen'>;

// interface DetailScreenProps {
//   route: DetailScreenRouteProp;
//   navigation: StackNavigationProp<RootNavigationProps, 'DetailScreen'>;
// }

// const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
//   const { empid, machineNo, customerName } = route.params;
//   const [badRemarks, setBadRemarks] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [remarks, setRemarks] = useState<string>('');
//   const validate = () => {
//     let valid = true;
//     if (remarks === '') {
//       setBadRemarks(true);
//       valid = false;
//     } else {
//       setBadRemarks(false);
//     }
//     return valid;
//   };


//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>ID: {empid}</Text>
//       <Text style={styles.label}>Machine No: {machineNo}</Text>
//       <Text style={styles.label}>Customer Name: {customerName}</Text>

//       <TextInput
//         value={remarks}
//         onChangeText={txt => setRemarks(txt)}
//         placeholder="Enter Remarks"
//         style={styles.input}></TextInput>
//       {badRemarks && (
//         <Text style={styles.errorMsg}>Please Enter Remarks</Text>
//       )}

//       <TouchableOpacity
//         style={styles.btn}
//         >
//         <Text style={styles.btnText}>Add Remarks</Text>
//       </TouchableOpacity>
      

//       {/* Camera Button Functionality */}
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('Camera', { id: (route.params as any).id })}
//       >
//         <Text style={styles.btnText}>Capture Image</Text>
//         {/* <FontAwesomeIcon icon="fa-regular fa-camera" /> */}
//       </TouchableOpacity>
//       <Loader visible={loading}></Loader>
//     </View>
//   );
// };

// export default DetailScreen;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#CAF4FF',
//   },
//   label: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: 'black',
//   },
//   input: {
//     width: '90%',
//     height: 70,
//     borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'center',
//     marginTop: 60,
//     borderRadius: 10,
//     paddingLeft: 20,
//     backgroundColor: '#FFF7FC',
//     paddingTop: 10, // Add some padding at the top
//     color: 'black',
//   },
//   btn: {
//     width: '90%',
//     height: 45,
//     backgroundColor: 'black',
//     borderRadius: 10,
//     marginTop: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   errorMsg: {
//     color: 'red',
//     marginLeft: 20,
//   },
// });


//! Document & Camera Functionality added starts here

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, PermissionsAndroid, Platform } from 'react-native';
// import { launchCamera, CameraOptions, Asset } from 'react-native-image-picker';
// import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
// import { RootNavigationProps } from '../AppNavigator';
// import { RouteProp } from '@react-navigation/native';
// import Loader from './Components/Loader';

// // Define the route parameters type
// type DetailScreenRouteProp = RouteProp<RootNavigationProps, 'DetailScreen'>;

// interface DetailScreenProps {
//   route: DetailScreenRouteProp;
// }

// const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
//   const { empid, machineNo, customerName } = route.params;
//   const [badRemarks, setBadRemarks] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [remarks, setRemarks] = useState<string>('');
//   const [photo, setPhoto] = useState<Asset | null>(null); // State to hold the captured image
//   const [document, setDocument] = useState<DocumentPickerResponse | null>(null); // State to hold the selected document

//   const validate = () => {
//     let valid = true;
//     if (remarks === '') {
//       setBadRemarks(true);
//       valid = false;
//     } else {
//       setBadRemarks(false);
//     }
//     return valid;
//   };

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'This app needs access to your camera to take photos.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       console.log('Permission granted:', granted === PermissionsAndroid.RESULTS.GRANTED);
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   const handleCapturePhoto = async () => {
//     console.log('Launching camera...');
//     if (Platform.OS === 'android') {
//       const hasPermission = await requestCameraPermission();
//       if (!hasPermission) {
//         console.log('Camera permission denied');
//         return;
//       }
//     }

//     const options: CameraOptions = {
//       mediaType: 'photo', // Use string 'photo'
//       saveToPhotos: true,
//     };

//     launchCamera(options, (response) => {
//       console.log('Camera response:', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//         console.log('ImagePicker Error Message: ', response.errorMessage); // Log additional error message if available
//       } else if (response.assets && response.assets.length > 0) {
//         setPhoto(response.assets[0]); // Set the captured image
//       } else {
//         console.log('Unknown response structure:', response); // Log unexpected response structure
//       }
//     }).catch(error => {
//       console.log('Error launching camera:', error);
//     });
//   };

//   const handleSelectDocument = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setDocument(res[0]);
//       console.log('Selected document:', res[0]);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User cancelled document picker');
//       } else {
//         console.log('DocumentPicker Error: ', err);
//       }
//     }
//   };

//   const handleCancelDocument = () => {
//     setDocument(null);
//     console.log('Document selection cancelled');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>ID: {empid}</Text>
//       <Text style={styles.label}>Machine No: {machineNo}</Text>
//       <Text style={styles.label}>Customer Name: {customerName}</Text>

//       <TextInput
//         value={remarks}
//         onChangeText={txt => setRemarks(txt)}
//         placeholder="Enter Remarks"
//         multiline={true}
//         style={styles.input}
//         textAlignVertical="top"
//         maxLength={50} // Restrict the input to 50 characters
//         placeholderTextColor="gray" // Optional: Change placeholder text color
//       />
//       {badRemarks && (
//         <Text style={styles.errorMsg}>Please Enter Remarks</Text>
//       )}

//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => {
//           if (validate()) {
//             // Handle the remarks submission
//             console.log("Remarks submitted:", remarks);
//           }
//         }}
//       >
//         <Text style={styles.btnText}>Add Remarks</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.btn} onPress={handleCapturePhoto}>
//         <Text style={styles.btnText}>Capture Photo</Text>
//       </TouchableOpacity>

//       {photo && (
//         <Image
//           source={{ uri: photo.uri }}
//           style={styles.capturedImage}
//         />
//       )}

//       <TouchableOpacity style={styles.btn} onPress={handleSelectDocument}>
//         <Text style={styles.btnText}>Attach Document</Text>
//       </TouchableOpacity>

//       {document ? (
//         <View style={styles.documentContainer}>
//           <Text style={styles.documentText}>Selected Document: {document.name}</Text>
//           <TouchableOpacity style={styles.cancelButton} onPress={handleCancelDocument}>
//             <Text style={styles.cancelButtonText}>Reupload Document</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <Text style={styles.noDocumentText}>No Document Attached</Text>
//       )}

//       <Loader visible={loading} />
//     </View>
//   );
// };

// export default DetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F7F9F2',
//   },
//   label: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: 'black'
//   },
//   input: {
//     width: '90%',
//     height: 100, // Increase the height for a larger text box
//     borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'center',
//     marginTop: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     paddingTop: 10, // Add some padding at the top
//     color: 'black', // Change the text color here
//   },
//   btn: {
//     width: '90%',
//     height: 45,
//     backgroundColor: 'black',
//     borderRadius: 10,
//     marginTop: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   errorMsg: {
//     color: 'red',
//     marginLeft: 20,
//   },
//   capturedImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   documentContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   documentText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   cancelButton: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: 'red',
//     borderRadius: 5,
//   },
//   cancelButtonText: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   noDocumentText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'gray',
//     textAlign: 'center',
//   },
// });

//! Document & Camera Functionality added ENDS here

//! Dox saving functionality starts here
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, PermissionsAndroid, Platform } from 'react-native';
// import { launchCamera, CameraOptions, Asset } from 'react-native-image-picker';
// import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
// import { RootNavigationProps } from '../AppNavigator';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import Loader from './Components/Loader';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import type { PropsWithChildren } from 'react';



// type DetailScreenRouteProp = RouteProp<RootNavigationProps, 'DetailScreen'>;

// interface DetailScreenProps {
//   route: DetailScreenRouteProp;
// }

// const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
//   const { empid, machineNo, customerName } = route.params;
//   const navigation = useNavigation();
//   const [badRemarks, setBadRemarks] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [remarks, setRemarks] = useState<string>('');
//   const [photo, setPhoto] = useState<Asset | null>(null);
//   const [document, setDocument] = useState<DocumentPickerResponse | null>(null);
  
//   useEffect(() => {
//     const loadSavedData = async () => {
//       try {
//         const savedPhotoUri = await AsyncStorage.getItem(`photoUri_${empid}`);
//         if (savedPhotoUri) {
//           setPhoto({ uri: savedPhotoUri } as Asset);
//         }
//         const savedDocument = await AsyncStorage.getItem(`document_${empid}`);
//         if (savedDocument) {
//           setDocument(JSON.parse(savedDocument));
//         }
//         const savedRemarks = await AsyncStorage.getItem(`remarks_${empid}`);
//         if (savedRemarks) {
//           setRemarks(savedRemarks);
//         }
//       } catch (error) {
//         console.error('Failed to load saved data:', error);
//       }
//     };
//     loadSavedData();
//   }, [empid]);

//   const saveData = async () => {
//     try {
//       if (photo) {
//         await AsyncStorage.setItem(`photoUri_${empid}`, photo.uri || '');
//       }
//       if (document) {
//         await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(document));
//       }
//       await AsyncStorage.setItem(`remarks_${empid}`, remarks);
//     } catch (error) {
//       console.error('Failed to save data:', error);
//     }
//   };

//   const validate = () => {
//     let valid = true;
//     if (remarks === '') {
//       setBadRemarks(true);
//       valid = false;
//     } else {
//       setBadRemarks(false);
//     }
//     return valid;
//   };

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'This app needs access to your camera to take photos.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   const handleCapturePhoto = async () => {
//     if (Platform.OS === 'android') {
//       const hasPermission = await requestCameraPermission();
//       if (!hasPermission) {
//         return;
//       }
//     }

//     const options: CameraOptions = {
//       mediaType: 'photo',
//       saveToPhotos: true,
//     };

//     launchCamera(options, async (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//       } else if (response.assets && response.assets.length > 0) {
//         setPhoto(response.assets[0]);
//         await AsyncStorage.setItem(`photoUri_${empid}`, response.assets[0].uri || '');
//       }
//     }).catch(error => {
//       console.log('Error launching camera:', error);
//     });
//   };

//   const handleSelectDocument = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setDocument(res[0]);
//       await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(res[0]));
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User cancelled document picker');
//       } else {
//         console.log('DocumentPicker Error: ', err);
//       }
//     }
//   };

//   const handleCancelDocument = async () => {
//     setDocument(null);
//     await AsyncStorage.removeItem(`document_${empid}`);
//   };

//   const handleSubmit = async () => {
//     if (validate()) {
//       saveData();
//       console.log("Remarks submitted:", remarks);
//     }
//   };

//   const handleDocumentClick = () => {
//     if (document) {
//       navigation.navigate('DocumentViewerScreen', { document });
//     }
//   };

//   return (
//     <View style={styles.container}>
      
//       <Text style={styles.label}>ID:
//         <Text style={styles.value}> {empid}</Text>
//       </Text>    
//       <Text style={styles.label}>Machine No:
//         <Text style={styles.value}> {machineNo}</Text>  
//       </Text>  
//       <Text style={styles.label}>Customer Name:
//         <Text style={styles.value}> {customerName}</Text>
//       </Text>

//       <TextInput
//         value={remarks}
//         onChangeText={txt => setRemarks(txt)}
//         placeholder="Enter Remarks"
//         multiline={true}
//         style={styles.input}
//         textAlignVertical="top"
//         maxLength={50}
      
//       />
//       {badRemarks && (
//         <Text style={styles.errorMsg}>Please Enter Remarks</Text>
//       )}

//       {/* <TouchableOpacity
//         style={styles.btn}
//         onPress={handleSubmit}
//       >
//         <Text style={styles.btnText}>Add Remarks</Text>
//       </TouchableOpacity> */}
//       {/* <Icons name="camera"
//         {...<TouchableOpacity onPress={handleCapturePhoto}>
//           <Text>Capture Image</Text>
//         </TouchableOpacity> }
//         />
//         <Icon name="camera" /> */}

//         <TouchableOpacity style={styles.camIcon} onPress={handleCapturePhoto}>
//           <FontAwesome name="camera" size={26} color="black" />
//         </TouchableOpacity>

//       {photo && (
//         <Image
//           source={{ uri: photo.uri }}
//           style={styles.capturedImage}
//         />
//       )}

//       <TouchableOpacity style={styles.camIcon} onPress={handleSelectDocument}>
//         <MaterialCommunityIcons name="file-document" size={35} color="black" />
//       </TouchableOpacity>

//       {document ? (
//         <View style={styles.documentContainer}>
//           <Text style={styles.documentText} onPress={handleDocumentClick}>
//             Selected Document: {document.name}
//           </Text>
//           <TouchableOpacity style={styles.cancelBtn} onPress={handleCancelDocument}>
//             <Text style={styles.cancelBtnText}>Cancel Document</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <Text style={styles.documentText}>No Document Selected</Text>
//       )}

//       <Loader visible={loading} />
//     </View>
//   );
// };

// export default DetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F7F9F2',
//   },
//   label: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#88304E',
//   },
//   value:{
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#FF2E63',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '90%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'center',
//     marginTop: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     paddingTop: 10,
//     color: 'black',
//   },
//   btn: {
//     width: '90%',
//     height: 45,
//     backgroundColor: 'black',
//     borderRadius: 10,
//     marginTop: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   errorMsg: {
//     color: 'red',
//     marginLeft: 20,
//   },
//   capturedImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   documentContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   documentText: {
//     alignSelf: 'center',
//     fontSize: 16,
//     color: 'black',
//     marginTop: 10,
//     padding: 10,
//     textDecorationLine: 'underline',
//   },
//   cancelBtn: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: 'red',
//     borderRadius: 5,
//   },
//   cancelBtnText: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   camIcon:{
//     marginTop: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     paddingTop: 10,
//   }
// });

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, PermissionsAndroid, Platform } from 'react-native';
// import { launchCamera, CameraOptions, Asset } from 'react-native-image-picker';
// import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
// import { RootNavigationProps } from '../AppNavigator';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import Loader from './Components/Loader';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



// type DetailScreenRouteProp = RouteProp<RootNavigationProps, 'DetailScreen'>;

// interface DetailScreenProps {
//   route: DetailScreenRouteProp;
// }

// const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
//   const { empid, machineNo, customerName } = route.params;
//   const navigation = useNavigation();
//   const [badRemarks, setBadRemarks] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [remarks, setRemarks] = useState<string>('');
//   const [photo, setPhoto] = useState<Asset | null>(null);
//   const [document, setDocument] = useState<DocumentPickerResponse | null>(null);

//   useEffect(() => {
//     // * This code is designed to load saved user-specific data (photo, document, and remarks) from AsyncStorage and update the component's state accordingly whenever 
//     // * the empid changes.
//     const loadSavedData = async () => {
//       try {
//         //!  Load Photo URI
//         //* AsyncStorage.getItem retrieves a value (if it exists) associated with the key photoUri_${empid}.
//         const savedPhotoUri = await AsyncStorage.getItem(`photoUri_${empid}`);
//         if (savedPhotoUri) {
//           // *If savedPhotoUri exists, setPhoto is called to update the state with the photo URI.
//           setPhoto({ uri: savedPhotoUri } as Asset);
//         }

//         // ! Load Document
//         // * AsyncStorage.getItem is used to get the saved document data.
//         const savedDocument = await AsyncStorage.getItem(`document_${empid}`);
//         if (savedDocument) {
//           // *If savedDocument exists, it is parsed from JSON format and passed to setDocument to update the state.
//           setDocument(JSON.parse(savedDocument));
//         }

//         // !Load Remarks
//         // *Again, AsyncStorage.getItem retrieves the saved remarks. If savedRemarks exists, setRemarks updates the state with these remarks.
//         const savedRemarks = await AsyncStorage.getItem(`remarks_${empid}`);
//         if (savedRemarks) {
//           setRemarks(savedRemarks);
//         }
//       } catch (error) {
//         console.error('Failed to load saved data:', error);
//       }
//     };
//     // * loadSavedData is called immediately after its declaration to execute the data loading side effect.
//     loadSavedData();
//   }, [empid]); //*The useEffect dependency array contains empid. This means the effect will run after the initial render and whenever empid changes.


//   // * The saveData function is an asynchronous function designed to save data to AsyncStorage.
//   const saveData = async () => {
//     try {
//       // ! if (photo): Checks if the photo object exists.
//       if (photo) {
//         // * AsyncStorage.setItem: Saves the photo.uri to AsyncStorage using the key photoUri_${empid}.
//         // * If photo.uri is not defined, it defaults to an empty string ('').
//         await AsyncStorage.setItem(`photoUri_${empid}`, photo.uri || ''); //? await: Ensures that the code waits for the setItem operation to complete before moving to the next operation.
//       }
//       // ! if (document): Checks if the document object exists.
//       if (document) {
//         // * AsyncStorage.setItem: Saves the document object to AsyncStorage using the key document_${empid}.
//         // * The document object is converted to a JSON string using JSON.stringify.
//         await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(document));
//       }
//       await AsyncStorage.setItem(`remarks_${empid}`, remarks);
//     } catch (error) {
//       console.error('Failed to save data:', error);
//     }
//   };

//   const validate = () => {
//     let valid = true;
//     if (remarks === '') {
//       setBadRemarks(true);
//       valid = false;
//     } else {
//       setBadRemarks(false);
//     }
//     return valid;
//   };

//   // ! The requestCameraPermission function is an asynchronous function designed to request camera permissions from the user on an Android device.
//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(                   //* PermissionsAndroid.request: This method is used to request a specific permission from the user.
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',                                     //* The title of the permission request dialog.
//           message: 'This app needs access to your camera to take photos.',//* The message explaining why the app needs the permission.
//           buttonNeutral: 'Ask Me Later',                                  //* The text for the neutral button (e.g., "Ask Me Later").
//           buttonNegative: 'Cancel',                                       //* The text for the negative button (e.g., "Cancel").
//           buttonPositive: 'OK',                                           //* The text for the positive button (e.g., "OK").
//         }
//       );
//       //* granted: This variable stores the result of the permission request. It will be one of the values from PermissionsAndroid.RESULTS.
//       //* The function checks if granted is equal to PermissionsAndroid.RESULTS.GRANTED:
//       //* If the permission was granted, the function returns true.
//       //* If the permission was not granted, the function returns false.
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // ! handleCapturePhoto function is an asynchronous function designed to handle the process of capturing a photo using the device's camera.
//   const handleCapturePhoto = async () => {

//     //* Platform.OS: This checks the platform the code is running on (e.g., 'ios' or 'android').
//     if (Platform.OS === 'android') { 
//         //* if (Platform.OS === 'android'): The following block runs only if the platform is Android.
//         //* requestCameraPermission(): Calls the requestCameraPermission function to request camera permission from the user.
//         //* await: Ensures the function waits for the permission request to complete.
//         //* if (!hasPermission): Checks if the permission was not granted.
//         //* If the permission was not granted, the function returns early, preventing further execution.*/
//       const hasPermission = await requestCameraPermission();
//       if (!hasPermission) {
//         return;
//       }
//     }

//     // ! options: An object defining the options for the camera
//     const options: CameraOptions = {
//       //* Specifies that only photos should be captured.
//       mediaType: 'photo',
//       //* Specifies that the captured photo should be saved to the device's photo gallery.
//       saveToPhotos: true,
//     };


//     // ! launchCamera: A function that launches the device's camera with the specified, options: The options object defined earlier, async (response): A callback function that handles the response from the camera.
//     launchCamera(options, async (response) => {
//       // * response.didCancel: Checks if the user canceled the camera operation. If true, logs 'User cancelled image picker'.
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } 
//       // * response.errorCode: Checks if an error occurred during the camera operation. If true, If true, logs the error code.
//       else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//       } 
//       // * response.assets && response.assets.length > 0: Checks if the response contains assets (captured media) and if there is at least one asset.
//       else if (response.assets && response.assets.length > 0) {
//         //* setPhoto(response.assets[0]): Updates the state with the first asset (the captured photo).
//         setPhoto(response.assets[0]);
//         //* await AsyncStorage.setItem(photoUri_${empid}, response.assets[0].uri || ''): Saves the URI of the captured photo to AsyncStorage using the key photoUri_${empid}.
//         await AsyncStorage.setItem(`photoUri_${empid}`, response.assets[0].uri || '');  
//       }
//     }).catch(error => {
//       console.log('Error launching camera:', error);
//     });
//   };


//   // ! The handleSelectDocument function is an asynchronous function designed to handle the process of selecting a document using a document picker.
//   const handleSelectDocument = async () => {
//     try {
//       // ! DocumentPicker.pick: A method that opens the document picker to allow the user to select a document.
//       const res = await DocumentPicker.pick({ //* res: Stores the result of the document picker operation, which is an array of selected documents.
//         type: [DocumentPicker.types.allFiles], //* Specifies that all file types should be allowed for selection.
//       });
//       setDocument(res[0]); //* Updates the state with the first document from the result array.
//       await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(res[0])); //* Saves the selected document to AsyncStorage, JSON.stringify(res[0]) => Converts the document object to a JSON string before storing it.
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) { //* Checks if the error indicates that the user canceled the document picker operation.
//         console.log('User cancelled document picker');
//       } else {
//         console.log('DocumentPicker Error: ', err);
//       }
//     }
//   };

//   const handleCancelPhoto = async () => {
//     setPhoto(null);
//     await AsyncStorage.removeItem(`photoUri_${empid}`);
//   };

//   const handleCancelDocument = async () => {
//     setDocument(null);
//     await AsyncStorage.removeItem(`document_${empid}`);
//   };

//   const handleSubmit = async () => {
//     if (validate()) {
//       saveData();
//       console.log("Remarks submitted:", remarks);
//     }
//   };

//   const handleDocumentClick = () => {
//     if (document) {
//       navigation.navigate('DocumentViewerScreen', { document });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>ID:
//         <Text style={styles.value}> {empid}</Text>
//       </Text>
//       <Text style={styles.label}>Machine No:
//         <Text style={styles.value}> {machineNo}</Text>
//       </Text>
//       <Text style={styles.label}>Customer Name:
//         <Text style={styles.value}> {customerName}</Text>
//       </Text>

//       <TextInput
//         value={remarks}
//         onChangeText={txt => setRemarks(txt)}
//         placeholder="Enter Remarks"
//         multiline={true}
//         style={styles.input}
//         textAlignVertical="top"
//         maxLength={50}
//       />
//       {badRemarks && (
//         <Text style={styles.errorMsg}>Please Enter Remarks</Text>
//       )}

//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('AddNotes', { id: (route.params as any).id })}
//       >
//         </TouchableOpacity>
//       <View style={styles.sectionContainer}>
//         <TouchableOpacity style={styles.camIcon} onPress={handleCapturePhoto}>
//           <FontAwesome name="camera" size={26} color="black" />
//         </TouchableOpacity>
//         {photo && (
//           <>
//             <Image
//               source={{ uri: photo.uri }}
//               style={styles.capturedImage}
//             />
//             <TouchableOpacity style={styles.cancelBtn} onPress={handleCancelPhoto}>
//               <FontAwesome name="camera" size={26} color="black" />
//             </TouchableOpacity>
//           </>
//         )}
//       </View>

//       <View style={styles.sectionContainer}>
//         <TouchableOpacity style={styles.camIcon} onPress={handleSelectDocument}>
//           <MaterialCommunityIcons name="file-document" size={35} color="black" />
//         </TouchableOpacity>


//         {document ? (
//           <View style={styles.documentContainer}>
//             <Text style={styles.documentText} onPress={handleDocumentClick}>
//               Selected Document: {document.name}
//             </Text>
//             <TouchableOpacity style={styles.cancelBtn} onPress={handleCancelDocument}>
//               <Text style={styles.cancelBtnText}>Cancel Document</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <Text style={styles.documentText}>No Document Selected</Text>
//         )}
//       </View>

//       <Loader visible={loading} />
//     </View>
//   );
// };

// export default DetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F7F9F2',
//   },
//   label: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#005C78',
//   },
//   value: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#22092C',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '90%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'center',
//     marginTop: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     paddingTop: 10,
//     color: 'black',
//   },
//   errorMsg: {
//     color: 'red',
//     marginLeft: 20,
//   },
//   sectionContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 20,
//     alignItems: 'center',
//   },
  
//   camIcon: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   capturedImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   documentContainer: {
//     alignItems: 'center',
//   },
//   documentText: {
//     alignSelf: 'center',
//     fontSize: 16,
//     color: 'black',
//     marginTop: 10,
//     padding: 10,
//     textDecorationLine: 'underline',
//   },
//   cancelBtn: {
//     marginTop: 10,
//     paddingLeft: 250,
    
//     borderRadius: 5,
//   },
//   cancelBtnText: {
//     color: 'white',
//     fontWeight: '600',
//   },
// });



// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, PermissionsAndroid, Platform } from 'react-native';
// import { launchCamera, CameraOptions, Asset } from 'react-native-image-picker';
// import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
// import { RootNavigationProps } from '../AppNavigator';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import Loader from './Components/Loader';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// type DetailScreenRouteProp = RouteProp<RootNavigationProps, 'DetailScreen'>;

// interface DetailScreenProps {
//   route: DetailScreenRouteProp;
// }

// const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
//   const { empid, machineNo, customerName } = route.params;
//   const navigation = useNavigation();
//   const [badRemarks, setBadRemarks] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [remarks, setRemarks] = useState<string>('');
//   const [photo, setPhoto] = useState<Asset | null>(null);
//   const [document, setDocument] = useState<DocumentPickerResponse | null>(null);
  

//   useEffect(() => {
//     // * This code is designed to load saved user-specific data (photo, document, and remarks) from AsyncStorage and update the component's state accordingly whenever 
//     // * the empid changes.
//     const loadSavedData = async () => {
//       try {
//         //!  Load Photo URI
//         //* AsyncStorage.getItem retrieves a value (if it exists) associated with the key photoUri_${empid}.
//         const savedPhotoUri = await AsyncStorage.getItem(`photoUri_${empid}`);
//         if (savedPhotoUri) {
//           // *If savedPhotoUri exists, setPhoto is called to update the state with the photo URI.
//           setPhoto({ uri: savedPhotoUri } as Asset);
//         }

//         // ! Load Document
//         // * AsyncStorage.getItem is used to get the saved document data.
//         const savedDocument = await AsyncStorage.getItem(`document_${empid}`);
//         if (savedDocument) {
//           // *If savedDocument exists, it is parsed from JSON format and passed to setDocument to update the state.
//           setDocument(JSON.parse(savedDocument));
//         }

//         // !Load Remarks
//         // *Again, AsyncStorage.getItem retrieves the saved remarks. If savedRemarks exists, setRemarks updates the state with these remarks.
//         const savedRemarks = await AsyncStorage.getItem(`remarks_${empid}`);
//         if (savedRemarks) {
//           setRemarks(savedRemarks);
//         }
//       } catch (error) {
//         console.error('Failed to load saved data:', error);
//       }
//     };
//     // * loadSavedData is called immediately after its declaration to execute the data loading side effect.
//     loadSavedData();
//   }, [empid]); //*The useEffect dependency array contains empid. This means the effect will run after the initial render and whenever empid changes.


//   // * The saveData function is an asynchronous function designed to save data to AsyncStorage.
//   const saveData = async () => {
//     try {
//       // ! if (photo): Checks if the photo object exists.
//       if (photo) {
//         // * AsyncStorage.setItem: Saves the photo.uri to AsyncStorage using the key photoUri_${empid}.
//         // * If photo.uri is not defined, it defaults to an empty string ('').
//         await AsyncStorage.setItem(`photoUri_${empid}`, photo.uri || ''); //? await: Ensures that the code waits for the setItem operation to complete before moving to the next operation.
//       }
//       // ! if (document): Checks if the document object exists.
//       if (document) {
//         // * AsyncStorage.setItem: Saves the document object to AsyncStorage using the key document_${empid}.
//         // * The document object is converted to a JSON string using JSON.stringify.
//         await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(document));
//       }
//       await AsyncStorage.setItem(`remarks_${empid}`, remarks);
//     } catch (error) {
//       console.error('Failed to save data:', error);
//     }
//   };

//   const validate = () => {
//     let valid = true;
//     if (remarks === '') {
//       setBadRemarks(true);
//       valid = false;
//     } else {
//       setBadRemarks(false);
//     }
//     return valid;
//   };

//   // ! The requestCameraPermission function is an asynchronous function designed to request camera permissions from the user on an Android device.
//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(                   //* PermissionsAndroid.request: This method is used to request a specific permission from the user.
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',                                     //* The title of the permission request dialog.
//           message: 'This app needs access to your camera to take photos.',//* The message explaining why the app needs the permission.
//           buttonNeutral: 'Ask Me Later',                                  //* The text for the neutral button (e.g., "Ask Me Later").
//           buttonNegative: 'Cancel',                                       //* The text for the negative button (e.g., "Cancel").
//           buttonPositive: 'OK',                                           //* The text for the positive button (e.g., "OK").
//         }
//       );
//       //* granted: This variable stores the result of the permission request. It will be one of the values from PermissionsAndroid.RESULTS.
//       //* The function checks if granted is equal to PermissionsAndroid.RESULTS.GRANTED:
//       //* If the permission was granted, the function returns true.
//       //* If the permission was not granted, the function returns false.
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // ! handleCapturePhoto function is an asynchronous function designed to handle the process of capturing a photo using the device's camera.
//   const handleCapturePhoto = async () => {

//     //* Platform.OS: This checks the platform the code is running on (e.g., 'ios' or 'android').
//     if (Platform.OS === 'android') { 
//         //* if (Platform.OS === 'android'): The following block runs only if the platform is Android.
//         //* requestCameraPermission(): Calls the requestCameraPermission function to request camera permission from the user.
//         //* await: Ensures the function waits for the permission request to complete.
//         //* if (!hasPermission): Checks if the permission was not granted.
//         //* If the permission was not granted, the function returns early, preventing further execution.*/
//       const hasPermission = await requestCameraPermission();
//       if (!hasPermission) {
//         return;
//       }
//     }

//     // ! options: An object defining the options for the camera
//     const options: CameraOptions = {
//       //* Specifies that only photos should be captured.
//       mediaType: 'photo',
//       //* Specifies that the captured photo should be saved to the device's photo gallery.
//       saveToPhotos: true,
//     };


//     // ! launchCamera: A function that launches the device's camera with the specified, options: The options object defined earlier, async (response): A callback function that handles the response from the camera.
//     launchCamera(options, async (response) => {
//       // * response.didCancel: Checks if the user canceled the camera operation. If true, logs 'User cancelled image picker'.
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } 
//       // * response.errorCode: Checks if an error occurred during the camera operation. If true, If true, logs the error code.
//       else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//       } 
//       // * response.assets && response.assets.length > 0: Checks if the response contains assets (captured media) and if there is at least one asset.
//       else if (response.assets && response.assets.length > 0) {
//         //* setPhoto(response.assets[0]): Updates the state with the first asset (the captured photo).
//         setPhoto(response.assets[0]);
//         //* await AsyncStorage.setItem(photoUri_${empid}, response.assets[0].uri || ''): Saves the URI of the captured photo to AsyncStorage using the key photoUri_${empid}.
//         await AsyncStorage.setItem(`photoUri_${empid}`, response.assets[0].uri || '');  
//       }
//     }).catch(error => {
//       console.log('Error launching camera:', error);
//     });
//   };


//   // ! The handleSelectDocument function is an asynchronous function designed to handle the process of selecting a document using a document picker.
//   const handleSelectDocument = async () => {
//     try {
//       // ! DocumentPicker.pick: A method that opens the document picker to allow the user to select a document.
//       const res = await DocumentPicker.pick({ //* res: Stores the result of the document picker operation, which is an array of selected documents.
//         type: [DocumentPicker.types.allFiles], //* Specifies that all file types should be allowed for selection.
//       });
//       setDocument(res[0]); //* Updates the state with the first document from the result array.
//       await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(res[0])); //* Saves the selected document to AsyncStorage, JSON.stringify(res[0]) => Converts the document object to a JSON string before storing it.
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) { //* Checks if the error indicates that the user canceled the document picker operation.
//         console.log('User cancelled document picker');
//       } else {
//         console.log('DocumentPicker Error: ', err);
//       }
//     }
//   };

//   const handleCancelPhoto = async () => {
//     setPhoto(null);
//     await AsyncStorage.removeItem(`photoUri_${empid}`);
//   };

//   const handleCancelDocument = async () => {
//     setDocument(null);
//     await AsyncStorage.removeItem(`document_${empid}`);
//   };

//   const handleSubmit = async () => {
//     if (validate()) {
//       saveData();
//       console.log("Remarks submitted:", remarks);
//     }
//   };

//   const handleDocumentClick = () => {
//     if (document) {
//       navigation.navigate('DocumentViewerScreen', { document });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>ID:
//         <Text style={styles.value}> {empid}</Text>
//       </Text>
//       <Text style={styles.label}>Machine No:
//         <Text style={styles.value}> {machineNo}</Text>
//       </Text>
//       <Text style={styles.label}>Customer Name:
//         <Text style={styles.value}> {customerName}</Text>
//       </Text>

//       <TextInput
//         value={remarks}
//         onChangeText={txt => setRemarks(txt)}
//         placeholder="Enter Remarks"
//         multiline={true}
//         style={styles.input}
//         textAlignVertical="top"
//         maxLength={50}
//       />
//       {badRemarks && (
//         <Text style={styles.errorMsg}>Please Enter Remarks</Text>
//       )}

      
//       <View style={styles.sectionContainer}>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={handleCapturePhoto}
//         >
//           <Text style={styles.btnText}>Capture Image</Text>
//         </TouchableOpacity>
//         {photo && (
//           <>
//             <Image
//               source={{ uri: photo.uri }}
//               style={styles.capturedImage}
//             />
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={handleCancelPhoto}
//             >
//               <Text style={styles.btnText}>Capture Image</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>

//       <View style={styles.sectionContainer}>
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={handleSelectDocument}
//       >
//         <Text style={styles.btnText}>Insert Document</Text>
//       </TouchableOpacity>
//         {document ? (
//           <View style={styles.documentContainer}>
//             <Text style={styles.documentText} onPress={handleDocumentClick}>
//               Selected Document: {document.name}
//             </Text>
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={handleCancelDocument}
//             >
//             <Text style={styles.btnText}>Insert Document</Text>
//           </TouchableOpacity>
//           </View>
//         ) : (
//           <Text style={styles.documentText}>No Document Selected</Text>
//         )}
//       </View>
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('CameraScreen')}
//       >
//         <Text style={styles.btnText}>Camera Page</Text>
//       </TouchableOpacity>
//       <Loader visible={loading} />
//     </View>
//   );
// };

// export default DetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F7F9F2',
//   },
//   label: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#005C78',
//   },
//   value: {
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#22092C',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '90%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: 'black',
//     alignSelf: 'center',
//     marginTop: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     paddingTop: 10,
//     color: 'black',
//   },
//   errorMsg: {
//     color: 'red',
//     marginLeft: 20,
//   },
//   sectionContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 20,
//     alignItems: 'center',
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
//   camIcon: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   capturedImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   documentContainer: {
//     alignItems: 'center',
//   },
//   documentText: {
//     alignSelf: 'center',
//     fontSize: 16,
//     color: 'black',
//     marginTop: 10,
//     padding: 10,
//     textDecorationLine: 'underline',
//   },
//   cancelBtn: {
//     marginTop: 10,
//     paddingLeft: 250,
    
//     borderRadius: 5,
//   },
//   cancelBtnText: {
//     color: 'white',
//     fontWeight: '600',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
// import { Asset, launchImageLibrary, MediaType } from 'react-native-image-picker';
// import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import Loader from './Components/Loader';
// import { RootNavigationProps } from '../AppNavigator';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { launchCamera, CameraOptions, ImagePickerResponse } from 'react-native-image-picker';
// import { Alert, PermissionsAndroid, Platform } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// type DetailScreenRouteProp = RouteProp<RootNavigationProps, 'DetailScreen'>;

// interface DetailScreenProps {
//   route: DetailScreenRouteProp;
// }

// const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
//   const { empid, machineNo, customerName } = route.params;
//   const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

//   const [badRemarks, setBadRemarks] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [remarks, setRemarks] = useState<string>('');
//   const [photo, setPhoto] = useState<Asset | null>(null);
//   const [document, setDocument] = useState<DocumentPickerResponse | null>(null);

//   useEffect(() => {
//     const loadSavedData = async () => {
//       try {
//         const savedPhotoUri = await AsyncStorage.getItem(`photoUri_${empid}`);
//         if (savedPhotoUri) {
//           setPhoto({ uri: savedPhotoUri } as Asset);
//         }

//         const savedDocument = await AsyncStorage.getItem(`document_${empid}`);
//         if (savedDocument) {
//           setDocument(JSON.parse(savedDocument));
//         }

//         const savedRemarks = await AsyncStorage.getItem(`remarks_${empid}`);
//         if (savedRemarks) {
//           setRemarks(savedRemarks);
//         }
//       } catch (error) {
//         console.error('Failed to load saved data:', error);
//       }
//     };
//     loadSavedData();
//   }, [empid]);

//   const saveData = async () => {
//     try {
//       if (photo) {
//         await AsyncStorage.setItem(`photoUri_${empid}`, photo.uri || '');
//       }
//       if (document) {
//         await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(document));
//       }
//       await AsyncStorage.setItem(`remarks_${empid}`, remarks);
//     } catch (error) {
//       console.error('Failed to save data:', error);
//     }
//   };

//   const validate = () => {
//     let valid = true;
//     if (remarks === '') {
//       setBadRemarks(true);
//       valid = false;
//     } else {
//       setBadRemarks(false);
//     }
//     return valid;
//   };

//   // const requestCameraPermission = async () => {
//   //   if (Platform.OS === 'android') {
//   //     try {
//   //       const granted = await PermissionsAndroid.request(
//   //         PermissionsAndroid.PERMISSIONS.CAMERA,
//   //         {
//   //           title: 'Camera Permission',
//   //           message: 'This app needs camera permission to take photos',
//   //           buttonNeutral: 'Ask Me Later',
//   //           buttonNegative: 'Cancel',
//   //           buttonPositive: 'OK',
//   //         }
//   //       );
//   //       return granted === PermissionsAndroid.RESULTS.GRANTED;
//   //     } catch (err) {
//   //       console.warn(err);
//   //       return false;
//   //     }
//   //   } else {
//   //     // iOS automatically asks for camera permission on first use
//   //     return true;
//   //   }
//   // };

//   // const handleCapturePhoto = async () => {
//   //   console.log('handleCapturePhoto called');
//   //   const hasPermission = await requestCameraPermission();
//   //   if (!hasPermission) {
//   //     Alert.alert('Permission Denied', 'Camera permission is required to take photos');
//   //     return;
//   //   }

//   //   const options: CameraOptions = {
//   //     mediaType: 'photo',
//   //     saveToPhotos: true,
//   //   };

//   //   try {
//   //     console.log('Entered try Block ');
      
//   //     const response = await launchCamera(options);
//   //     console.log('launchCamera response:', response);
//   //     Alert.alert('Response printed');
//   //     if (response.didCancel) {
//   //       console.log('User cancelled image picker');
//   //     } else if (response.errorCode) {
//   //       console.log('ImagePicker Error: ', response.errorCode);
//   //     } else if (response.assets && response.assets.length > 0) {
//   //       setPhoto(response.assets[0]);
//   //       await AsyncStorage.setItem(`photoUri_${empid}`, response.assets[0].uri || '');
//   //     }
//   //   } catch (error) {
//   //     console.log('Error launching camera:', error);
//   //   }
//   // };

//   const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.CAMERA,
//           {
//             title: 'Camera Permission',
//             message: 'This app needs camera access to take photos.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           },
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.warn(err);
//         return false;
//       }
//     } else {
//       return true;
//     }
//   };
  
//   const handleCapturePhoto = async () => {
//     console.log('handleCapturePhoto called');
//     const hasPermission = await requestCameraPermission();
//     if (!hasPermission) {
//       Alert.alert('Permission Denied', 'Camera permission is required to take photos');
//       return;
//     }
  
//     const options: CameraOptions = {
//       mediaType: 'photo',
//       saveToPhotos: true,
//     };
  
//     try {
//       console.log('Entered try Block');

//       console.log('launchCamera:', launchCamera);

//       const response: ImagePickerResponse = await launchCamera(options);
//       console.log('Entering Response Log');
      
//       console.log('launchCamera response:', response);
//       Alert.alert('Response printed');
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//       } else if (response.assets && response.assets.length > 0) {
//         setPhoto(response.assets[0]);
//         await AsyncStorage.setItem(`photoUri_${empid}`, response.assets[0].uri || '');
//       }
//     } catch (error) {
//       console.log('Error launching camera:', error);
//     }
//   };


 
  

//   const handleSelectDocument = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setDocument(res[0]);
//       await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(res[0]));
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User cancelled document picker');
//       } else {
//         console.log('DocumentPicker Error: ', err);
//       }
//     }
//   };

//   const handleCancelPhoto = async () => {
//     setPhoto(null);
//     await AsyncStorage.removeItem(`photoUri_${empid}`);
//   };

//   const handleCancelDocument = async () => {
//     setDocument(null);
//     await AsyncStorage.removeItem(`document_${empid}`);
//   };

//   const handleSubmit = async () => {
//     if (validate()) {
//       saveData();
//       console.log('Remarks submitted:', remarks);
//     }
//   };

//   const handleDocumentClick = () => {
//     if (document) {
//       navigation.navigate('DocumentViewerScreen', { document });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>ID:<Text style={styles.value}> {empid}</Text></Text>
//       <Text style={styles.label}>Machine No:<Text style={styles.value}> {machineNo}</Text></Text>
//       <Text style={styles.label}>Customer Name:<Text style={styles.value}> {customerName}</Text></Text>
//       <TextInput
//         value={remarks}
//         onChangeText={txt => setRemarks(txt)}
//         placeholder="Enter Remarks"
//         multiline={true}
//         style={styles.input}
//         textAlignVertical="top"
//         maxLength={50}
//       />
//       {badRemarks && (
//         <Text style={styles.errorMsg}>Please Enter Remarks</Text>
//       )}
//       <View style={styles.sectionContainer}>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={handleCapturePhoto}
//         >
//           <Text style={styles.btnText}>Capture Image</Text>
//         </TouchableOpacity>
//         {photo && (
//           <>
//             <Image
//               source={{ uri: photo.uri }}
//               style={styles.capturedImage}
//             />
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={handleCancelPhoto}
//             >
//               <Text style={styles.btnText}>Cancel Photo</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//       <View style={styles.sectionContainer}>
//         <TouchableOpacity
//           style={styles.btn}
//           onPress={handleSelectDocument}
//         >
//           <Text style={styles.btnText}>Insert Document</Text>
//         </TouchableOpacity>
//         {document ? (
//           <View style={styles.documentContainer}>
//             <Text style={styles.documentText} onPress={handleDocumentClick}>
//               Selected Document: {document.name}
//             </Text>
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={handleCancelDocument}
//             >
//               <Text style={styles.btnText}>Cancel Document</Text>
//             </TouchableOpacity>
//           </View>
//         ) : null}
//       </View>
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('CameraScreen')}
//       >
//         <Text style={styles.btnText}>Navigate To Cam</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={handleSubmit}
//       >
//         <Text style={styles.btnText}>Submit</Text>
//       </TouchableOpacity>
//       {loading && <Loader visible={false} />}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   value: {
//     fontWeight: 'normal',
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 10,
//     marginVertical: 10,
//     height: 100,
//   },
//   errorMsg: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   btn: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 4,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   capturedImage: {
//     width: 100,
//     height: 100,
//     marginVertical: 10,
//   },
//   sectionContainer: {
//     marginVertical: 10,
//   },
//   documentContainer: {
//     marginTop: 10,
//   },
//   documentText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

// export default DetailScreen;
// function callback(response: ImagePickerResponse) {
//   throw new Error('Function not implemented.');
// }


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { RouteProp, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import * as DocumentPicker from 'expo-document-picker';
// import * as FileSystem from 'expo-file-system';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Loader from './Components/Loader';
// import { RootNavigationProps } from '../AppNavigator';
// import FastImage from 'react-native-fast-image';

// type DetailScreenRouteProp = RouteProp<RootNavigationProps, 'DetailScreen'>;

// interface DetailScreenProps {
//   route: DetailScreenRouteProp;
// }

// const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
//   const { empid, machineNo, customerName, capturedImage = '' } = route.params;
//   const decodedImageUri = decodeURIComponent(capturedImage);
//   const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

//   const [badRemarks, setBadRemarks] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [remarks, setRemarks] = useState<string>('');
//   const [photo, setPhoto] = useState<string | null>(decodedImageUri || null);
//   const [document, setDocument] = useState<any | null>(null); // Use 'any' to avoid type issues

//   useEffect(() => {
//     const loadSavedData = async () => {
//       try {
//         const savedPhotoUri = await AsyncStorage.getItem(`photoUri_${empid}`);
//         if (savedPhotoUri) {
//           setPhoto(savedPhotoUri);
//         }

//         const savedDocument = await AsyncStorage.getItem(`document_${empid}`);
//         if (savedDocument) {
//           setDocument(JSON.parse(savedDocument));
//         }

//         const savedRemarks = await AsyncStorage.getItem(`remarks_${empid}`);
//         if (savedRemarks) {
//           setRemarks(savedRemarks);
//         }
//       } catch (error) {
//         console.error('Failed to load saved data:', error);
//       }
//     };
//     loadSavedData();
//   }, [empid]);

//   const saveData = async () => {
//     try {
//       if (photo) {
//         await AsyncStorage.setItem(`photoUri_${empid}`, photo);
//       }
//       if (document) {
//         await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(document));
//       }
//       await AsyncStorage.setItem(`remarks_${empid}`, remarks);
//     } catch (error) {
//       console.error('Failed to save data:', error);
//     }
//   };

//   const validate = () => {
//     let valid = true;
//     if (remarks === '') {
//       setBadRemarks(true);
//       valid = false;
//     } else {
//       setBadRemarks(false);
//     }
//     return valid;
//   };

//   // const handleSelectDocument = async () => {
//   //   try {
//   //     const res: any = await DocumentPicker.getDocumentAsync({
//   //       type: '*/*',
//   //     });

//   //     if (res.type === 'success') {
//   //       const base64 = await FileSystem.readAsStringAsync(res.uri, { encoding: FileSystem.EncodingType.Base64 });
//   //       const documentData = {
//   //         name: res.name,
//   //         mimeType: res.mimeType,
//   //         size: res.size,
//   //         base64: base64,
//   //       };
//   //       setDocument(documentData);
//   //       await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(documentData));
//   //       uploadDocumentToBackend(documentData);
//   //     }
//   //   } catch (err) {
//   //     console.log('DocumentPicker Error: ', err);
//   //   }
//   // };

//   const handleSelectDocument = async (documentData: { name: any; mimeType: any; size: any; base64: any; }) => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://your-backend-api.com/api/documents/uploadDocument', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: documentData.name,
//           mimeType: documentData.mimeType,
//           size: documentData.size,
//           base64: documentData.base64,
//           empid: empid,
//           machineNo: machineNo,
//           customerName: customerName,
//         }),
//       });
//       const data = await response.json();
//       console.log('Document uploaded successfully:', data);
//     } catch (error) {
//       console.error('Failed to upload document:', error);
//     }
//     setLoading(false);
//   };

//   const handleCancelPhoto = async () => {
//     setPhoto(null);
//     await AsyncStorage.removeItem(`photoUri_${empid}`);
//   };

//   const handleCancelDocument = async () => {
//     setDocument(null);
//     await AsyncStorage.removeItem(`document_${empid}`);
//   };

//   const handleSubmit = async () => {
//     if (validate()) {
//       saveData();
//       console.log('Remarks submitted:', remarks);
//     }
//   };

//   // const handleDocumentClick = () => {
//   //   if (document) {
//   //     navigation.navigate('DocumentViewerScreen', { document });
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>ID:<Text style={styles.value}> {empid}</Text></Text>
//       <Text style={styles.label}>Machine No:<Text style={styles.value}> {machineNo}</Text></Text>
//       <Text style={styles.label}>Customer Name:<Text style={styles.value}> {customerName}</Text></Text>
//       <TextInput
//         value={remarks}
//         onChangeText={txt => setRemarks(txt)}
//         placeholder="Enter Remarks"
//         multiline={true}
//         style={styles.input}
//         textAlignVertical="top"
//         maxLength={50}
//       />
//       {badRemarks && (
//         <Text style={styles.errorMsg}>Please Enter Remarks</Text>
//       )}
//       <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CameraScreen', { empid, machineNo, customerName })}>
//         <Text style={styles.btnText}>Capture Image</Text>
//       </TouchableOpacity>

//       {photo && (
//         <FastImage
//           style={styles.capturedImage}
//           source={{
//             uri: decodedImageUri,
//             priority: FastImage.priority.normal,
//           }}
//           resizeMode={FastImage.resizeMode.cover}
//           onLoad={() => console.log('Image loaded successfully')}
//           // onError={(error: { nativeEvent: { error: any; }; }) => console.error('Image loading error:', error.nativeEvent.error)}
//         />
//       )}

//       <View style={styles.sectionContainer}>
//         <TouchableOpacity style={styles.btn} onPress={handleSelectDocument}>
//           <Text style={styles.btnText}>Insert Document</Text>
//         </TouchableOpacity>
//         {/* {document ? (
//           <View style={styles.documentContainer}>
//             <Text style={styles.documentText} onPress={handleDocumentClick}>
//               Selected Document: {document.name}
//             </Text>
//             <TouchableOpacity style={styles.btn} onPress={handleCancelDocument}>
//               <Text style={styles.btnText}>Cancel Document</Text>
//             </TouchableOpacity>
//           </View>
//         ) : null} */}
//       </View>

//       <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
//         <Text style={styles.btnText}>Submit</Text>
//       </TouchableOpacity>
//       {loading && <Loader visible={loading} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   value: {
//     fontWeight: 'normal',
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 10,
//     marginVertical: 10,
//     height: 100,
//   },
//   errorMsg: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   btn: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 4,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   capturedImage: {
//     width: '100%',
//     height: 200,
//     marginVertical: 10,
//   },
//   sectionContainer: {
//     marginVertical: 20,
//   },
//   documentContainer: {
//     marginVertical: 10,
//   },
//   documentText: {
//     fontSize: 16,
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//   },
// });

// export default DetailScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './Components/Loader';
import FastImage from 'react-native-fast-image';


// Define a type that matches the actual DocumentPickerResult type
type DocumentPickerResult = {
  type: string; // or 'success' | 'cancel' if you know the possible values
  uri?: string;
  name?: string;
  mimeType?: string;
};

const DetailScreen: React.FC<any> = ({ route }) => { // Adjusted type to `any` for route
  const { empid, machineNo, customerName, capturedImage = '' } = route.params;
  const decodedImageUri = decodeURIComponent(capturedImage);
  const navigation = useNavigation();

  const [badRemarks, setBadRemarks] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [remarks, setRemarks] = useState<string>('');
  const [photo, setPhoto] = useState<string | null>(decodedImageUri || null);
  const [document, setDocument] = useState<DocumentPicker.DocumentPickerResult | null>(null);

  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedPhotoUri = await AsyncStorage.getItem(`photoUri_${empid}`);
        if (savedPhotoUri) {
          setPhoto(savedPhotoUri);
        }

        const savedDocument = await AsyncStorage.getItem(`document_${empid}`);
        if (savedDocument) {
          setDocument(JSON.parse(savedDocument));
        }

        const savedRemarks = await AsyncStorage.getItem(`remarks_${empid}`);
        if (savedRemarks) {
          setRemarks(savedRemarks);
        }
      } catch (error) {
        console.error('Failed to load saved data:', error);
      }
    };
    loadSavedData();
  }, [empid]);

  const saveData = async () => {
    try {
      if (photo) {
        await AsyncStorage.setItem(`photoUri_${empid}`, photo);
      }
      if (document) {
        await AsyncStorage.setItem(`document_${empid}`, JSON.stringify(document));
      }
      await AsyncStorage.setItem(`remarks_${empid}`, remarks);
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };

  const validate = () => {
    let valid = true;
    if (remarks === '') {
      setBadRemarks(true);
      valid = false;
    } else {
      setBadRemarks(false);
    }
    return valid;
  };

  const handleCancelPhoto = async () => {
    setPhoto(null);
    await AsyncStorage.removeItem(`photoUri_${empid}`);
  };

  const handleCancelDocument = async () => {
    setDocument(null);
    await AsyncStorage.removeItem(`document_${empid}`);
  };

  const handleSubmit = async () => {
    if (validate()) {
      setLoading(true);
      await saveData();
      console.log('Remarks submitted:', remarks);

      const formData = new FormData();
      formData.append('empid', empid);
      formData.append('machineNo', machineNo);
      formData.append('customerName', customerName);
      formData.append('remarks', remarks);

      if (photo) {
        const file = await FileSystem.readAsStringAsync(photo, { encoding: FileSystem.EncodingType.Base64 });
        formData.append('photo', `data:image/png;base64,${file}`);
      }

      if (document && document.type === 'success') {
        formData.append('document', {
          uri: document.uri,
          name: document.name,
          type: document.mimeType || 'application/octet-stream',
        });
      }

      try {
        const response = await fetch('http://192.168.1.48:8000/api/docs/uploadDocument', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const data = await response.json();
        console.log('Document upload response:', data);

        if (response.ok) {
          console.log('Document uploaded successfully.');
        } else {
          console.error('Document upload failed.');
        }
      } catch (error) {
        console.error('Error uploading document:', error);
      }
      setLoading(false);
    }
  };

  const handleSelectDocument = async () => {
    try {
      const result: DocumentPickerResult = await DocumentPicker.getDocumentAsync({});
      console.log('Document selected:', result);
  
      // Check the result object directly
      console.log('Result object structure:', result);
  
      if (result.type === 'success') {
        if (result.uri && result.name) {
          const fileInfo = await FileSystem.getInfoAsync(result.uri);
          setDocument({
            uri: result.uri,
            name: result.name,
            mimeType: result.mimeType || 'application/octet-stream',
            size: fileInfo.exists ? fileInfo.size : 0,
          });
        } else {
          console.log('Document result is missing required properties.');
        }
      } else {
        console.log('Document selection was canceled.');
      }
    } catch (error) {
      console.error('Error selecting document:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ID:<Text style={styles.value}> {empid}</Text></Text>
      <Text style={styles.label}>Machine No:<Text style={styles.value}> {machineNo}</Text></Text>
      <Text style={styles.label}>Customer Name:<Text style={styles.value}> {customerName}</Text></Text>
      <TextInput
        value={remarks}
        onChangeText={txt => setRemarks(txt)}
        placeholder="Enter Remarks"
        multiline={true}
        style={styles.input}
        textAlignVertical="top"
        maxLength={50}
      />
      {badRemarks && (
        <Text style={styles.errorMsg}>Please Enter Remarks</Text>
      )}
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CameraScreen', { empid, machineNo, customerName })}>
        <Text style={styles.btnText}>Capture Image</Text>
      </TouchableOpacity>

      {photo && (
        <FastImage
          style={styles.capturedImage}
          source={{
            uri: decodedImageUri,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
          onLoad={() => console.log('Image loaded successfully')}
        />
      )}

      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleSelectDocument}>
          <Text style={styles.btnText}>Insert Document</Text>
        </TouchableOpacity>
        {document && document.type === 'success' && (
          <View style={styles.documentContainer}>
            <Text style={styles.documentText}>
              Selected Document: {document.name}
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handleCancelDocument}>
              <Text style={styles.btnText}>Cancel Document</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
      {loading && <Loader visible={loading} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  value: {
    fontWeight: 'normal',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    height: 100,
  },
  errorMsg: {
    color: 'red',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  capturedImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  sectionContainer: {
    marginVertical: 20,
  },
  documentContainer: {
    marginVertical: 10,
  },
  documentText: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default DetailScreen;

