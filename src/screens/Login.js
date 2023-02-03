import React, { useState } from "react";
import { TextInput, Dimensions,SafeAreaView, View, Text, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Dheight =  Dimensions.get("window").height;
const Dwidth =  Dimensions.get("window").width;
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  const SignIn = async (e) => {
    try {
      e.preventDefault();
      // console.log("INSide")
      var data = { email, password }
     
      const res = await fetch('http://localhost:8000/signIn', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resp = await res.json();
       // console.log(resp)
      if (res.status ===442 || !resp) {
        console.log("Error:",resp.message);
        Alert.alert("Invalid User Please Check Credentials Again",resp.message)
      } else {
        console.log("Welcome:",JSON.stringify(data.email));
        Alert.alert("Welcome ", JSON.stringify(data.email))
        navigation.navigate('Home')
      }


    } catch (error) {
      console.log("Error while Login ", error)
    }
  }
 

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'paleturquoise' }}>
     
     < View style={{alignItems:"center"}}>
      <Image source={require('../../assets/remove.jpg')}
        style={{ height: 350, width:350, marginBottom: 20 }}
        ></Image>
        </View>
      
      <Text style={{  fontSize:30, marginLeft: 20}}>Login System</Text>
      <View style={{margin:20}}>
      <Text style={{fontSize:20,marginBottom:6}}>UserName</Text>
      <View style={{ flexDirection: 'row', borderColor: 'black', borderWidth: 1, borderColor: 'black', marginBottom: 8 ,borderRadius:5}}> 
        <MaterialIcons name="email" size={25} style={{marginRight:10}} />
        <TextInput name="email" placeholder="Email ID" style={{ fontSize: 20,textAlign:"justify",flex:1,height:35 }}
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          />
      </View>
      <Text style={{fontSize:20,marginBottom:6}}>PassWord</Text>

      <View style={{ flexDirection: 'row', borderRadius:5,borderColor: 'black', borderWidth: 1, borderColor: 'black', marginBottom: 15 }}>
        <MaterialIcons  name="lock" size={25} color='black' style={{marginRight:10}} />
        <TextInput name="password" placeholder="PassWord" style={{ fontSize: 20,textAlign:"justify",flex:1 ,height:35}} secureTextEntry={true}
          value={password}
          onChange={(e) => { setPass(e.target.value) }}
        />
      </View>
          
      
      <TouchableOpacity onPress={SignIn} style={{ backgroundColor:"darkolivegreen",  marginBottom:12, borderRadius: 10,paddingVertical:8,marginTop:10}}>
        <Text style={{  textAlign:"center",color:"white",fontSize:28,color:'black'}} >Login</Text>
      </TouchableOpacity>
        </View>
      <View style={{ flexDirection: 'row',alignSelf:"center" }}>
        <Text style={{ fontSize: 25}}>New to Parko?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
          <Text style={{ fontSize: 25, color: 'darkolivegreen'}}> Register</Text>
        </TouchableOpacity>
      </View>
      

  
    
    </SafeAreaView>
    )
  }

export default Login