import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React,{useEffect,useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import axios from 'axios';
import AlphaVantageComponent from './StockChart';
const Forex = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection:"row",backgroundColor:COLORS.BottelGreen,height:50,justifyContent:"space-evenly",alignItems:"center"}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Forex")}
        >
          <Text style={{color:'white'}}>FOREX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Commodity")}
        >
          <Text style={{color:'white'}}>COMMODITY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Indices")}
        >
          <Text style={{color:'white'}}>INDICES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Fo")}
        >
          <Text style={{color:'white'}}>F.&.O</Text>
        </TouchableOpacity>
      </View>
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:50,color:"black"}}>Forex</Text>
    {/* <AlphaVantageComponent/> */}
    </View>
</SafeAreaView>
  )
};
const Indices = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection:"row",backgroundColor:COLORS.BottelGreen,height:50,justifyContent:"space-evenly",alignItems:"center"}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Forex")}
        >
          <Text style={{color:'white'}}>FOREX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Commodity")}
        >
          <Text style={{color:'white'}}>COMMODITY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Indices")}
        >
          <Text style={{color:'white'}}>INDICES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Fo")}
        >
          <Text style={{color:'white'}}>F.&.O</Text>
        </TouchableOpacity>
      </View>
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:50,color:"black"}}>INDICES</Text>
    </View>
</SafeAreaView>
  )
}
const Fo = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection:"row",backgroundColor:COLORS.BottelGreen,height:50,justifyContent:"space-evenly",alignItems:"center"}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Forex")}
        >
          <Text style={{color:'white'}}>FOREX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Commodity")}
        >
          <Text style={{color:'white'}}>COMMODITY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Indices")}
        >
          <Text style={{color:'white'}}>INDICES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Fo")}
        >
          <Text style={{color:'white'}}>F.&.O</Text>
        </TouchableOpacity>
    </View>
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:50,color:"black"}}>F.&.O</Text>
    </View>
</SafeAreaView>
  )
}
const Commodity = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection:"row",backgroundColor:COLORS.BottelGreen,height:50,justifyContent:"space-evenly",alignItems:"center"}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Forex")}
        >
          <Text style={{color:'white'}}>FOREX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Commodity")}
        >
          <Text style={{color:'white'}}>COMMODITY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Indices")}
        >
          <Text style={{color:'white'}}>INDICES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Fo")}
        >
          <Text style={{color:'white'}}>F.&.O</Text>
        </TouchableOpacity>
      </View>
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:50,color:"black"}}>COMMODITY</Text>
    </View>
</SafeAreaView>
  )
}
export {Forex,Fo,Commodity,Indices};