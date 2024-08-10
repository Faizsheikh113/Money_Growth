import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Dimensions, // Import Dimensions for screen size detection
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
// import COLORS from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5,} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AddBankAccount from "./AddBankAccount";
import Rewards from "./rewards";
import Referral from "./referral";
import Notifications from "./notifications";
import Policy from "./policy";
import ProfileUpdate from "./ProfileUpdate";
import Contact from "./contact";
import Password from "./password";
import Header from "./header";
import Profile from "./profile";
// import Forex from "./Forex";
import COLORS from "../constants/colors";
// import Policy from "./policy";
import { Fo,Forex,Commodity,Indices } from "./WatchList";
import { Positions,Holdings,Bulk_Trade,Closed } from "./Portfolio";
// import wallet from "./wallet";

const PortStack=createNativeStackNavigator();
export function PortFolio() {
  return (
    <PortStack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <PortStack.Screen name="Positions" component={Positions} />
      <PortStack.Screen name="Holdings" component={Holdings} />
      <PortStack.Screen name="Bulk_Trade" component={Bulk_Trade} />
      <PortStack.Screen name="Closed" component={Closed} />
    </PortStack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}

const WatchStack = createNativeStackNavigator();

export function WatchStackScreen({}) {
  return (
    <WatchStack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      {/* <WatchStack.Screen name="WatchList" component={WatchList} /> */}
      <WatchStack.Screen name="Forex" component={Forex} />
      <WatchStack.Screen name="Commodity" component={Commodity} />
      <WatchStack.Screen name="Indices" component={Indices} />
      <WatchStack.Screen name="Fo" component={Fo} />
    </WatchStack.Navigator>
  );
}

const WalletStack = createNativeStackNavigator();

export function WalletStackScreen({}) {
  return (
    <WalletStack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      {/* <WalletStack.Screen name="wallet" component={wallet} /> */}
    </WalletStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <HomeStack.Screen name="MyAccount" component={MyAccount} />
      <HomeStack.Screen name="AddBankAccount" component={AddBankAccount} />
      <HomeStack.Screen name="reward" component={Rewards} />
      <HomeStack.Screen name="referral" component={Referral} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="Policy" component={Policy} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="ProfileUpdate" component={ProfileUpdate} />
      <HomeStack.Screen name="Contact" component={Contact} />
      <HomeStack.Screen name="password" component={Password} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeStackScreen") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "wallet") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "PortFolio") {
            iconName = focused ? "heart" : "heart-outline";
          }
           else if (route.name === "WatchList") {
            iconName = focused ? "arrow-up-circle" : "arrow-up-circle-outline";
          }
          return <Ionicons name={iconName} size={27} color={color} />;
        },
        tabBarStyle: { height: 50 },
        tabBarLabelStyle: { fontSize: 16, alignItems: "center" },
        tabBarActiveTintColor: COLORS.BottelGreen,
        tabBarInactiveTintColor: "black",
        tabBarBadgeStyle: {
          fontSize: 12,
          height: 22,
          width: 22,
          borderRadius: 15,
          padding: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="WatchList" component={WatchStackScreen} />
      <Tab.Screen name="PortFolio" component={PortFolio} />
      <Tab.Screen name="wallet" component={ProfileScreen} />
      <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
    </Tab.Navigator>
  );
} 

