import {
  onSubmit,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";

const SignSecond = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short")
    .max(50, "To Long")
    .required("full Name is required"),

  mobile: Yup.string()
    .min(10, "Must be Exactly 10 digits")
    .max(10, "Must be Exactly 10 digits")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Mobile number is required"),

  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email addres."),

  pan: Yup.string()
    .min(10, "Must be Exactly 10 digits")
    .max(10, "Must be Exactly 10 digits")
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number")
    .required("PAN Number is required"),

  Bro: Yup.string()
    .min(5, "Must be Exactly 5 digits")
    .max(5, "Must be Exactly 5 digits")
    .required(" Broker required"),
});

const Sign = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <Formik
      initialValues={{
        name: "",
        mobile: "",
        email: "",
        pan: "",
        broker: "",
        referral: "",
      }}
      validationSchema={SignSecond}
      handleSubmit={(values) => {
        console.log("Form submitted with values:", values);
        alert("Regirastration Complete")
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <ImageBackground
          source={require("../assets/back2.jpg")}
          style={styles.background}
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView>
              <SafeAreaView style={styles.container}>
                {/* ============================logo1=========================================== */}
                <Image
                  style={styles.logo1}
                  source={require("../assets/allu.png")}
                />

                {/* ====================Hello Welcome Sign Up..================================== */}

                <Text style={styles.text1}> Hello Welcome Sign Up..!</Text>

                {/* ====================Enter Your Full Name.==================================== */}

                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Full Name"
                  placeholderTextColor={COLORS.black}
                  keyboardType="default"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                ></TextInput>
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}

                {/* ====================Mobile Number'=========================================== */}

                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number"
                  placeholderTextColor={COLORS.black}
                  keyboardType="phone-pad"
                  onChangeText={handleChange("mobile")}
                  onBlur={handleBlur("mobile")}
                  value={values.mobile}
                ></TextInput>
                {touched.mobile && errors.mobile && (
                  <Text style={styles.errorText}>{errors.mobile}</Text>
                )}
                {/* ====================Email ID=============================================== */}

                <TextInput
                  placeholder="Email ID"
                  placeholderTextColor={COLORS.black}
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                ></TextInput>
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                {/* ===================='PAN Number============================================*/}

                <TextInput
                  placeholder="PAN Number"
                  placeholderTextColor={COLORS.black}
                  style={styles.input}
                  onChangeText={handleChange("pan")}
                  onBlur={handleBlur("pan")}
                  value={values.pan}
                ></TextInput>

                {touched.pan && errors.pan && (
                  <Text style={styles.errorText}>{errors.pan}</Text>
                )}

                {/* ============================OPTIONAL=====================================*/}

                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 5,
                    color: COLORS.black,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  -----OPTIONAL-----
                </Text>
                {/* =========================Broker ID========================================*/}

                <TextInput
                  placeholder="Broker ID"
                  placeholderTextColor={COLORS.black}
                  keyboardType="password"
                  style={styles.input}
                ></TextInput>

                {/* =======================Referral Code======================================*/}

                <TextInput
                  placeholder="Referral Code"
                  placeholderTextColor={COLORS.black}
                  keyboardType="password"
                  style={styles.input}
                ></TextInput>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  {/* =======================Checkboex start======================================*/}

                  <Checkbox
                    style={{
                      marginRight: 8,
                      marginTop: 15,
                      borderColor: "black",
                    }}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? COLORS.primary : undefined}
                  ></Checkbox>

                  {/* ============================Term And Conditions============================*/}

                 <Text
                  style=
                   {{
                     color:'black',
                      top:15
                   }}
                   >Agree To 
                 </Text>
                 
                 <Pressable
                    onPress={() => navigation.navigate("Policy")} 
                 > 
               <Text
                  style=
                   {{
                     color:'blue',
                      top:15
                   }}
                   > Term And Conditions
                 </Text>
                    </Pressable>
                  {/* ===========================================================================*/}
                </View>

                <TouchableOpacity style={styles.buttonContainer}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Pressable onPress={() => navigation.navigate("login")}>
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 5,
                      color: COLORS.green,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    ---- Login with Us ----
                  </Text>
                </Pressable>
              </SafeAreaView>
            </ScrollView>
          </GestureHandlerRootView>
        </ImageBackground>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  logo1: {
    alignItems: "center",
    height: 140,
    width: 200,
    marginLeft: "70",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -15,
    color: COLORS.black,
    textAlign: "center",
  },

  input: {
    backgroundColor: "white",
    borderColor: "#56ccce",
    borderWidth: 2,
    color: "black",
    fontSize: 18,
    height: 40,
    marginTop: 10,
    alignItems: "center",
    textAlign: "center",
    width: "90%",
    borderRadius: 10,
  },

  text2: {
    color: "black",
    marginTop: 5,
    textAlign: "left",
    right: 75,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#56ccce",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
export default Sign;
