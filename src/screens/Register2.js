import React ,{useState} from "react";
import { TextInput,SafeAreaView,View, Text, Image, TouchableOpacity, Alert } from 'react-native'


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
             }

          } catch (error) {
             console.log("error in posting",error)
             Alert.alert("Not Again")
          }
    }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                      
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 230, width: 230 ,marginBottom:25}}
        ></Image>
     
      <Text style={{fontSize:28,marginBottom:8}}>Register System</Text>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:103}}>
      <TextInput placeholder="Full Name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} style={{fontSize:20}} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:112}}>
      <TextInput placeholder="Email ID" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{fontSize:20}} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:82}}>
      <TextInput placeholder="Phone Number" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} keyboardType="numeric" style={{fontSize:20}} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:100}}>
      <TextInput placeholder="PassWord" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{fontSize:20,textAlign:'justify'}}secureTextEntry={true} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:15 ,paddingHorizontal:54}}>
      <TextInput placeholder="Confirm PassWord" name="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} style={{fontSize:20,textAlign:'justify'}}secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={PostData} >
      <Text style={{fontSize:28 ,backgroundColor:'purple',borderRadius:8,paddingHorizontal:100,paddingBottom:5 ,color:'white',alignContent:"center" ,  }} >Register</Text>
      </TouchableOpacity>
     
      <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:16,marginTop:8}}>Already Registered ?</Text>   
          <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
            <Text style={{fontSize:16,color:'purple',fontWeight:'bold',marginTop:8}}> Login</Text>
          </TouchableOpacity>
      </View>  
    
    </SafeAreaView>
  )
}

export default Register