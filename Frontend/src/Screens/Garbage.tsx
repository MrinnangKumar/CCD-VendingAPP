// interface MyProps{
//   navigation: StackNavigationProp<RootNavigationProps,'Home'>;

// }
// type Notes = {
//     title: string;
//     description: string;
//     _id: string;
// };


// const Home = ({navigation}:MyProps) => {
  
// //   //! -------------------------------------------------Chat Gpt Navigator process ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   const [data, setData] = useState([
//     { id: '1',MachineNo: '100', customer_name: 'MK',  remark: 'Remark 1'  },
//     { id: '2',MachineNo: '101', customer_name: 'Paramjeet Singh', remark: 'Remark 2' },
//     { id: '3',MachineNo: '102', customer_name: 'Veer', remark: 'Remark 3' },
//   ]);

//   const [id, setNewId] = useState('');
//   const [MachineNo, setNewMachineNo] = useState('');
//   const [CustomerName, setNewCustomerName] = useState('');
//   const [Remark, setNewRemark] = useState('');

//   //* bad Components setting
//   const [badId, setBadId] = useState<boolean>(false);
//   const [badMachineNo, setbadMachineNo] =useState<boolean>(false);
//   const [badCustomerName, setbadCustomerName] = useState<boolean>(false);
//   const [badRemark, setbadRemark] = useState<boolean>(false);

//   const addData = () => {
//     if (id && MachineNo && CustomerName && Remark) {
//       setData([...data, { id: id, MachineNo: MachineNo, customer_name: CustomerName, remark: Remark }]);
//       setNewId('');
//       setNewMachineNo('');
//       setNewCustomerName('');
//       setNewRemark('');
//     }
//   };

// //   //! ***************************************************** GPT CODE ENDS*************************************************************************************


// //   const [notes, setNotes] = useState<Notes[]>([]);
// //   const route=useRoute();
// //   const isFocused=useIsFocused();
// //   const [loading, setLoading] = useState<boolean>(false)
// //   useEffect(()=>{
// //     getNotes();
// //   },[isFocused])

// //   const getNotes = async()=>{
// //     try {

// //       console.log('Starting login Process.....')
// //       const headers = new Headers();
// //       console.log(route.params.id);
      
// //       headers.append('Content-Type', 'application/json');
     
      
// //       console.log('Sending fetch request....');
      
// //       const res = await fetch('http://10.0.2.2:8000/api/notes/getNotes/'+ route.params.id, {
// //         headers: headers,
// //         method: 'GET',
        
// //       });
      
// //       console.log('received response from fetch...');
      
// //       // if (!res.ok) {
// //       //   throw new Error(`HTTP error! status: ${res.status}`);
// //       // }
      
// //       const data = await res.json();   
// //       setNotes(data);   
// //       console.log('Login Data Successful',data);
      
// //     } catch (error) {
// //       console.error('There was a problem with the fetch operation:', error);
// //     }
// //   }
// //   const deleteNote=async(id:string)=>{
// //     try {
// //       setLoading(true);
// //       console.log('Starting Deleting Process.....')
// //       const headers = new Headers();     
// //       headers.append('Content-Type', 'application/json');
      
// //       const res = await fetch('http://10.0.2.2:8000/api/notes/deleteNote/'+id, {
// //         headers: headers,
// //         method: 'DELETE',        
// //       });

// //       const data = await res.json();   
// //       setLoading(false);
// //       getNotes();   
      
      
// //     } catch (error) {
// //       console.error('There was a problem with the fetch operation:', error);
// //     }
// //   }
//   // ! --------------------------------------------------------------GPT CODE STARTS------------------------------------------------------------------------------
//   const validate = () => {
//     let valid = true;
//     if (id == '') {
//       setBadId(true);
//       valid = false;
//     } else if (id != '') {
//       setBadId(false);
//     }
//     if (MachineNo == '') {
//       setbadMachineNo(true);
//       valid = false;
//     } else if (MachineNo != '') {
//       setbadMachineNo(false);
//     }
//     if (CustomerName == '') {
//       setbadCustomerName(true);
//       valid = false;
//     } else if (CustomerName != '') {
//       setbadCustomerName(false);
//     }
//     if (Remark == '') {
//       setbadRemark(true);
//       valid = false;
//     } else if (Remark != '') {
//       setbadRemark(false);
//     }
//     return valid;
//   };

//   const addempdetails = async () => {
//     try {
//       setLoading(true);
//       console.log('Data Is Being Entered.....');
//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
//       const body = {
//         id: id,
//         Machine_No: MachineNo,
//         customer_Name: CustomerName,
//         Remark: Remark,
//       };

//       console.log('Sending fetch request....');

//       const res = await fetch('http://10.0.2.2:8000/api/notes/addempdetails', {
//         headers: headers,
//         method: 'POST',
//         body: JSON.stringify(body),
//       });

//       console.log('received response from fetch...');

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       const data = await res.json(); 
//       setLoading(false);
//       setNotes(data);   
//       console.log('Login Data Successful',data);
      
