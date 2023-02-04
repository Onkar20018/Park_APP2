// import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import OnBoard from '../screens/OnBoarding'
import Selection from '../screens/Selection'
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
     <Stack.Navigator initialRouteName='OnBoard' screenOptions={{headerShown:false}}>
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='Login' component={Login}/>
           <Stack.Screen name='Register' component={Register}/>
           <Stack.Screen name='OnBoard' component={OnBoard}/>
           <Stack.Screen name='Selection' component={Selection}/>
     </Stack.Navigator>
  )
}

export default AuthStack