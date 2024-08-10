import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import COLORS from "../constants/colors";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from 'react-native-modal-datetime-picker';


// Add DatePickerAndroid for date picker
import { DatePickerAndroid } from 'react-native';
import Header from './header';

const ProfileUpdateSecond = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Too Short')
    .max(50, 'Too Long')
    .required('Full Name is required'),

  pan: Yup.string()
    .min(10, 'Must be Exactly 10 digits')
    .max(10, 'Must be Exactly 10 digits')
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN Number')
    .required('PAN Number is required'),

  // Add validation for dateOfBirth
  dateOfBirth: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date should be in YYYY-MM-DD format')
    .required('Date of Birth is required'),
});

const ProfileUpdate = () => {
  const [gender, setGender] = useState('male');

  const handleProfileUpdate = () => {
    // Handle profile update logic here
  };

  const openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        // Format the selected date as YYYY-MM-DD
        const selectedDate = `${year}-${month + 1 < 10 ? '0' : ''}${month + 1}-${day < 10 ? '0' : ''}${day}`;
        setFieldValue('dateOfBirth', selectedDate); // Set the selected date to Formik field
      }
    } catch (error) {
      console.warn('Cannot open date picker', error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        pan: '',
        dateOfBirth: '', // Add dateOfBirth field to initialValues
      }}
      validationSchema={ProfileUpdateSecond}
      onSubmit={(values) => {
        console.log('Form submitted with values:', values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <ImageBackground
          source={require("../assets/back2.jpg")}
          style={styles.background}>
          <GestureHandlerRootView style={styles.container}>
            <ScrollView>
              <SafeAreaView style={styles.safeContainer}>
                <Image
                  style={styles.logo}
                  source={require("../assets/allu.png")}
                />

                <Text style={styles.title}>Update Your Profile</Text>

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
                  placeholder='Date of Birth (YYYY-MM-DD)'
                  placeholderTextColor={COLORS.black}
                  keyboardType='default'
                  style={styles.input}
                  onChangeText={handleChange('dateOfBirth')}
                  onBlur={handleBlur('dateOfBirth')}
                  value={values.dateOfBirth}
                  onFocus={openDatePicker} // Open date picker on focus
                />
                {touched.dateOfBirth && errors.dateOfBirth && (
                  <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
                )}

                <TextInput
                  placeholder='PAN Card Number'
                  placeholderTextColor={COLORS.black}
                  style={styles.input}
                  onChangeText={handleChange('pan')}
                  onBlur={handleBlur('pan')}
                  value={values.pan}
                />
                {touched.pan && errors.pan && (
                  <Text style={styles.errorText}>{errors.pan}</Text>
                )}

                <View style={styles.radioContainer}>
                  <Text style={styles.radioLabel}>Gender:</Text>
                  <TouchableOpacity
                    style={[
                      styles.radioButton,
                      gender === 'male' ? { backgroundColor: COLORS.primary } : { backgroundColor: COLORS.gray },
                    ]}
                    onPress={() => setGender('male')}
                  >
                    {gender === 'male' && <View style={styles.radioInnerCircle} />}
                  </TouchableOpacity>
                  <Text style={styles.radioText}>Male</Text>

                  <TouchableOpacity
                    style={[
                      styles.radioButton,
                      gender === 'female' ? { backgroundColor: COLORS.primary } : { backgroundColor: COLORS.gray },
                    ]}
                    onPress={() => setGender('female')}
                  >
                    {gender === 'female' && <View style={styles.radioInnerCircle} />}
                  </TouchableOpacity>
                  <Text style={styles.radioText}>Female</Text>
                </View>

                <TouchableOpacity onPress={handleProfileUpdate} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Update Profile</Text>
                </TouchableOpacity>
              </SafeAreaView>
            </ScrollView>
          </GestureHandlerRootView>
        </ImageBackground>
      )}
    </Formik>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // marginTop:60
  },
  safeContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: windowWidth * 0.1,
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: -50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 1,
    color: COLORS.primary,
    textAlign: 'center',
  },
  input: {
    backgroundColor: COLORS.inputBackground,
    borderColor: '#56ccce',
    borderWidth: 2,
    color: COLORS.text,
    fontSize: 16,
    height: 40,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  radioLabel: {
    color: COLORS.text,
    fontSize: 14,
    marginRight: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioInnerCircle: {
    width: 12,
       height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
  radioText: {
    fontSize: 16,
    paddingEnd: 10,
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

export default ProfileUpdate;