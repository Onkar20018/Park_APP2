import React, { useState } from "react";
import { TextInput, Dimensions,SafeAreaView, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
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
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
      <View style={{paddingHorizontal:25}}>
      
     < View style={{alignItems:"center"}}>
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 250, width:250, marginBottom: 40 ,transform:[{rotate:'-10deg'}]}}
        ></Image>
        </View>
      
      <Text style={{  fontSize:28, marginBottom: 10,fontWeight:500 }}>Login System</Text>

      <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, borderColor: 'black', marginBottom: 15 }}> 
        <MaterialIcons name="email" size={20} style={{marginRight:7}} />
        <TextInput name="email" placeholder="Email ID" style={{ fontSize: 20,fontWeight:200 ,textAlign:"justify",flex:1 }}
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </View>
      <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, borderColor: 'black', marginBottom: 15 }}>
        <MaterialIcons  name="lock" size={20} color='black' style={{marginRight:7}} />
        <TextInput name="password" placeholder="PassWord" style={{fontWeight:200 , fontSize: 20,textAlign:"justify",flex:1 }} secureTextEntry={true}
          value={password}
          onChange={(e) => { setPass(e.target.value) }}
        />
      </View>
      
      <TouchableOpacity onPress={SignIn} style={{ backgroundColor:"blue",  marginBottom: 30, borderRadius: 10,paddingVertical:8}}>
        <Text style={{ fontWeight:700, textAlign:"center",color:"white",fontSize:16}} >Login</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row',alignSelf:"center" }}>
        <Text style={{ fontSize: 16}}>New to Parko?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
          <Text style={{ fontSize: 16, color: 'blue', fontWeight: 700}}> Register</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Login