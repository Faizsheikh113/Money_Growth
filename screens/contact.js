import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Contact = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/back2.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support Hours:</Text>
          <Text style={styles.sectionText}>Monday - Friday: 11 AM to 5 PM</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Corporate Address:</Text>
          <Text style={styles.sectionText}>
            600 17th St NW, Washington, DC 20508, United States
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Existing Customer Support:</Text>
          <Text style={styles.sectionText}>Email: support@trading.com</Text>
          <Text style={styles.sectionText}>Phone: +1 (207) 800-0056-908</Text>
        </View>

        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL("https://reactnative.dev/")}
        >
          <Text style={styles.linkText}>Visit Our Website</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  },
  sectionText: {
    fontSize: 18,
    color: "#333",
  },
  link: {
    marginTop: 30,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  linkText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Contact;
