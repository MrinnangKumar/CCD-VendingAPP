

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { View, TouchableOpacity, Image, ActivityIndicator, StyleSheet, Linking, Text } from 'react-native';
// import { Camera, useCameraDevices, CameraDevice } from 'react-native-vision-camera';

// const CameraScreen = () => {
//   const [loading, setLoading] = useState(false);
//   const [flashToggle, setFlashToggle] = useState(false);
//   const [camView, setCamView] = useState('back');
//   const [torch, setTorch] = useState('off');
//   const cameraRef = useRef(Camera);
//   const devices = useCameraDevices();
//   const device = camView === 'back' ? devices.back : devices.front;

//   const cameraPermission = useCallback(async () => {
//     const permission = await Camera.requestCameraPermission();
//     if (permission === 'denied') {
//       await Linking.openSettings();
//     }
//     setLoading(devices);
//   }, [devices]);

//   useEffect(() => {
//     setLoading(true);
//     cameraPermission();
//   }, [cameraPermission, devices]);

//   const takePhoto = async () => {
//     setLoading(true);
//     try {
//       if (cameraRef.current == null) {
//         throw new Error('Camera ref is null');
//       }

//       console.log("Picture taking...");
//       const photo = await cameraRef.current.takePhoto({
//         qualityPrioritization: 'quality',
//         flash: `${torch}`,
//         enableAutoRedEyeReduction: true,
//       });
//       console.log(photo);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (device == null) {
//     return <ActivityIndicator style={{ flex: 1 }} size={50} color="red" />;
//   }

//   return (
//     <>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         photo={true}
//         isActive={true}
//         ref={cameraRef}
//       />

//       <View style={styles.shutterContainer}>
//         <TouchableOpacity
//           style={styles.cameraFlashBtn}
//           onPress={() => {
//             setFlashToggle(!flashToggle);
//             setTorch(torch === 'off' ? 'on' : 'off');
//           }}
//         >
//           <Text style={styles.btnText}>Camera Page</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   shutterContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   cameraFlashBtn: {
//     margin: 20,
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default CameraScreen;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { View, TouchableOpacity, Image, ActivityIndicator, StyleSheet, Linking, Text } from 'react-native';
// import { Camera, useCameraDevices, CameraDevice } from 'react-native-vision-camera';

// const CameraScreen = () => {
//   const [loading, setLoading] = useState(false);
//   const [flashToggle, setFlashToggle] = useState(false);
//   const [camView, setCamView] = useState<'back' | 'front'>('back');
//   const [torch, setTorch] = useState<'off' | 'on'>('off');
//   const cameraRef = useRef<Camera>(null);
//   const devices = useCameraDevices();
//   const device: CameraDevice | undefined = camView === 'back' ? devices.back : devices.front;

//   const cameraPermission = useCallback(async () => {
//     const permission = await Camera.requestCameraPermission();
//     if (permission === 'denied') {
//       await Linking.openSettings();
//     }
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     console.log(devices);
//     setLoading(true);
//     cameraPermission();
//   }, [cameraPermission]);

//   const takePhoto = async () => {
//     setLoading(true);
//     try {
//       if (cameraRef.current == null) {
//         throw new Error('Camera ref is null');
//       }

//       console.log("Picture taking...");
//       const photo = await cameraRef.current.takePhoto({
//         qualityPrioritization: 'quality',
//         flash: torch,
//         enableAutoRedEyeReduction: true,
//       });
//       console.log(photo);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (device == null) {
//     return <ActivityIndicator style={{ flex: 1 }} size={50} color={'red'} />;
//   }

//   return (
//     <>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         photo={true}
//         isActive={true}
//         ref={cameraRef}
//       />

//       <View style={styles.shutterContainer}>
//         <TouchableOpacity
//           style={styles.cameraFlashBtn}
//           onPress={() => {
//             setFlashToggle(!flashToggle);
//             setTorch(torch === 'off' ? 'on' : 'off');
//           }}
//         >
//            <Text style={styles.btnText}>Camera Page</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   shutterContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   cameraFlashBtn: {
//     margin: 20,
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default CameraScreen;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { View, TouchableOpacity, Image, ActivityIndicator, StyleSheet, Linking, Text, Platform } from 'react-native';
// import { Camera, useCameraDevices, CameraDevice } from 'react-native-vision-camera';

// const CameraScreen = () => {
//   const [loading, setLoading] = useState(false);
//   const [flashToggle, setFlashToggle] = useState(false);
//   const [camView, setCamView] = useState<'back' | 'front'>('back');
//   const [torch, setTorch] = useState<'off' | 'on'>('off');
//   const cameraRef = useRef<Camera>(null);
//   const devices = useCameraDevices();
//   const device: CameraDevice | undefined = camView === 'back' ? devices.back : devices.front;

