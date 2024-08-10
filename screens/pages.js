import { Pressable, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import COLORS from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Pages = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
             <TouchableOpacity onPress={() => navigation.navigate("rewards")}>
          <Text style={styles.registerText}>rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("referral")}>
          <Text style={styles.registerText}>referral</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Text style={styles.registerText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Policy")}>
          <Text style={styles.registerText}>Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileUpdate")}>
          <Text style={styles.registerText}>update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddBankAccount")}>
          <Text style={styles.registerText}>bank</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Text style={styles.registerText}>profile</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("contact")}>
          <Text style={styles.registerText}>contact</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.registerText}>Home</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("Forex")}>
          <Text style={styles.registerText}>Forex</Text>
         </TouchableOpacity>
      

        
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: windowHeight * 0.15,
    paddingHorizontal: windowWidth * 0.1,
  },
  logo: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.5,

  },
  welcomeText: {
    fontSize: 20,
    marginTop:-40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.black,
    textAlign: 'center',
  },

  input: {
    backgroundColor: 'white',
    borderColor: '#56ccce',
    borderWidth: 2,
    color: 'black',
    fontSize: 18,
    height: 50,
    marginBottom: 20,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlign:'center',
  },

  forgetPasswordText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
    registerText: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default Pages;