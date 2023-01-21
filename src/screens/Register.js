import React ,{useState} from "react";
import { TextInput,SafeAreaView,View, Text, Image, TouchableOpacity } from 'react-native'


const Register = ({navigation}) => {
    const [user,setUser]=useState({
       name:"",
       email:"",
       number:"",
       password:"",
       cpassword:""
    })  
    let name,value;
    
    const handleInput=(e)=>{
            name=e.target.name
            value=e.target.value
        
            setUser({...user,[name]:value})
    }

    const PostData=async (e)=>{
          try {
          e.preventDefault();
            const{name,email,number,password,cpassword}=user;
            console.log("Hii")
        
            const res = await fetch("http://192.168.43.182:8000/posted",{
              
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                name,
                email,
                number,
                password,
                cpassword
              })
            });
            console.log("hii2")
            const resp = await res.json();
             if(resp.status===422 || !resp){
              console.log("User Not Registered")
             }else{
              console.log("Registred")
             }

          } catch (error) {
             console.log("error in posting:",error.message)
          }
    }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                      
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 230, width: 230 ,marginBottom:25}}
        ></Image>
     
      <Text style={{fontSize:28,marginBottom:8}}>Register System</Text>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:103}}>
      <TextInput placeholder="Full Name" name="name" value={user.name} onChange={handleInput} style={{fontSize:20}} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:112}}>
      <TextInput placeholder="Email ID" name="email" value={user.email} onChange={handleInput} style={{fontSize:20}} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:82}}>
      <TextInput placeholder="Phone Number" name="number" value={user.number} onChange={handleInput} style={{fontSize:20}} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:100}}>
      <TextInput placeholder="PassWord" name="password" value={user.password} onChange={handleInput} style={{fontSize:20,textAlign:'justify'}}secureTextEntry={true} />
      </View>
     
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:15 ,paddingHorizontal:54}}>
      <TextInput placeholder="Confirm PassWord" name="cpassword" value={user.cpassword} onChange={handleInput} style={{fontSize:20,textAlign:'justify'}}secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={PostData} >
      <Text style={{fontSize:28 ,backgroundColor:'purple',borderRadius:8,paddingHorizontal:100,paddingBottom:5 ,color:'white',alignContent:"center" ,  }} >Register</Text>
      </TouchableOpacity>
     
      <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:16,marginTop:8}}>Already Registered ?</Text>   
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text style={{fontSize:16,color:'purple',fontWeight:'bold',marginTop:8}}> Login</Text>
          </TouchableOpacity>
      </View>  
    
    </SafeAreaView>
  )
}

export default Register