//   const cameraPermission = useCallback(async () => {
//     const permission = await Camera.requestCameraPermission();
//     if (permission === 'denied') {
//       await Linking.openSettings();
//     }
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     console.log('Devices:', devices);
//     setLoading(true);
//     cameraPermission();
//   }, [cameraPermission, devices]);

//   const takePhoto = async () => {
//     setLoading(true);
//     try {
//       if (cameraRef.current == null) {
//         throw new Error('Camera ref is null');
//       }

//       console.log("Picture taking...");
//       const photo = await cameraRef.current.takePhoto({
//         qualityPrioritization: 'quality',
//         flash: torch,
//         enableAutoRedEyeReduction: true,
//       });
//       console.log(photo);
//     } catch (error) {
//       console.log('Error taking photo:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (device == null) {
//     return <ActivityIndicator style={{ flex: 1 }} size={50} color={'red'} />;
//   }

//   return (
//     <>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         photo={true}
//         isActive={true}
//         ref={cameraRef}
//       />

//       <View style={styles.shutterContainer}>
//         <TouchableOpacity
//           style={styles.cameraFlashBtn}
//           onPress={() => {
//             setFlashToggle(!flashToggle);
//             setTorch(torch === 'off' ? 'on' : 'off');
//           }}
//         >
//            <Text style={styles.btnText}>Camera Page</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   shutterContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   cameraFlashBtn: {
//     margin: 20,
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });

// export default CameraScreen;

// import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import {Camera, useCameraDevices} from 'react-native-vision-camera';



// const CameraScreen = () => {
//   const devices = useCameraDevices();
//   const device = devices.back;
//   const camera = useRef(null);
//   const [imageData, setImageData] = useState('');
//   const [PhotoClicked, setPhotoClicked] = useState(false);


//   useEffect(() =>{
//     checkPermission().catch(console.error);

//   },[]);
//   const checkPermission = async () =>{    
//     const newCamerapermission = await Camera.requestCameraPermission();
//     const newMicrophonePermsion = await Camera.requestMicrophonePermission();    
//     console.log(newCamerapermission);
//   };

//   if(device==null) return <ActivityIndicator/>;

//   const takePicture= async()=>{
//     if(camera != null){
//       const photo = await camera.current.takePhoto();
//       setImageData(photo.path);
//       console.log(photo.path);  
//     }    
//   };
//   return (
//     <View style={{flex:1}}>
//       {PhotoClicked ?( <View style={{flex:1}}>
//         <Camera
//         ref={camera}
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//         photo
//         />
//         <TouchableOpacity style={styles.camBtn}>

//         </TouchableOpacity>
//       </View>):(
//         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//           <TouchableOpacity 
//             style={{width:90, height:50, borderWidth: 1, borderRadius:10, alignItems: 'center', alignSelf:'center', justifyContent:'center'}}
//             onPress={()=>{
//               setPhotoClicked(true);
//             }}
//           >
//             <Text>Click Photo</Text>
//           </TouchableOpacity>

//         </View>
//       )}
      
      
      
//     </View>
//   )
// }

// export default CameraScreen;

// const styles = StyleSheet.create({
//   camBtn: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#000000',
//     position: 'absolute',
//     bottom: 50,
//     alignSelf: 'center',

//   },
// });


// import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import { Camera, useCameraDevices, PhotoFile } from 'react-native-vision-camera';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const CameraScreen = () => {
//   const devices = useCameraDevices();
//   const device = devices?.back;
//   const camera = useRef<Camera>(null);
//   const [imageData, setImageData] = useState<string>('');
//   const [photoClicked, setPhotoClicked] = useState(false);

//   useEffect(() => {
//     checkPermission().catch(console.error);
//   }, []);

//   const checkPermission = async () => {
//     const newCameraPermission = await Camera.requestCameraPermission();
//     const newMicrophonePermission = await Camera.requestMicrophonePermission();
//     console.log(newCameraPermission, newMicrophonePermission);
//   };

//   if (device == null) return <ActivityIndicator />;

//   const takePicture = async () => {
//     if (camera.current != null) {
//       const photo: PhotoFile = await camera.current.takePhoto();
//       setImageData(photo.path);
//       setPhotoClicked(false);
//       console.log(photo.path);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {photoClicked ? (
//         <View style={{ flex: 1 }}>
//           <Camera
//             ref={camera}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true}
//           />
//           <TouchableOpacity style={styles.camBtn} onPress={takePicture}>
//             <Text style={styles.btnText}>Capture</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <TouchableOpacity
//             style={{ width: 90, height: 50, borderWidth: 1, borderRadius: 10, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
//             onPress={() => {
//               setPhotoClicked(true);
//             }}
//           >
//             <Text>Click Photo</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// export default CameraScreen;

// const styles = StyleSheet.create({
//   camBtn: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#000000',
//     position: 'absolute',
//     bottom: 50,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnText: {
//     color: 'white',
//   },
// });
