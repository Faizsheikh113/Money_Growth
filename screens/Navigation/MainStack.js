import { View, Text } from 'react-native'
import React from 'react'
import { Forget, Home, Header } from './Index'
import {Profile} from './Index'
import {Pages} from './Index'

export default function(Stack){
    return(
        <>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () =><Header name='Home'/>,
            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
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
            headerTitle: () =><Header name='policy'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}
          />
           <Stack.Screen
          name="pages"
          component={Pages}
          options={{
            headerTitle: () =><Header name='pages'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}
          />
          <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerTitle: () =><Header name='Notifications'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}
          />
           <Stack.Screen
          name="rewards"
          component={Rewards}
          options={{
            headerTitle: () =><Header name='Rewards'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}
          />
           <Stack.Screen
          name="referral"
          component={Referral}
          options={{
            headerTitle: () =><Header name='Referral'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}/>
           <Stack.Screen
          name="ProfileUpdate"
          component={ProfileUpdate}
          options={{
            headerTitle: () =><Header name='Update'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}/>
          <Stack.Screen
          name="contact"
          component={Contact}
          options={{
            headerTitle: () =><Header name='Contact'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}/>
          <Stack.Screen
          name="AddBankAccount"
          component={AddBankAccount}
          options={{
            headerTitle: () =><Header name='Add Bank Account'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}
          />
           <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            headerTitle: () =><Header name='Profile'/>,
           

            headerstyle:{
              height:150,
              color:'black',
              backgroundColor:'red',
              shadowColor:'#000',
              elevation:25
            }
          }}
          />
        </>
    )
}