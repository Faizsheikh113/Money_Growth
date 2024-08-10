import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import welcome from './screens/welcome';
import Sign from './screens/sign';
import Forget from './screens/forget';
import Password from './screens/password';
import Policy from './screens/policy';
import Header from './screens/header';
import Notifications from './screens/notifications';
import Rewards from './screens/rewards';
import Referral from './screens/referral';
import Pages from './screens/pages';
import ProfileUpdate from './screens/ProfileUpdate';
import AddBankAccount from './screens/AddBankAccount';
import Profile from './screens/profile';
import Contact from './screens/contact';
import { Fo,Forex,Commodity,Indices } from './screens/WatchList';
import { Home } from './screens/Navigation/Index';
import { Bulk_Trade, Closed, Holdings, Positions } from './screens/Portfolio';
import Cheakmodals from './screens/PortFolioModal';
import { View } from 'react-native';
import StockChart from './screens/StockChart';
const Stack = createNativeStackNavigator()
export default function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='welcome'
      // screenOptions={{
      //   header:<Header/>,
      // }}    
    >
      <Stack.Screen
      name="welcome"
      component={welcome}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen
      name="login"
      component={login}
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen
          name="sign"
          component={Sign}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="forget"
          component={Forget}
          options={{
            headerShown: false

          }}
          />
          <Stack.Screen
          name="password"
          component={Password}
          options={{
            headerShown: false

          }}
          />
          <Stack.Screen
          name="Policy"
          component={Policy}
          options={{
            headerShown:false
          }}
          />
           <Stack.Screen
          name="pages"
          component={Pages}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown:false
          }}
          />
           <Stack.Screen
          name="rewards"
          component={Rewards}
          options={{
            headerShown:false
          }}
          />
           <Stack.Screen
          name="referral"
           component={Referral}
          options={{
            headerShown:false
          }}/>
           <Stack.Screen
          name="ProfileUpdate"
          component={ProfileUpdate}
          options={{
            headerShown:false
          }}/>
          <Stack.Screen
          name="contact"
          component={Contact}
          options={{
            headerShown:false
          }}/>
          <Stack.Screen
          name="AddBankAccount"
          component={AddBankAccount}
          options={{
            headerShown:false
          }}
          />
           <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false
          }}
          />
        
         <Stack.Screen
          name="Forex"
          component={Forex}
          options={{
            headerShown:false
          }}
          />
         <Stack.Screen
          name="Commodity"
          component={Commodity}
          options={{
            headerShown:false
          }}
          />
         <Stack.Screen
          name="Indices"
          component={Indices}
          options={{
            headerShown:false
          }}
          />
         <Stack.Screen
          name="Positions"
          component={Positions}
          options={{
            headerShown:false
          }}
          />
         <Stack.Screen
          name="Holdings"
          component={Holdings}
          options={{
            headerShown:false
          }}
          />
         <Stack.Screen
          name="Bulk_Trade"
          component={Bulk_Trade}
          options={{
            headerShown:false
          }}
          />
         <Stack.Screen
          name="Closed"
          component={Closed}
          options={{
            headerShown:false
          }}
          />
        <Stack.Screen
          name='StockChart'
          component={StockChart}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      // <View>
      // <Cheakmodals/>
      // </View>
  )
}