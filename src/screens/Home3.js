import { SafeAreaView, Text, View,Dimensions,Image,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


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
    axios.get('http://1071-2409-4040-d0c-6e78-9126-61e2-307d-b138.in.ngrok.io/home3').then((res) => {
      if (res.data!=null) {
        setdata(res.data)

      }  
    }).catch((err)=>{
      console.log("Error in Axios(CarData):",err.response.data);
    })

  }, [data]);
      

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'paleturquoise' }}>
        <View style={{flexDirection:"row",borderBottomColor:'white',borderBottomWidth:0,backgroundColor:'rgb(255, 204, 0)',justifyContent:'center',}}>
      {/* <Image source={require('../../assets/remove.jpg')}
        style={{marginLeft:20, height: 30, width:50,transform:[{rotate:'360deg'}] }}
        ></Image> */}
         <Text style={{fontSize:50,  color:"black" ,marginTop:50, marginBottom: 10}}>
            ParkASpot
         </Text>       
        </View>
      <ScrollView style={{backgroundColor:'rgb(255, 204, 0)'}} >
         <View style={{flexDirection:'column',marginTop:10, 
         backgroundColor:'#eeeeee', paddingLeft:10, paddingRight:10, marginLeft:10, marginRight:10, borderRadius:10 }}>
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
           
           <View style={{flexDirection:'row',marginTop:10, }}>

        <MaterialIcons  name="apartment" size={20} color='rgb(255, 204, 0)' style={{marginLeft:10}} />
           <Text style={{fontSize:20,marginLeft:5}}>The Indian Cafe </Text>
           </View>
           
           <View style={{flex:0}}>
           <View style={{flexDirection:'row',marginTop:10,}}>
        <MaterialIcons  name="room" size={25} color='rgb(255, 204, 0)' style={{marginLeft:8}} />
           {/* <LocationOnIcon/> */}
           <Text style={{fontSize:15,marginLeft:5}}> 303, Mumbai-Pune HighWay, Lonavala </Text>
           </View>
           <Text style={{fontSize:15,marginLeft:38,marginTop:-5}}> Maharashtra, 410301 </Text>
           </View>
           <View style={{flexDirection:'row',marginTop:10,}}>
           <MaterialIcons  name="today" size={20} color='rgb(255, 204, 0)' style={{marginLeft:12}} />
           <Text style={{fontSize:15,marginLeft:10}}>MON - SUN</Text>
           </View>
           <View style={{flexDirection:'row',marginTop:10,}}>
        <MaterialIcons  name="schedule" size={20} color='rgb(255, 204, 0)' style={{marginLeft:12,marginTop:2}} />
           <Text style={{fontSize:15,marginLeft:10,marginTop:1, marginBottom:10}}>04:00 AM - 01:00 AM</Text>
           </View >
           <View style={{borderWidth:0,marginTop:2}}></View>
           {/* <View style={{flexDirection:'row',marginTop:2,alignSelf:'center'}}>
           <MaterialIcons  name="directions" size={30} color='rgb(255, 204, 0)' style={{marginLeft:10}} />        
           <Text style={{fontSize:25,marginLeft:5,marginTop:1}}>Parking Availability:[{free}/69] </Text>
           </View> */}
         </View>
         <View style={{flexDirection:'column',marginTop:10, backgroundColor:'#eeeeee' }}>
           {
            //  Object.entries((data)).map((x)=>{
            //    if (x[1]==true) {
            //      free=free+1;
            //      if (x[0]>=0 && x[0]<=11) {  // R1
            //         R1.push(x[0])
            //    }
            //      if (x[0]>=12 && x[0]<=23) {  // R2
            //         R2.push(x[0])
            //    }
            //      if (x[0]>=24 && x[0]<=34) {  // R3
            //         R3.push(x[0])
            //    }
            //      if (x[0]>=35 && x[0]<=45) {  // R4
            //         R4.push(x[0])
            //    }
            //      if (x[0]>=46 && x[0]<=57) {  // R5
            //         R5.push(x[0])
            //    }
            //      if (x[0]>=58 && x[0]<=68) {  // R6
            //         R6.push(x[0])
            //    }
                    
            //     }
            //  } 
            //  )

           }
           
           <View style={{flexDirection:'row',marginTop:2,alignSelf:'center',backgroundColor:'#eeeeee'}}>
           <MaterialIcons  name="directions" size={30} color='rgb(255, 204, 0)' style={{marginLeft:10}} />        
           <Text style={{fontSize:25,marginLeft:5,marginTop:1}}>Parking Availability:[{free}/14] </Text>
           </View>
         </View>
        {/*////////////////////////////////////////////////////////////////////////*/}
        <View style={{height:Dheight,width: '100%',borderTopWidth:0,borderBottomWidth:0, flexWrap: "wrap", alignSelf: "center",paddingTop:20,marginTop:1,backgroundColor:'rgb(255, 204, 0)'}}>         
        {
          Object.entries((data)).map((x) => {
  return (
    <View key={x[0]}>

    <View    style={{height:Dheight/9,width:Dwidth/6,margin:6,marginHorizontal:23, alignItems:"center" ,borderWidth:0,backgroundColor:'#eeeeee', borderRadius: 10, shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,}} >
                 <Image source={require('../../assets/CARR.jpg')}
        style={{ height: 65,width:26,transform:[{rotate:'90deg'}],marginTop:-3,borderBottomWidth:1}}></Image> 
         <Text  style={{fontSize:16 , color:'black',marginRight:40,marginTop:-5}}>{x[0]}</Text>
                </View>
      </View>

)

}
)

}

</View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home