import { View, Text,Image } from 'react-native'
import React from 'react'

const Rewards = () => {
  return (

    <View>
        <Image style={{
          alignSelf:'center',
          height:200,
          width:200,
          marginTop:150,
        
        }}
          source={require("../assets/gift.png")
  }/>
      <Text style={{fontSize:18, fontWeight:'bold', marginTop:10,textAlign:'center'}}>No Rewards Availble This Time!</Text>
    </View>
  )
}
export default Rewards