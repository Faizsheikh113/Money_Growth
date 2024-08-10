import {Pressable, StyleSheet, Text,ImageBackground, View,Image,TextInput,TouchableOpacity} from 'react-native';
import React, { useState } from 'react'
import COLORS  from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Forget  = ({navigation}) => {

  return( 
    <ImageBackground
  source={require("../assets/back2.jpg")}  
   style={styles.background}>
    <GestureHandlerRootView style={{flex:1,}} >
    <ScrollView >
      <SafeAreaView style={styles.container}>
      <Image
          source={require("../assets/lock.png")}
          style={styles.logo1}   
      />
      <Text  
      style={styles.text1}> Forget Your's Pass...! </Text>
                  <TextInput
                  placeholder='Mobile OR Email'
                     placeholderTextColor={COLORS.black}
                     keyboardType='user-name'
                     style={styles.input}>
                 </TextInput>
                 <TouchableOpacity
                  onPress={()=>console.log("Pressed")}>
                 <Text style={{fontSize:16, fontWeight:'bold', marginRight:190,marginTop:10,marginBottom:0}}>resend mail</Text>
                 </TouchableOpacity>
                 
                 <TextInput
                  placeholder='OTP'
                     placeholderTextColor={COLORS.black}
                     keyboardType='password'
                     style={styles.input2}> 
                  </TextInput>
          <View 
              style={{
                  flexDirection:'row',
                  justifyContent:'center'
              }}>
           
               
               
          

            <TouchableOpacity  onPress={() => navigation.navigate("password")} 
                              style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Register</Text>
           </TouchableOpacity>
                 
                
                </View>
                </SafeAreaView>
              </ScrollView>
             </GestureHandlerRootView>
             </ImageBackground>
  );}

  
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container:
  {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    width:'100%',
    
  },
  logo1:
  {
        height: 130,
        width: 100,
        borderRadius: 20,
        position: "absolute",
        marginTop: 90,
        marginLeft:30,
  },
  text1:
  {
        fontSize: 20,
        fontWeight:'bold',
        marginTop:250,
        color:COLORS.black,
      textAlign:'center',
  },
  
 
  input:
  {               
    backgroundColor:'white',
    borderColor:'green',
    borderWidth:2,
    color:'black',
    fontSize:18,
    height:50,
    marginTop:20,
    alignItems:'center',
    textAlign:'center',
    width:'90%',
    borderRadius:10,
  },
  input2:
  {
    backgroundColor:'white',
    borderColor:'green',
    borderWidth:2,
    color:'black',
    fontSize:18,
    marginTop: 10,
    height:50,
    alignItems:'center',
    textAlign:'center',
    width:'90%',
    borderRadius:10,
  },
  buttonContainer: {
    backgroundColor: "#56ccce",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
 
 
});
export default Forget
