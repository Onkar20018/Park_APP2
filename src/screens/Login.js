import React, { useState } from "react";
import { TextInput, SafeAreaView, View, Text, Image, TouchableOpacity, Alert } from 'react-native'

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
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 250, width: 250, marginBottom: 40 }}
      ></Image>
      <Text style={{ fontSize: 28, marginBottom: 10 }}>Login System</Text>
      <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, borderColor: 'black', marginBottom: 15, paddingHorizontal: 110 }}>
        <TextInput name="email" placeholder="Email ID" style={{ fontSize: 20 }}
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </View>
      <View style={{ flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, borderColor: 'black', marginBottom: 15, paddingHorizontal: 100 }}>
        <TextInput name="password" placeholder="PassWord" style={{ fontSize: 20, textAlign: 'justify' }} secureTextEntry={true}
          value={password}
          onChange={(e) => { setPass(e.target.value) }}
        />
      </View>
      <TouchableOpacity onPress={SignIn}>
        <Text style={{ fontSize: 25, paddingBottom: 8, backgroundColor: 'purple', borderRadius: 8, paddingHorizontal: 80, color: 'white' }} >Login</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 16, marginTop: 30 }}>New to Parko?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
          <Text style={{ fontSize: 16, color: 'purple', fontWeight: 'bold', marginTop: 30 }}> Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login