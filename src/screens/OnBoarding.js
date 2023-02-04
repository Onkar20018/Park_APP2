import React  from "react";
import {Text, Dimensions,TouchableOpacity,View,Image, SafeAreaView, Alert, ImageBackground} from "react-native"

const Dheight =  Dimensions.get("window").height;
const Dwidth =  Dimensions.get("window").width;
// const OnBoard =()=>{
//     return(
//         <SafeAreaView>
//            <SwipeButton 
//            disabeled={false}
//            swipeSuccessThreshold={70}
//            height={55}
//            width={330}
//            title="Swipe to Unlock"
//            onSwipeSuccess={()=>{
//             Alert.alert("Success")
//            }}
//            railBackgroundColor="red"
//            railBorderColor="black"
//            thumbIconBackgroundColor="green"
//            thumbIconBorderColor="black"
//            />
           
//         </SafeAreaView>
//     )
// }

// export default OnBoard;
const OnBoard =({navigation})=>{
    return(
  <SafeAreaView style={{backgroundColor:"paleturquoise"}}>
    < View style={{alignItems:"center",backgroundColor:"paleturquoise"}}>
      <Image source={require('../../assets/remove.jpg')}
        style={{ height: Dheight/2.2, width:Dwidth,backgroundColor:"paleturquoise",paddingTop:200 }}
        ></Image>
        </View>
    <View style={{height:Dheight,width:Dwidth,borderRadius:10,borderTopWidth:5,borderLeftWidth:5,borderRightWidth:5, backgroundColor:"paleturquoise"}}>
           <Text style={{marginLeft:35,fontSize:50,marginTop:100}}>Welcome,</Text>        
           <Text style={{marginLeft:50,fontSize:20,marginTop:20,color:"gray"}}>Leave the hectic task of finding parking spot to Us...</Text>
           <Text style={{marginLeft:50,fontSize:20,marginTop:12,color:"gray"}}>Live update of each parking spot is provided in a Single Click</Text>
           <View style={{flex:0,alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"darkolivegreen",height:60,width:300,borderRadius:30,borderColor:"paleturquoise",alignItems:"center",marginTop:65}}>
            <Text style={{fontSize:29,marginTop:7,color:"black"}}
             onPress={() => { navigation.navigate('Login') }}
            >Lets, Go</Text>
          </TouchableOpacity>
            </View>        
           </View>
    
  </SafeAreaView>

)}
export default OnBoard