import { SafeAreaView,Text, View } from 'react-native'
import React, { useEffect , useState } from 'react'
import axios from 'axios'


const Home = () => {

  const [data, setdata] = useState([])
  let i ="6"
  useEffect( () => {
    axios.get('http://localhost:8000/home').then((res)=>{
      setdata(res.data)
       console.log(res.data[i]);
      console.log(res.data);
      console.log(res);
    })
    //  console.log(data[0].i);
    
  }, []);
   Object.entries(data).map(x=>console.log(x[0]))
  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
         <View style={{flex:1,justifyContent:"center"}}>
            <Text>
                    {data[6]}
            </Text>
         </View>
    </SafeAreaView>
  )
}

export default Home
 

