// import React, { useRef, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert, PermissionsAndroid, Platform } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// const CameraScreen = () => {
//   const cameraRef = useRef<RNCamera | null>(null);
//   const [isCameraReady, setIsCameraReady] = useState(false);

//   useEffect(() => {
//     requestCameraPermission();
//   }, []);

//   const requestCameraPermission = async () => {
//     try {
//       if (Platform.OS === 'android') {
//         const permissions = [
//           PermissionsAndroid.PERMISSIONS.CAMERA,
//           PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         ];

//         const granted = await PermissionsAndroid.requestMultiple(permissions);

//         if (
//           granted['android.permission.CAMERA'] !== PermissionsAndroid.RESULTS.GRANTED ||
//           granted['android.permission.RECORD_AUDIO'] !== PermissionsAndroid.RESULTS.GRANTED
//         ) {
//           Alert.alert('Permission Denied', 'Camera and Audio permissions are required.');
//         }
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const takePicture = async () => {
//     if (cameraRef.current && isCameraReady) {
//       try {
//         const options = { quality: 0.5, base64: true };
//         const data = await cameraRef.current.takePictureAsync(options);
//         console.log(data.uri);
//       } catch (error) {
//         console.error('Error taking picture:', error);
//         Alert.alert('Error', 'Failed to take picture. Please try again.');
//       }
//     } else {
//       console.warn('Camera is not ready');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <RNCamera
//         ref={(ref) => { cameraRef.current = ref; }}
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.auto}
//         onCameraReady={() => {
//           setIsCameraReady(true);
//           console.log('Camera is ready');
//         }}
//         onMountError={(error) => {
//           console.error('Camera mount error:', error);
//           Alert.alert('Error', 'Failed to mount camera. Please try again.');
//         }}
//         androidCameraPermissionOptions={{
//           title: 'Permission to use camera',
//           message: 'We need your permission to use your camera',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}
//         androidRecordAudioPermissionOptions={{
//           title: 'Permission to use audio recording',
//           message: 'We need your permission to use your audio',
//           buttonPositive: 'Ok',
//           buttonNegative: 'Cancel',
//         }}
//       />
//       <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//         <TouchableOpacity onPress={takePicture} style={styles.capture}>
//           <Text style={{ fontSize: 14 }}> SNAP </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

// export default CameraScreen;

// import React, { useState, useEffect, useRef } from 'react';
// import { Button, Text, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// const App = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await RNCamera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       console.log(data.uri); // Do something with the captured image
//     }
//   };

//   if (hasPermission === null) {
//     return <View />;
//   } else if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   } else {
//     return (
//       <View style={{ flex: 1 }}>
//         <RNCamera
//           ref={cameraRef}
//           style={{ flex: 1 }}
//           type={RNCamera.Constants.Type.back}
//         >
//           <Button title="Take Picture" onPress={takePicture} />
//         </RNCamera>
//       </View>
//     );
//   }
// };

// export default App;


// import React, { Component } from 'react'
// import { StyleSheet, View, Alert } from 'react-native'
// import { RNCamera } from 'react-native-camera'

// class App extends Component {
//   camera: RNCamera | null | undefined
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={{ flex: 1, alignItems: 'center' }}
//           ref={ref => {
//             this.camera = ref
//           }}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black'
//   }
// })

// export default App
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
// import React, { useEffect } from 'react'
// import {Camera, useCameraDevice, useCameraDevices, useCameraPermission} from 'react-native-vision-camera';

// const App = () => {
//   const device = useCameraDevice('back')
//   const { hasPermission } = useCameraPermission()
  
//     useEffect( ()=> {
//         checkpermission();
//     })
//     const checkpermission = async () =>{
//         const newCameraPermission = await Camera.requestCameraPermission();
//         const newMicrophonePermission = await Camera.requestMicrophonePermission();
//         console.log(newCameraPermission);
//     }
//     // const listener = Camera.addCameraDevicesChangedListener((devices) => {
//     //   console.log(`Devices changed: ${devices}`)
//     //   this.usbCamera = devices.find((d) => d.position === "external")
//     // })
//     // // ...
//     // listener.remove()
//     // if (!hasPermission) return <PermissionsPage />
//     if (device == null) return <ActivityIndicator />
//   return (
//     <View style={{flex:1}}>
//       <Text>
//         <Camera
//           style={StyleSheet.absoluteFill}
//           device={device}
//           isActive={true}
//           // onPreviewStarted={() => console.log('Preview started!')}
//           // onPreviewStopped={() => console.log('Preview stopped!')}
//         />
//       </Text>
//     </View>
//   )
// }

// export default App;

//! Expo Camera
// import { CameraView, useCameraPermissions } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { captureRef } from 'react-native-view-shot';
// export default function App() {
//   const [facing, setFacing] = useState('back');
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   } 

//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });


// import React, { useState, useRef } from 'react';
// import { Button, PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { CameraView,  useCameraPermissions } from 'expo-camera';
// import { captureRef } from 'react-native-view-shot';
// import { CameraType } from 'expo-camera/build/legacy/Camera.types';

// export default function App() {
//   const [facing, setFacing] = useState(CameraType.back);
//   const [permission, requestPermission] = useCameraPermissions();
//   const cameraRef = useRef<CameraView>(null);

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="Grant Permission" />
//       </View>
//     );
//   }

//   const toggleCameraFacing = () => {
//     setFacing((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
//   };

//   const takeSnapshot = async () => {
//     const targetPixelCount = 1080; // If you want full HD pictures
//     const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
//     // pixels * pixelRatio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
//     const pixels = targetPixelCount / pixelRatio;

//     if (cameraRef.current) {
//       const result = await captureRef(cameraRef.current, {
//         result: 'tmpfile',
//         height: pixels,
//         width: pixels,
//         quality: 1,
//         format: 'png',
//       });
//       console.log(result);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={takeSnapshot}>
//             <Text style={styles.text}>Take Snapshot</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

import React, { useState, useRef } from 'react';
import { Button, PixelRatio, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { captureRef } from 'react-native-view-shot';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigationProps } from '../AppNavigator';

type CameraScreenRouteProp = RouteProp<RootNavigationProps, 'CameraScreen'>;

interface CameraScreenProps {
  route: CameraScreenRouteProp;
}
export default function CameraScreen({ route }: CameraScreenProps) {
  const { empid, machineNo, customerName } = route.params; 
  
  const [facing, setFacing] = useState(CameraType.back);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const takeSnapshot = async () => {
    const targetPixelCount = 1080;
    const pixelRatio = PixelRatio.get();
    const pixels = targetPixelCount / pixelRatio;

    if (cameraRef.current) {
      const result = await captureRef(cameraRef.current, {
        result: 'tmpfile',
        height: pixels,
        width: pixels,
        quality: 1,
        format: 'png',
      });
      console.log('Captured image URI:', result); // Log the captured image URI
      navigation.navigate('DetailScreen', {capturedImage: result, empid, machineNo, customerName }); // Pass the captured image back
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takeSnapshot}>
            <Text style={styles.text}>Take Snapshot</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});