//       // navigation.goBack();
//       // navigation.navigate('Home', {id: data._id});
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };
  // ! --------------------------------------------------------------GPT CODE ENDS------------------------------------------------------------------------------
// //   return (
    
//     <View style={styles.container}>
//       {/* <StatusBar backgroundColor={'white'} barStyle={'dark content'}></StatusBar>
//       <View style={styles.header}>
//         <Text style={styles.title}>Fullstack Notes Application</Text>
//       </View> 
//       {notes.length>0 ?(
//         <FlatList data={notes} renderItem={({item, index}:{item:Notes, index:number})=>{
//           return(
//             <View style={styles.notesItem}>
//               <View>
//                 <Text style={styles.noteText}>{item.title}</Text>
//                 <Text style={styles.noteText}>{item.description}</Text>
//               </View>
//               <View>
//                 <Text style={[styles.noteText, {color:'blue'}]}
//                 onPress={()=>{

//                   navigation.navigate("AddNotes",{id: route.params.id, type:'EDIT',data:item,});
//                 }}
//                 >{'Edit'}</Text>
//                 <Text style={[styles.noteText, {color:'red', marginTop:7}]} onPress={()=>{
//                   deleteNote(item._id)
//                 }}>{'Delete'}</Text>
//               </View>
              
//             </View>
//           )
//         }}/>
//       ):(<View style={styles.noDataView}>
//           <Text style={styles.title}>No Notes Found</Text>
//         </View>
//       )}   
//       <TouchableOpacity style={styles.btn} onPress={() =>{
//         navigation.navigate("AddNotes",{id: route.params.id, type:'NEW'});
//       }}>
//         <Text style={styles.btnText}>Add New Note</Text>
//       </TouchableOpacity>
//       <Loader visible={loading}></Loader> */}

// // export default Home;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'white',
//   },
//   // header:{
//   //   width:'100%',
//   //   height: 60,
//   //   backgroundColor:'white',
//   //   elevation: 5,
//   //   justifyContent: 'center',

//   // },
//   title:{
//     color: 'black',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   btn:{
//     width: 200,
//     height: 50,
//     borderRadius: 30,
//     position:'absolute',
//     right:20,
//     bottom: 20,
//     backgroundColor: '#000',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   btnText:{
//     color:'white',
//     fontWeight:'600',
//     fontSize:16,
    
//   },
//   notesItem:{
//         width: '90%',
//         height: 80,
//         borderWidth: 1,
//         borderRadius: 10,
//         alignSelf: 'center',
//         marginTop: 10,
//         padding: 20,
//         flexDirection: 'row',
//         justifyContent:'space-between',
//   },
//   noDataView:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   noteText:{
//     color:'#000',
//     fontWeight:'700',
//     margin:2,
//   },
//   //! ---------------GPT Navigator Project Start-----------------------------------------------
//   header: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f1f1',
//     padding: 8,
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   fieldText:{
//     flex: 1,
//     textAlign: 'center',
//     // justifyContent: 'space-between',
//     paddingRight: 0,
//     color: '#80B9AD',
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//     justifyContent: 'space-between',
//     color: '#26355D',
//   },
//   form: {
//     marginTop: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });


//   };
// //   //! ---------------GPT Navigator Project End-----------------------------------------------


// // })


// //!--------------------------------------------------------- GPT CODE STARTS ------------------------------------------------------------------------------

// screens/HomeScreen.tsx
// HomeScreen.js


// const HomeScreen = ({ navigation }) => {
//     const [data, setData] = useState([
//     { id: '1',MachineNo: '100', customer_name: 'MK',  remark: 'Remark 1'  },
//     { id: '2',MachineNo: '101', customer_name: 'Paramjeet Singh', remark: 'Remark 2' },
//     { id: '3',MachineNo: '102', customer_name: 'Veer', remark: 'Remark 3' },
//   ]);

//   const [id, setNewId] = useState('');
//   const [machineNo, setNewMachineNo] = useState('');
//   const [customerName, setNewCustomerName] = useState('');
//   const [remark, setNewRemark] = useState('');

//   //* bad Components setting
//   const [badId, setBadId] = useState<boolean>(false);
//   const [badMachineNo, setbadMachineNo] =useState<boolean>(false);
//   const [badCustomerName, setbadCustomerName] = useState<boolean>(false);
//   const [badRemark, setbadRemark] = useState<boolean>(false);
//   const validate = () => {
//     let valid = true;
//     if (id == '') {
//       setBadId(true);
//       valid = false;
//     } else if (id != '') {
//       setBadId(false);
//     }
//     if (machineNo == '') {
//       setbadMachineNo(true);
//       valid = false;
//     } else if (machineNo != '') {
//       setbadMachineNo(false);
//     }
//     if (customerName == '') {
//       setbadCustomerName(true);
//       valid = false;
//     } else if (customerName != '') {
//       setbadCustomerName(false);
//     }
//     if (remark == '') {
//       setbadRemark(true);
//       valid = false;
//     } else if (remark != '') {
//       setbadRemark(false);
//     }
//     return valid;
//   };
//   const addempdetails = async() => {
//     // if (id && machineNo && customerName && remark) {
//     //   setData([...data, { id: id, MachineNo: machineNo, customer_name: customerName, remark: remark }]);
//     //   setNewId('');
//     //   setNewMachineNo('');
//     //   setNewCustomerName('');
//     //   setNewRemark('');
//     // }
//     //!-------------API GENERATION CODE-------------------------
//     try {
//       // setLoading(true);
//       console.log('Data Is Being Entered.....');
//       const headers = new Headers();
//       headers.append('Content-Type', 'application/json');
//       const body = {
//         id: id,
//         machineNo: machineNo,
//         customerName: customerName,
//         remark: remark,
//       };

//       console.log('Sending fetch request....');

//       const res = await fetch('http://10.0.2.2:8000/api/notes//addempdetails', {
//         headers: headers,
//         method: 'POST',
//         body: JSON.stringify(body),
//       });

//       console.log('received response from fetch...');

//       // if (!res.ok) {
//       //   throw new Error(`HTTP error! status: ${res.status}`);
//       // }

//       const data = await res.json();
//       // setLoading(false);
//       setData(data);   
//       console.log('Login Data Successful',data);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//     }
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.row}>
//               <TouchableOpacity onPress={() => navigation.navigate('AddNotes', { id: item.id })}>
//                 <Text style={styles.cell}>{item.id}</Text>
//               </TouchableOpacity>
//               <Text style={styles.cell}>{item.MachineNo}</Text>
//               <Text style={styles.cell}>{item.customer_name}</Text>
//               <Text style={styles.cell}>{item.remark}</Text>
//             </View>
//           )}
//           ListHeaderComponent={() => (
//             <View style={styles.header}>
//               <Text style={styles.cell}>ID</Text>
//               <Text style={styles.cell}>MachineNo</Text>
//               <Text style={styles.cell}>Customer Name</Text>
//               <Text style={styles.cell}>Remark</Text>
//             </View>
//           )}
//         />
  
