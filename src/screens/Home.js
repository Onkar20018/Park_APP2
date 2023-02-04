import { SafeAreaView, Text, View,Dimensions,Image,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from '@expo/vector-icons/EvilIcons'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
const Dheight =  Dimensions.get("window").height;
const Dwidth =  Dimensions.get("window").width;
const Home = () => {
  
  const [data, setdata] = useState([])
  const [name, setname] = useState([])
  var free =0
  var R1=[]
  var R2=[]
  var R3=[]
  var R4=[]
  var R5=[]
  var R6=[]
  useEffect(() => {
    axios.get('http://localhost:8000/home').then((res) => {
      if (res.data!=null) {
        setdata(res.data)
      }  
    // axios.get('http://localhost:8000/name').then((res)=>{
    //         setname(res.data)
    // }).catch((err)=>{
    //   console.log("Error in Axios(UserData):",err);
    // })  
     
      //  console.log(res.data[i]);
      // console.log(res.data);
      // console.log(res);
    }).catch((err)=>{
      console.log("Error in Axios(CarData):",err);
    })

  }, [data]);
      

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'paleturquoise' }}>
      <View style={{backgroundColor:'paleturquoise'}} >
        <View style={{flexDirection:"row",borderBottomColor:'black',borderBottomWidth:20,borderBottomRadius:35,backgroundColor:'darkolivegreen'}}>
      <Image source={require('../../assets/remove.jpg')}
        style={{marginLeft:30, marginTop:5,height: 120, width:120,transform:[{rotate:'360deg'}] }}
        ></Image>
         <Text style={{fontSize:60,  color:"paleturquoise" ,marginLeft:270,marginTop:45}}>
            ParkApp
         </Text>       
        </View>
         <View>
           {
             Object.entries((data)).map((x)=>{
               if (x[1]==true) {
                 free=free+1;
                 if (x[0]>=0 && x[0]<=11) {  // R1
                    R1.push(x[0])
               }
                 if (x[0]>=12 && x[0]<=23) {  // R2
                    R2.push(x[0])
               }
                 if (x[0]>=24 && x[0]<=34) {  // R3
                    R3.push(x[0])
               }
                 if (x[0]>=35 && x[0]<=45) {  // R4
                    R4.push(x[0])
               }
                 if (x[0]>=46 && x[0]<=57) {  // R5
                    R5.push(x[0])
               }
                 if (x[0]>=58 && x[0]<=68) {  // R6
                    R6.push(x[0])
               }
                    
                }
             } 
             )

           }
           
           <View style={{flexDirection:'row',marginTop:10}}>

        <MaterialIcons  name="apartment" size={30} color='black' style={{marginLeft:10}} />
           <Text style={{fontSize:28,marginLeft:5}}>Nakshatra Mall </Text>
           </View>
           
           <View style={{flex:0}}>
           <View style={{flexDirection:'row',marginTop:10,}}>
        <MaterialIcons  name="room" size={35} color='black' style={{marginLeft:8}} />
           {/* <LocationOnIcon/> */}
           <Text style={{fontSize:15,marginLeft:5}}>385, N C. Kelkar Marg, Dadar West, </Text>
           </View>
           <Text style={{fontSize:15,marginLeft:48,marginTop:-15}}>Mumbai, Maharashtra 400028 </Text>
           </View>
           <View style={{flexDirection:'row',marginTop:60,}}>
           <MaterialIcons  name="today" size={28} color='black' style={{marginLeft:12}} />
           <Text style={{fontSize:20,marginLeft:10}}>MON - SUN</Text>
           </View>
           <View style={{flexDirection:'row',marginTop:10,}}>
        <MaterialIcons  name="schedule" size={28} color='black' style={{marginLeft:12,marginTop:2}} />
           <Text style={{fontSize:20,marginLeft:10,marginTop:1}}>06:00 AM - 11:00 PM</Text>
           </View >
           <View style={{borderBottomWidth:5}}>

           </View>
           <View style={{flexDirection:'row',marginTop:10,paddingBottom:10,borderTopLeftRadius:35,borderTopRightRadius:35,paddingHorizontal:20,borderTopWidth:5,borderLeftWidth:5,borderRightWidth:5,borderBottomWidth:5,alignSelf:'center',backgroundColor:'black'}}>
           {/* <MaterialIcons  name="directions" size={60} color='black' style={{marginLeft:10}} /> */}
           <Text style={{fontSize:35,marginLeft:5,marginTop:1,color:"paleturquoise"}}>Parking Availability:[{free}/69] </Text>
           </View>
           
         </View>
  
        <View style={{height:Dheight,width: '100%',borderTopWidth:40 , flexWrap: "wrap", alignSelf: "center",paddingTop:40,paddingBottom:40,borderBottomWidth:40,marginTop:-51,borderRadius:35,backgroundColor:'darkolivegreen'}}>         
        {
          Object.entries((data)).map((x) => {
             
            if (x[0] == 32 || x[0] == 43 || x[0] == 58) {
              if (x[1] == false) {
                return (<>
                  <View style={{ height:Dheight/16,  margin:6, alignItems:"center",borderWidth:2,width:80,marginLeft:20   }}  >
        <MaterialIcons  name="cancel" size={60} color='black' style={{marginTop:4}} />
                   
                  </View>
                  <View style={{ height:Dheight/16,  margin:6,marginLeft:20, alignItems:"center",width:80 ,borderWidth:2,backgroundColor:'708090' }} key={x[0]}>
                   <Image source={require('../../assets/CARR.jpg')}
        style={{ height: 80,  width: 50,borderColor:'black',borderWidth:2,marginTop:-5,transform:[{rotate:'90deg'}]}}
        ></Image>
         <Text style={{backgroundColor:'black', color:"white",marginTop:-71 ,marginLeft:94}}>{x[0]}</Text>
                </View>
                </>
                )
              } else {
                return (<>
                   <View style={{ height:Dheight/16,  margin:6, alignItems:"center",borderWidth:2,width:80,marginLeft:20   }}  >
        <MaterialIcons  name="cancel" size={60} color='black' style={{marginTop:4}} />
                   
                  </View>
                  <View style={{height:Dheight/16, margin:6, alignItems:"center",width:60 ,marginLeft:20  }} >
                  <Image source={require('../../assets/park.jpg') }
        style={{ height: 88, width: 60,marginLeft:30,transform:[{rotate:'90deg'}],borderWidth:2 }}
        ></Image>
         <Text style={{color:'white',fontFamily:'800',marginTop:-74,marginLeft:134,backgroundColor:"black"}}>{x[0]}</Text>
                  </View>
                </>
                )
              }
            }
            if (x[1] == true) {
              return (
                <View style={{height:Dheight/16, margin:6, alignItems:"center",width:60 ,marginLeft:20  }} >
                  <Image source={require('../../assets/park.jpg') }
        style={{ height: 88, width: 60,marginLeft:30,transform:[{rotate:'90deg'}],borderWidth:2 }}
        ></Image>
         <Text style={{color:'white',fontFamily:'800',marginTop:-74,marginLeft:134,backgroundColor:"black"}}>{x[0]}</Text>
                  </View>

)
} else {
  return (
    <View style={{ height:Dheight/16,  margin:6,marginLeft:20, alignItems:"center",width:80 ,borderWidth:2,backgroundColor:'708090' }} key={x[0]}>
                   <Image source={require('../../assets/CARR.jpg')}
        style={{ height: 80,  width: 50,borderColor:'black',borderWidth:2,marginTop:-5,transform:[{rotate:'90deg'}]}}
        ></Image>
         <Text style={{backgroundColor:'black', color:"white",marginTop:-71 ,marginLeft:94}}>{x[0]}</Text>
                </View>

)
}
})

}

</View>
      </View>
    </SafeAreaView>
  )
}

export default Home