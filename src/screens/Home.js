import { SafeAreaView,Text, View } from 'react-native'
import React, { useEffect , useState } from 'react'
import axios from 'axios'


const Home = () => {

  const [data, setdata] = useState([])

  useEffect( () => {
    axios.get('http://localhost:8000/home').then((res)=>{
      setdata(res.data)
      //  console.log(res.data[i]);
      // console.log(res.data);
      // console.log(res);
    })
    //  console.log(data[0].i);
    
  }, []);
    
  //  Object.entries(data).map(
  //             x=>console.log(x)
  //   )
  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
         <View style={{flex:0,justifyContent:"center"}}>
            {
              Object.entries((data)).map((x)=>{
                    return(
                      <View style={{backgroundColor:'red',height:15}}  key={x[0]}>
                        <Text>{x[0]}</Text>
                      </View>

                    )
              })
            }
         </View>
    </SafeAreaView>
  )
}

export default Home
 

