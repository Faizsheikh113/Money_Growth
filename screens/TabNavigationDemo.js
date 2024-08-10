import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({ navigation }) {
    // store single data

    // const storeData = async () => {
    //     try {
    //       await AsyncStorage.setItem('name', "Rahul Sharma");
    //       console.log("Save Data Successfully!!")
    //     } catch (e) {
    //       // saving error
    //       console.log("Error:",error)
    //     }
    //   };
    //store JSObject
    const storeData = async () => {
        var emprecord = {
            name: "Neha Sharma",
            id: 101,
            salary: 22600.0,
            designation: "React Native Developer"
        }
        try {
            const jsonValue = JSON.stringify(emprecord);
            await AsyncStorage.setItem("employee", jsonValue);
            console.log("Save Data Successfully!!")
        } catch (e) {
            // saving error
            console.log("Error:", error)
        }
    };
    React.useEffect(() => {
        console.log("calling useEffect")
        storeData()
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button title='GotoDetails'
                onPress={() => navigation.navigate('Details')}
            ></Button>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function FavoriteScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>FavoriteScreen!</Text>
        </View>
    );
}
function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ProfileScreen!</Text>
        </View>
    );
}
function DetailsScreen() {
    const [name, setname] = React.useState("")
    const [emp, setemp] = React.useState({})
    // const getData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('name');
    //       if (value !== null) {
    //          console.log(value)   
    //          setname(value)            
    //       }
    //     } catch (e) {
    //       // error reading value
    //     }
    //   };
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('employee');
            //   return jsonValue != null ? JSON.parse(jsonValue) : null;
            let data = JSON.parse(jsonValue)
            console.log(data)
            setemp(data)
        } catch (e) {
            // error reading value
        }
    };
    React.useEffect(() => {
        console.log("Details Screen")
        getData()
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>DetailsScreen!</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Name:{emp.name}</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Id:{emp.id}</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Salary:{emp.salary}</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Designation:{emp.designation}</Text>
        </View>
    );
}
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeDemo" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
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

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    }
                    else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    else if (route.name === 'Notifications') {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    else if (route.name === 'Favorite') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={32} color={color} />;
                },
                tabBarStyle: { height: 60 },
                tabBarLabelStyle: { fontSize: 16, alignItems: 'center' },
                tabBarActiveTintColor: 'brown',
                tabBarInactiveTintColor: 'blue',
                // tabBarBadge: 6,
                tabBarBadgeStyle: { fontSize: 20, height: 26, width: 26, borderRadius: 15, padding: 8 },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default function TabNavigationDemo() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
