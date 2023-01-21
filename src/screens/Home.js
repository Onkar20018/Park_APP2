import { SafeAreaView, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 150, width: 150}}
        ></Image>
        <TouchableOpacity>
        <Text style={{ fontSize: 25, paddingBottom: 8, backgroundColor: 'purple', borderRadius: 8, paddingHorizontal: 80, color: 'white' }} >Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home