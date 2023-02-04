import React ,{useState} from "react";
import { TextInput,SafeAreaView,View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Register = ({navigation}) => {
       const[name,setName]=useState("")
      const[email,setEmail]=useState("")
      const[phone,setPhone]=useState("")
      const[password,setPassword]=useState("")
      const[cpassword,setCpassword]=useState("")

    const PostData=async (e)=>{
          try {

            e.preventDefault(); 
               let data={name,email,phone,password,cpassword}
            const res = await fetch("http://localhost:8000/posted",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(data)

            });
            const resp = await res.json();
             if(res.status===442 || !resp){
              console.log("User Not Registered:",resp.message)
              Alert.alert("Not Registerd",resp.message)
             }else{
              console.log("Registred")
              Alert.alert("Yes ")
              navigation.navigate('Home')
             }

          } catch (error) {
             console.log("error in posting",error)
             Alert.alert("Not Again")
          }
    }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'paleturquoise' }}>
            <View style={{paddingHorizontal:25}}>

               <View style={{alignSelf:"center"}}>
      <Image source={require('../../assets/remove.jpg')}
        style={{ height: 325, width: 325 ,marginBottom:25,transform:[{rotate:'360deg'}] }}
        ></Image>
     
        </View>       
      <Text style={{fontSize:28,marginBottom:8,flex:1}}>Register System</Text>
      <Text style={{fontSize:20}}>Name</Text>
      <View style={{flexDirection:'row', borderRadius:5,borderWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="badge" size={25} color='black' style={{marginRight:7}} />
      <TextInput placeholder="Sachin Tendulkar" name="name"  value={name} onChange={(e)=>{setName(e.target.value)}} style={{height:30,fontSize:20,flex:1,textAlign:"justify",marginLeft:5 }} />
      </View>
      <Text style={{fontSize:20}}>Email ID</Text>
      <View style={{flexDirection:'row', borderRadius:5,borderWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="email" size={25} color='black' style={{marginRight:7}} />
      <TextInput placeholder="Sachin@something.com" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{height:30,fontSize:20,flex:1,textAlign:"justify"}} />
      </View>
      <Text style={{fontSize:20}}>Phone Number</Text>
      <View style={{flexDirection:'row', borderRadius:5,borderWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="call" size={25} color='black' style={{marginRight:7}} />
      <TextInput placeholder="123475890" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} keyboardType="numeric" style={{fontSize:20,flex:1,textAlign:"justify",marginLeft:5 }} />
      </View>
      <Text style={{fontSize:20}}>PassWord</Text>
      <View style={{flexDirection:'row', borderRadius:5,borderWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="lock" size={25} color='black' style={{marginRight:7}} />
      <TextInput placeholder="SecureMe#007" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{height:30,fontSize:20,textAlign:'justify',flex:1 ,marginLeft:5}}secureTextEntry={true} />
      </View>
      <Text style={{fontSize:20}}>Confirm PassWord</Text>
      <View style={{flexDirection:'row', borderRadius:5,borderWidth:1,borderColor:'black',marginBottom:15 }}>
      <MaterialIcons  name="lock" size={25} color='black' style={{marginRight:7}} />
      <TextInput placeholder="SecureMe#007" name="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} style={{height:30,fontSize:20,flex:1,textAlign:"justify",marginLeft:5}}secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={PostData} style={{backgroundColor:'darkolivegreen',borderRadius:8,paddingBottom:5,marginHorizontal:25}} >
      <Text style={{fontSize:30 , color:'white',alignSelf:"center"}} >Register</Text>
      </TouchableOpacity>
     
      <View style={{flexDirection:'row',alignSelf:"center"}}>
           <Text style={{fontSize:18,marginTop:8}}>Already Registered ?</Text>   
          <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
            <Text style={{fontSize:18,color:'darkolivegreen',marginTop:8}}> Login</Text>
          </TouchableOpacity>
      </View>  
            </View>
    
    </SafeAreaView>
  )
}

export default Register