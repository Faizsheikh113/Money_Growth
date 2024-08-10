import { View, Text } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Referral = () => {
  return (
<SafeAreaView>
    <View style={{flex:1,}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Text style={{fontWeight:'bold', fontSize:20}}> My referral  Code</Text>
            <Text style={{ fontSize:20,color:'green',fontWeight:'bold'}}> 3833</Text>
            
      </View>
      <View style={{height:50,width:'100%',backgroundColor:'skyblue',flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderTopEndRadius:30,borderTopLeftRadius:30}}>
                <Text>UID</Text>
                <Text>A/C Opened On </Text>
                <Text>Name</Text>
                <Text>Status</Text>
            </View>
    </View>
</SafeAreaView>
  )
}

export default Referral