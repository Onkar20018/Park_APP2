import React, { useState } from "react";
import { SafeAreaView, Image,TouchableOpacity ,View,Text,Dimensions} from "react-native";

const Dheight =  Dimensions.get("window").height;
const Dwidth =  Dimensions.get("window").width;
const Selection =({navigation})=>{
    return(
       <>
        <View style={{flexDirection:"row",borderBottomColor:'black',borderBottomWidth:20,paddingBottom:12,backgroundColor:'darkolivegreen'}}>
      <Image source={require('../../assets/remove.jpg')}
        style={{marginLeft:15, marginTop:55,height: 70, width:70,transform:[{rotate:'360deg'}] }}
        ></Image>
         <Text style={{fontSize:50,  color:"black" ,marginLeft:25,marginTop:55}}>
            ParkApp
         </Text>       
        </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"paleturquoise"}}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={{height:70,width:240,backgroundColor:"darkolivegreen",margin:50,alignItems:"center",borderRadius:10}}><Text style={{fontSize:50}}>Dadar</Text></TouchableOpacity>
                <TouchableOpacity style={{height:70,width:240,backgroundColor:"darkolivegreen",margin:50,alignItems:"center",borderRadius:10}}><Text style={{fontSize:50}}>Andheri</Text></TouchableOpacity>
                <TouchableOpacity style={{height:70,width:240,backgroundColor:"darkolivegreen",margin:50,alignItems:"center",borderRadius:10}}><Text style={{fontSize:50}}>Lonavala</Text></TouchableOpacity>
            </View>
        
       </>
    )
}

export default Selection