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
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{paddingHorizontal:25}}>

               <View style={{alignSelf:"center"}}>
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 230, width: 230 ,marginBottom:25,transform:[{rotate:'-10deg'}]}}
        ></Image>
     
        </View>       
      <Text style={{fontSize:28,marginBottom:8,fontWeight:500,flex:1}}>Register System</Text>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="badge" size={20} color='black' style={{marginRight:7}} />
      <TextInput placeholder="Full Name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} style={{fontSize:20,flex:1,textAlign:"justify",marginLeft:20,fontWeight:200 }} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="email" size={20} color='black' style={{marginRight:7}} />
      <TextInput placeholder="Email ID" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{fontSize:20,flex:1,textAlign:"justify",marginLeft:20,fontWeight:200 }} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="call" size={20} color='black' style={{marginRight:7}} />
      <TextInput placeholder="Phone Number" name="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} keyboardType="numeric" style={{fontSize:20,flex:1,textAlign:"justify",marginLeft:20,fontWeight:200 }} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 }}>
      <MaterialIcons  name="lock" size={20} color='black' style={{marginRight:7}} />
      <TextInput placeholder="PassWord" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{fontSize:20,textAlign:'justify',flex:1,marginLeft:20,fontWeight:200 }}secureTextEntry={true} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:15 }}>
      <MaterialIcons  name="lock" size={20} color='black' style={{marginRight:7}} />
      <TextInput placeholder="Confirm PassWord" name="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} style={{fontSize:20,flex:1,textAlign:"justify",marginLeft:20,fontWeight:200 }}secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={PostData} style={{backgroundColor:'blue',borderRadius:8,paddingBottom:5,marginHorizontal:25}} >
      <Text style={{fontSize:28 , color:'white',alignSelf:"center"}} >Register</Text>
      </TouchableOpacity>
     
      <View style={{flexDirection:'row',alignSelf:"center"}}>
           <Text style={{fontSize:16,marginTop:8}}>Already Registered ?</Text>   
          <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
            <Text style={{fontSize:16,color:'blue',fontWeight:700,marginTop:8}}> Login</Text>
          </TouchableOpacity>
      </View>  
            </View>
    
    </SafeAreaView>
  )
}

export default Register