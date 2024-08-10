import { View, Text,Image } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (

    <View>
        <Image style={{
          alignSelf:'center',
          height:200,
          width:200,
          marginTop:150,
        
        }}
          source={require("../assets/noo.png")
  }/>
      <Text style={{fontSize:18, fontWeight:'bold', marginTop:10,textAlign:'center'}}>No Message Availble This Time!</Text>
    </View>
  )
}
export default Notifications