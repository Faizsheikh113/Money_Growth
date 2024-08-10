import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthStack from './AuthStack'
import MainStack from './MainStack'
const Stack = createNativeStackNavigator();
const Router1=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {true?AuthStack(Stack):MainStack(Stack)}
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router1;