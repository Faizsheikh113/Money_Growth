import { View, Text, Image, Pressable,ImageBackground, Dimensions, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';


const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
    source={require("../assets/4.jpeg")}  
     style={styles.background}>
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/allu.png')}
        />
        <Text style={styles.welcomeText}>Grow Your Money With US</Text>

        <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already Have an account ?</Text>
          <Pressable onPress={() => navigation.navigate('sign')}>
            <Text style={styles.signupLink}>Signup</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};
export default Welcome;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: windowWidth * 0.8,
    alignItems: 'center',
  },
  logo: {
    
    height: windowHeight * 0.3,
    width: windowWidth * 0.7,
    
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',

    color: COLORS.black,
    marginTop: -35,
    marginBottom: 20,
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
  signupContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
    marginTop: 20,
    color: COLORS.black,
  },
  signupLink: {
    fontSize: 16,
    marginTop: 20,
    color: COLORS.black,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

