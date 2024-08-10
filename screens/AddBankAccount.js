import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import COLORS from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';

const addbankSecond = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short')
    .max(50, 'Too Long')
    .required('Full Name is required'),

  fullname: Yup.string()
    .min(8, 'Too Short')
    .max(50, 'Too Long')
    .required('Full Name is required'),

  acno: Yup.string()
    .min(9, 'Minimum 9 digits')
    .max(17, 'Maximum 17 digits')
    .required('Account Number is required'),

  confirmAcno: Yup.string()
    .oneOf([Yup.ref('acno'), null], 'Confirm Account Number must match')
    .required('Confirm Account Number is required'),

  ifscCode: Yup.string()
    .required('IFSC Code is required'),
});

const AddBankAccount = () => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const handleSaveBankDetails = () => {
   
  };

  return (
   
    <Formik
      initialValues={{
        name: '',
        fullname: '',
        acno: '',
        confirmAcno: '',
        ifscCode: '',
      }}
      validationSchema={addbankSecond}
      onSubmit={(values) => {
     
        console.log('Form submitted with values:', values);
      
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <ImageBackground
          source={require('../assets/back2.jpg')} 
          style={styles.backgroundImage}
        >
          <GestureHandlerRootView>
            <ScrollView>
              <View style={styles.container}>
                <SafeAreaView>
                  <Image
                    style={styles.logo}
                    source={require("../assets/allu.png")}
                  />
                  <Text style={styles.title}>Bank Details</Text>

                  <TextInput
                    style={styles.input}
                    placeholder='Enter Your Full Name'
                    placeholderTextColor={COLORS.black}
                    keyboardType='default'
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}

                  <TextInput
                    placeholder='Account Holder name'
                    placeholderTextColor={COLORS.black}
                    keyboardType='default'
                    style={styles.input}
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    value={values.fullname}
                  />
                  {touched.fullname && errors.fullname && (
                    <Text style={styles.errorText}>{errors.fullname}</Text>
                  )}

                  <TextInput
                    placeholder='Account Number'
                    backgroundColor='white'
                    placeholderTextColor={COLORS.black}
                    keyboardType='number-pad'
                    style={styles.input}
                    value={values.acno}
                    onChangeText={handleChange('acno')}
                    onBlur={handleBlur('acno')}
                  />
                  {touched.acno && errors.acno && (
                    <Text style={styles.errorText}>{errors.acno}</Text>
                  )}

                  <TextInput
                    placeholder='Confirm Account Number'
                    placeholderTextColor={COLORS.black}
                    keyboardType='number-pad'
                    style={styles.input}
                    value={values.confirmAcno}
                    onChangeText={handleChange('confirmAcno')}
                    onBlur={handleBlur('confirmAcno')}
                  />
                  {touched.confirmAcno && errors.confirmAcno && (
                    <Text style={styles.errorText}>{errors.confirmAcno}</Text>
                  )}

                  <TextInput
                    placeholder='IFSC Code'
                    placeholderTextColor={COLORS.black}
                    keyboardType='default'
                    style={styles.input}
                    value={values.ifscCode}
                    onChangeText={handleChange('ifscCode')}
                    onBlur={handleBlur('ifscCode')}
                  />
                  {touched.ifscCode && errors.ifscCode && (
                    <Text style={styles.errorText}>{errors.ifscCode}</Text>
                  )}

                  <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Update Profile</Text>
                  </TouchableOpacity>
                </SafeAreaView>
              </View>
            </ScrollView>
          </GestureHandlerRootView>
        </ImageBackground>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    // marginTop:20
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: -50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: -50,
  },
  input: {
    backgroundColor: COLORS.inputBackground,
    borderColor: COLORS.inputBorder,
    borderWidth: 2,
    color: COLORS.text,
    fontSize: 16,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    backgroundColor: "#56ccce",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default AddBankAccount