//         <View style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder="ID"
//             value={id}
//             onChangeText={setNewId}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Machine Number"
//             value={machineNo}
//             onChangeText={setNewMachineNo}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Customer Name"
//             value={customerName}
//             onChangeText={setNewCustomerName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Remark"
//             value={remark}
//             onChangeText={setNewRemark}
//           />
//           <TouchableOpacity style={styles.button} onPress={() => {
//             if (validate()) {
//               addempdetails();
//             }
//           }}>
//             <Text style={styles.buttonText}>Add</Text>
//           </TouchableOpacity>
//           {/* GPT CODE */}
//           {/* <TouchableOpacity style={styles.button} onPress={()=>{
//             if(validate()){
//               addempdetails();
//             }
//           }}>
//             <Text style={styles.buttonText}>Add</Text>
//           </TouchableOpacity> */}
          
//         </View>
  
//       </View>
//     );
//   };
//   // const addempdetails = async () => {
//   //   try {
//   //     // setLoading(true);
//   //     console.log('Data Is Being Entered.....');
//   //     const headers = new Headers();
//   //     headers.append('Content-Type', 'application/json');
//   //     const body = {
//   //       id: id,
//   //       machineNo: machineNo,
//   //       customerName: customerName,
//   //       remark: remark,
//   //     };

//   //     console.log('Sending fetch request....');

//   //     const res = await fetch('http://10.0.2.2:8000/api/notes//addempdetails', {
//   //       headers: headers,
//   //       method: 'POST',
//   //       body: JSON.stringify(body),
//   //     });

//   //     console.log('received response from fetch...');

//   //     if (!res.ok) {
//   //       throw new Error(`HTTP error! status: ${res.status}`);
//   //     }

//   //     const data = await res.json();
//   //     // setLoading(false);
//   //     // setNotes(data);   
//   //           console.log('Login Data Successful',data);
//   //   } catch (error) {
//   //     console.error('There was a problem with the fetch operation:', error);
//   //   }
//   // };
  


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f1f1',
//     padding: 8,
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   form: {
//     marginTop: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });




//! Before Touchability Home.tsx Code
{notes.length>0 ?(
  <FlatList data={notes} renderItem={({item, index}:{item:Notes, index:number})=>{
    return(
      <View style={styles.notesItem}>
        <View>
          <Text style={styles.noteText}>{item.id}</Text>
          <Text style={styles.noteText}>{item.Machine_No}</Text>
          <Text style={styles.noteText}>{item.customerName}</Text>
          <Text style={styles.noteText}>{item.remarks}</Text>
        </View>
        <View>
          {/* <Text style={[styles.noteText, {color:'blue'}]}
          onPress={()=>{

            navigation.navigate("AddNotes",{id: route.params.id, type:'EDIT',data:item,});
          }}
          >{'Edit'}</Text>
          <Text style={[styles.noteText, {color:'red', marginTop:7}]} onPress={()=>{
            deleteNote(item._id)
          }}>{'Delete'}</Text> */}
        </View>
        
      </View>
    )
  }}/>
):(<View style={styles.noDataView}>
    <Text style={styles.title}>No Data Found</Text>
  </View>
)}
