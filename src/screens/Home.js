import { SafeAreaView, Text, View,Dimensions,Image,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Dheight =  Dimensions.get("window").height;
const Dwidth =  Dimensions.get("window").width;
const Home = () => {
  
  const [data, setdata] = useState([])
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
     
      //  console.log(res.data[i]);
      // console.log(res.data);
      // console.log(res);
    }).catch((err)=>{
      console.log("Error in Axios:",err);
    })
    //  console.log(data[0].i);

  }, [data]);
      

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{backgroundColor:'white'}} >
         <Text style={{paddingHorizontal:Dwidth,paddingVerical:50,fontSize:30,fontWeight:700, marginTop:25, color:"black", alignSelf:"center"  ,backgroundColor:'white'}}>
            ParkApp
         </Text>       
         <View >
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
           <Text style={{fontSize:28,fontWeight:500,margin:10}}>Nakshatra Mall </Text>
           <View style={{flex:0}}>

           <Text style={{fontSize:15}}>385, N C. Kelkar Marg, Dadar West, </Text>
           <Text style={{fontSize:15}}>Mumbai, Maharashtra 400028 </Text>
           </View>
           <Text style={{fontSize:20,marginLeft:20,marginTop:50}}>MON - SUN</Text>
           <Text style={{fontSize:20,marginLeft:20,marginTop:5}}>06:00 AM - 11:00 PM</Text>
           <Text style={{fontSize:28,marginLeft:20}}>Parking Availability {free}/69 </Text>
          
         </View>
  
        <View style={{height:Dheight,width: '100%',  flexWrap: "wrap", alignSelf: "center",marginTop:8,borderTopLeftRadius:35,borderTopRightRadius:35,backgroundColor:'#708090'}}>         
        {
          Object.entries((data)).map((x) => {
             
            if (x[0] == 32 || x[0] == 43 || x[0] == 58) {
              if (x[1] == false) {
                return (<>
                  <View style={{ height:Dheight/15,  margin:6, alignItems:"center",borderWidth:2,width:60   }}  >
        <MaterialIcons  name="cancel" size={40} color='black' style={{marginTop:4}} />
                   
                  </View>
                  <View style={{ height:Dheight/15,  margin:6, alignItems:"center",width:60,borderWidth:2,backgroundColor:"708090" }} key={x[0]}>
                   <Image source={require('../../assets/CARR.jpg')}
        style={{ height: 54, width: 27,borderColor:'black',borderWidth:2,margin:4,transform:[{rotate:'90deg'}]}}
        ></Image>
         <Text style={{backgroundColor:'black', color:"white",marginTop:-43,marginLeft:74}}>{x[0]}</Text>
                </View>
                </>
                )
              } else {
                return (<>
                   <View style={{ height:Dheight/15, margin:6 ,alignItems:"center",borderWidth:2,width:60   }}  >
        <MaterialIcons  name="cancel" size={40} color='black'  style={{marginTop:4}} />       
                  </View>
                  <View style={{height:Dheight/15, margin:6, alignItems:"center",width:60   }} >
                  <Image source={require('../../assets/park.jpg') }
        style={{ height: 58, width: 40,transform:[{rotate:'90deg'}],borderWidth:2 }}
        ></Image>
         <Text style={{color:'white',fontFamily:'800',marginTop:-48,marginLeft:74,backgroundColor:"black"}}>{x[0]}</Text>
                  </View>
                </>
                )
              }
            }
            if (x[1] == true) {
              return (
                <View style={{height:Dheight/15, margin:6, alignItems:"center",width:60   }} >
                  <Image source={require('../../assets/park.jpg') }
        style={{ height: 58, width: 40,transform:[{rotate:'90deg'}],borderWidth:2 }}
        ></Image>
         <Text style={{color:'white',fontFamily:'800',marginTop:-48,marginLeft:74,backgroundColor:"black"}}>{x[0]}</Text>
                  </View>

)
} else {
  return (
    <View style={{ height:Dheight/15,  margin:6, alignItems:"center",width:60 ,borderWidth:2,backgroundColor:'708090' }} key={x[0]}>
                   <Image source={require('../../assets/CARR.jpg')}
        style={{ height: 54, width: 27,borderColor:'black',borderWidth:2,margin:1,transform:[{rotate:'90deg'}]}}
        ></Image>
         <Text style={{backgroundColor:'black', color:"white",marginTop:-43,marginLeft:74}}>{x[0]}</Text>
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


