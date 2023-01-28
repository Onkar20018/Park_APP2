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
    
  }, [data]);
    
  
   

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
         <View style={{flex:1 , width:250,borderColor:"black",borderWidth:10,flexWrap:"wrap",alignSelf:"center",backgroundColor:"red"}}>
            {
              Object.entries((data)).map((x)=>{
                  if (x[0]==31 || x[0==42] || x[0]==57) {
                     return(<>
                      <View style={{backgroundColor:'white',height:40,alignItems:"center",padding:5,}}  >
                        <Text></Text>
                      </View>
                      <View style={{backgroundColor:'red',height:40,alignItems:"center",padding:5}} >
                        <Text>{x[0]}</Text>
                      </View>
                     </>
                     )
                  }    
                return(

                      <View style={{backgroundColor:'red',height:40,alignItems:"center",padding:5}}  key={x[0]}>
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
 

