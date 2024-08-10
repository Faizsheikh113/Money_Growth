import { Pressable, StyleSheet, Text, View, Image,ImageBackground, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import COLORS from "../constants/colors";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const LoginSecond = Yup.object().shape({
  
 mobile: Yup.string()
    .min(10,'Must be Exactly 10 digits')
    .max(10,'Must be Exactly 10 digits')
    .matches(/^[0-9]+$/,'Must be only degits')
    .required('mobile no is required'),
  password: Yup.string()
  .min(8)
  .max(16)
    .matches(
      /^(?=.*[A-Z])/,
      "  Must Contain One Uppercase Character"
    )
   .matches(
      /^(?=.*[a-z])/,
      " Must Contain One Lowercase Character"
    )
    .matches(
      /^(?=.*[0-9])/,
      "  Must Contain One Number Character"
    )
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    )
  .required('Password is required'),
});

const Login = ({ navigation }) => {
  const [IsLoading, setIsLoading] = useState(false)
  return (
    <ImageBackground
    source={require("../assets/back2.jpg")}  
     style={styles.background}>   
    <Formik
      initialValues={{
       mobile: '',
        password: '',
      }}
      validationSchema={LoginSecond}
      onSubmit={(values) => {
     
        console.log('Form submitted with values:', values);
      
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <GestureHandlerRootView style={{ flex: 1, }}>
          <ScrollView contentContainerStyle={styles.container}>
            <Image
              source={require("../assets/login.png")}
              style={styles.logo}
            />
            <Text style={styles.welcomeText}>Hello, Welcome Again...!</Text>
            <TextInput
              placeholder='Mobile Number'
              placeholderTextColor={COLORS.black}
              keyboardType='phone-pad'
              style={styles.input}
              onChangeText={handleChange('mobile')}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
            />
            {touched.mobile && errors.mobile && (
              <Text style={styles.errorText}>{errors.mobile}</Text>
            )}
            
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.black}
              secureTextEntry={true}
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            
            <TouchableOpacity onPress={() => navigation.navigate("forget")}>
              <Text style={styles.forgetPasswordText}>Forget password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={()=>navigation.navigate("Home")}
              disabled={Object.keys(errors).length > 0}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("sign")}>
              <Text style={styles.registerText}>New User Registration</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("pages")}>
              <Text style={styles.registerText}>Pages</Text>

            </TouchableOpacity>
          </ScrollView>
        </GestureHandlerRootView>
      )}
    </Formik>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
    marginTop: -15,
    
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    paddingVertical: windowHeight * 0.15,
    paddingHorizontal: windowWidth * 0.1,
  },
  logo: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.5,
    marginTop:-50,

  },
  welcomeText: {
    fontSize: 20,
    marginTop:-50,
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
  registerText: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});


export default Login;