const MyAccount = ({ navigation }) => {
  const { width, height } = Dimensions.get("window"); 
  const calculateHeightPercentage = (percentage) => {
    return (height * percentage) / 100;
  };

  const calculateWidthPercentage = (percentage) => {
    return (width * percentage) / 100;
  };

  const calculateFontSizePercentage = (percentage) => {
    const baseDimension = Math.min(height, width);
    return (baseDimension * percentage) / 100;
  };



  return (
    <ImageBackground
      style={styles.BackGroundImage}
      source={require("../assets/back2.jpg")}
    >
    {/* <Header/> */}
      <GestureHandlerRootView style={styles.container}>
        <ScrollView>
          <View style={styles.V1}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: calculateWidthPercentage (width < 600 ? 5 : 10), // Adjust margin based on screen width
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: calculateFontSizePercentage(7), fontWeight: "bold" }}>
                  Clint ID:
                </Text>
                <Text style={{ fontSize: calculateFontSizePercentage(7), fontWeight: "bold", marginTop: calculateHeightPercentage(1) }}>
                  KYC
                </Text>
                <Text
                  style={{ fontSize: calculateFontSizePercentage(7), fontWeight: "bold", marginTop: calculateHeightPercentage(1) }}
                >
                  Mobile{"\n"}Number:
                </Text>
                <Text
                  style={{
                    fontSize: calculateFontSizePercentage(7),
                    fontWeight: "bold",
                    marginTop: calculateHeightPercentage(1),
                    marginBottom: 15,
                  }}
                >
                  Account{"\n"}Status:
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.BottelGreen,
                    width: calculateWidthPercentage (35),
                    height: calculateHeightPercentage (5),
                    borderRadius: 10,
                    marginTop: calculateHeightPercentage(1),
                  }}
                >
                  <Text
                    style={{
                      fontSize: calculateFontSizePercentage (5),
                      fontWeight: "bold",
                      padding: calculateFontSizePercentage (2),
                      color: "white",
                    }}
                    onPress={() => navigation.navigate("ProfileUpdate")}
                  >
                    Update KYC
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: calculateHeightPercentage(1),
                    backgroundColor: COLORS.BottelGreen,
                    width: calculateWidthPercentage(35),
                    height: calculateHeightPercentage(8),
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.navigate("password")}
                >
                  <Text
                    style={{
                      fontSize: calculateFontSizePercentage (5),
                      fontWeight: "bold",
                      padding:  calculateFontSizePercentage (2),
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Change{"\n"}Password
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: calculateFontSizePercentage (7),
                    fontWeight: "bold",
                    marginHorizontal: calculateWidthPercentage (width < 600 ? 17 : 10),
                  }}
                >
                  FM3833
                </Text>
                <Text
                  style={{
                    fontSize: calculateFontSizePercentage (7),
                    fontWeight: "bold",
                    marginHorizontal: calculateWidthPercentage (width < 600 ? 17 : 10),
                    color: COLORS.green,
                  }}
                >
                  Verified
                </Text>
                <Text
                  style={{
                    fontSize: calculateFontSizePercentage (7),
                    fontWeight: "bold",
                    marginTop: calculateHeightPercentage(6),
                    marginHorizontal: calculateWidthPercentage (width < 600 ? 17 : 10),
                  }}
                >
                  7509962232
                </Text>
                <Text
                  style={{
                    fontSize:calculateFontSizePercentage (7),
                    fontWeight: "bold",
                    marginTop:  calculateHeightPercentage(5),
                    marginHorizontal:calculateWidthPercentage (width < 600 ? 17 : 10),
                    color: COLORS.green,
                  }}
                >
                  Active
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "column", padding: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity style={styles.HomeButton}
                onPress={()=>navigation.navigate("Profile")}
              >
                <MaterialIcons
                  name="contacts"
                  size={24}
                  color="white"
                  style={{ marginTop: calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text style={styles.HomeButtonText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.HomeButton}
                onPress={() => navigation.navigate("AddBankAccount")}
              >
                <FontAwesome
                  name="bank"
                  size={24}
                  color="white"
                  style={{ marginTop: calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text style={styles.HomeButtonText}>Add Bank</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.HomeButton}>
                <FontAwesome5
                  name="wallet"
                  size={24}
                  color="white"
                  style={{ marginTop:calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text style={styles.HomeButtonText}>Fund Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.HomeButton}
                onPress={() => navigation.navigate("referral")}
              >
                <FontAwesome5
                  name="share-alt"
                  size={24}
                  color="white"
                  style={{ marginTop: calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text style={styles.HomeButtonText}>My Referral</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={styles.HomeButton}
                onPress={()=>navigation.navigate("reward")}
              >
                <FontAwesome5
                  name="gift"
                  size={24}
                  color="white"
                  style={{ marginTop: calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text style={styles.HomeButtonText}>

                  Rewards
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                 style={styles.HomeButton}>
                <MaterialIcons
                  name="mail"
                  size={24}
                  color="white"
                  style={{ marginTop: calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text style={styles.HomeButtonText}
                  onPress={()=>navigation.navigate("Notifications")}
                >
                  Inbox
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                 style={styles.HomeButton}
                  onPress={()=>navigation.navigate("Policy")}
              >
                <MaterialIcons
                  name="policy"
                  size={24}
                  color="white"
                  style={{ marginTop: calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text
                  style={styles.HomeButtonText}
                >
                  Policy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.HomeButton}
                  onPress={()=>navigation.navigate("Contact")}
              >
                <MaterialIcons
                  name="phone"
                  size={24}
                  color="white"
                  style={{ marginTop: calculateHeightPercentage(1), alignSelf: "center" }}
                />
                <Text
                  style={styles.HomeButtonText}
                >
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                marginTop: calculateHeightPercentage(5),
                backgroundColor: COLORS.BottelGreen,
                width:calculateWidthPercentage (width < 600 ? 50 : 20), 
                padding: calculateHeightPercentage (2),
                borderRadius: 15,
                alignSelf: "center",
              }}
              onPress={() => Linking.openURL("https://dikshahostingsolutions.com/ ")}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: width < 600 ? 14 : 18, 
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Visit Our Website
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </ImageBackground>
  );
};
export default function TabNavigationDemo() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
const { width, height } = Dimensions.get("window"); // Detect screen dimensions
  const calculateHeightPercentage = (percentage) => {
    return (height * percentage) / 100;
  };

  const calculateWidthPercentage = (percentage) => {
    return (width * percentage) / 100;
  };

  const calculateFontSizePercentage = (percentage) => {
    const baseDimension = Math.min(height, width);
    return (baseDimension * percentage) / 100;
  };

const styles = StyleSheet.create({
  V1: {
    flex: 1,
    flexWrap:'wrap',
    marginTop: calculateHeightPercentage (4),
  },
  BackGroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    marginTop: calculateHeightPercentage (1),
    paddingHorizontal: 10, 
  },
  HomeButton: {
    backgroundColor: COLORS.BottelGreen,
    width:calculateWidthPercentage (17.5),
    height: calculateHeightPercentage(9.99),
    borderRadius: 10,
    marginTop: 15,
  },
  HomeButtonText: {
    fontSize: calculateFontSizePercentage(3),
    fontWeight: "bold",
    padding: calculateFontSizePercentage(1),
    color: "white",
    textAlign: "center",
  },
});