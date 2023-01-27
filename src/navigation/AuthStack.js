// import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Register2 from '../screens/Register2'
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
     <Stack.Navigator initialRouteName='Home'>
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='Login' component={Login}/>
           <Stack.Screen name='Register' component={Register2}/>
     </Stack.Navigator>
  )
}

export default AuthStack