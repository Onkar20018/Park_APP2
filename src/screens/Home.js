import { SafeAreaView, Text, View,Dimensions,Image,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from '@expo/vector-icons/Ionicons';
const Dheight =  Dimensions.get("window").height;
const Dwidth =  Dimensions.get("window").width;
const Home = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/home').then((res) => {
      setdata(res.data)
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
      <View style={{backgroundColor:'lightcoral'}} >
         <Text style={{flex:0,fontSize:30,fontWeight:700, marginTop:25, alignSelf:"center"  ,backgroundColor:'green'}}>
            ParkApp
         </Text>
         
        <View style={{height:Dheight,width: '100%',  flexWrap: "wrap", alignSelf: "center",marginTop:Dheight/8,borderTopLeftRadius:35,borderTopRightRadius:35,backgroundColor:'#708090'}}>

       
        {
          Object.entries((data)).map((x) => {
            if (x[0] == 32 || x[0] == 43 || x[0] == 58) {
              if (x[1] == false) {
                return (<>
                  <View style={{ height:Dheight/15,  margin:6, alignItems:"center",borderWidth:2,width:60   }}  >
        <MaterialIcons  name="cancel" size={40} color='black'  />
                   
                  </View>
                  <View style={{ height:Dheight/15,  margin:6, alignItems:"center",width:60 ,borderWidth:2,backgroundColor:"red" }} key={x[0]}>
                   <Image source={require('../../assets/CARR.jpg')}
        style={{ height: 40, width: 25,borderColor:'black',borderWidth:2,margin:4,transform:[{rotate:'90deg'}]}}
        ></Image>
         <Text style={{backgroundColor:'black', color:"white",marginTop:-43,marginLeft:74}}>{x[0]}</Text>
                </View>
                </>
                )
              } else {
                return (<>
                   <View style={{ height:Dheight/15,  margin:6, alignItems:"center",borderWidth:2,width:60   }}  >
        <MaterialIcons  name="cancel" size={40} color='black'   />       
                  </View>
                  <View style={{height:Dheight/15, margin:6, alignItems:"center",width:60   }} >
                  <Image source={require('../../assets/park.png') }
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
                  <Image source={require('../../assets/park.png') }
        style={{ height: 58, width: 40,transform:[{rotate:'90deg'}],borderWidth:2 }}
        ></Image>
         <Text style={{color:'white',fontFamily:'800',marginTop:-48,marginLeft:74,backgroundColor:"black"}}>{x[0]}</Text>
                  </View>

)
} else {
  return (
    <View style={{ height:Dheight/15,  margin:6, alignItems:"center",width:60 ,borderWidth:2,backgroundColor:'red' }} key={x[0]}>
                   <Image source={require('../../assets/CARR.jpg')}
        style={{ height: 40, width: 25,borderColor:'black',borderWidth:2,margin:1,transform:[{rotate:'90deg'}]}}
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


