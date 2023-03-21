import React  from "react";
import {Text, Dimensions,TouchableOpacity,View,Image, SafeAreaView, ScrollView} from "react-native"

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
  <ScrollView style={{backgroundColor:"rgb(255, 204, 0)"}}>
    < View style={{alignItems:"center"}}>
    <Text style={{fontSize:50,marginTop:50}}>SpotAPark</Text>
      <Image source={require('../../assets/remove.jpg')}
        style={{ height: Dheight/2.2, width:Dwidth,backgroundColor:"rgb(255, 204, 0)",paddingTop:0 }}
        ></Image>
        </View>
    <View style={{height:Dheight,width:Dwidth,borderRadius:10,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0, backgroundColor:"rgb(255, 204, 0)"}}>
                  
           <Text style={{marginLeft:50,fontSize:20,marginTop:20,color:"black"}}>No more circling the block, just SpotAPark.</Text>
           {/* <Text style={{marginLeft:50,fontSize:22,marginTop:0,color:"black"}}>                 SpotAPark</Text> */}
           <Text style={{marginLeft:50,fontSize:20,marginTop:12,color:"black"}}>Live Updates of each Parking Spot is provided in a Single Click.</Text>
           <Text style={{marginLeft:50,fontSize:20,marginTop:12,color:"black"}}>Your Parking Solution is just a Tap Away!</Text>
           <View style={{flex:0,alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"black",height:60,width:300,borderRadius:30,borderColor:"paleturquoise",alignItems:"center",marginTop:45}}>
            <Text style={{fontSize:29,marginTop:7,color:"white"}}
             onPress={() => {
              navigation.navigate('Login') }}
            >Lets, Go</Text>
          </TouchableOpacity>
            </View>        
           </View>
    
  </ScrollView>

)}
export default OnBoard