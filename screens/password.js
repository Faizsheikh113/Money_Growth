
import {Pressable, StyleSheet, Text, View,Image,TextInput,TouchableOpacity, } from 'react-native';
import React, { useState } from 'react'
import COLORS  from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Password  = ({navigation}) => {

  return( 
    
<GestureHandlerRootView style={{flex:1,backgroundColor:'white'}} >
  <ScrollView>
      <SafeAreaView  style={styles.container}>
      <Image
          source={require("../assets/refresh.png")}
          style={styles.logo1}   
      />
      <Text  
      style={styles.text1}> Change Your's Pass...! </Text>
                  <TextInput
                     
                     placeholder='New Password'
                     placeholderTextColor={COLORS.black}
                     keyboardType='user-name'
                     style={styles.input}>
                 </TextInput>
                 
                 
                 <TextInput
                     placeholder='Confrem Password'
                     placeholderTextColor={COLORS.black}
                     keyboardType='password'
                     style={styles.input2}> 
                  </TextInput>
                  <View 
                    style={{
                        flexDirection:'row',
                        justifyContent:'center'
                    }}>
                  </View>       
            <TouchableOpacity
                onPress={() => navigation.navigate("login")} 
                              style={styles.buttonContainer}>
           <Text style={styles.buttonText}>Change</Text>
           </TouchableOpacity>
         </SafeAreaView>
        </ScrollView>
      </GestureHandlerRootView>     
  );}

  
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
  },
  logo1:
  {
        height: 130,
        width: 120,
        borderRadius: 20,
        position: "absolute",
        marginTop: 90,
        marginLeft:30,
  },
  text1:
  {
        fontSize: 20,
        fontWeight:'bold',
        marginTop:240,
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
    marginTop: 20,
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


export default Password