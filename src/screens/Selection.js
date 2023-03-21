import React, { useState } from "react";
import { SafeAreaView, Image,TouchableOpacity ,View,Text,Dimensions} from "react-native";

const Dheight =  Dimensions.get("window").height;
const Dwidth =  Dimensions.get("window").width;
const Selection =({navigation})=>{
    return(
       <>
        <View style={{ borderBottomColor:'black',borderBottomWidth:20,paddingBottom:12,backgroundColor:'rgb(255, 204, 0)'}}>
      {/* <Image source={require('../../assets/remove.jpg')}
        style={{marginLeft:15, marginTop:55,height: 70, width:70,transform:[{rotate:'360deg'}] }}
        ></Image> */}
         <Text style={{fontSize:58,color:"black" ,marginTop:58,alignSelf:'center'}}>
            ParkASpot
         </Text>       
        </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgb(255, 204, 0)"}}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home2') }} style={{height:70,width:240,backgroundColor:"black",margin:50,alignItems:"center",borderRadius:10}}><Text style={{fontSize:50,color:"white"}}>Dadar</Text></TouchableOpacity>
                <TouchableOpacity style={{height:70,width:240,backgroundColor:"black",margin:50,alignItems:"center",borderRadius:10}}><Text style={{fontSize:50,color:"white"}}>Andheri</Text></TouchableOpacity>
                <TouchableOpacity style={{height:70,width:240,backgroundColor:"black",margin:50,alignItems:"center",borderRadius:10}}><Text style={{fontSize:50,color:"white"}}>Lonavala</Text></TouchableOpacity>
            </View>
        
       </>
    )
}

export default Selection