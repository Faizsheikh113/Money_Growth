import { View, Text } from 'react-native'
import React from 'react'
import { Forget, Pages, Welcome } from './Index'
import { Login } from './Index'
import { Sign } from "./Index"
export default function(Stack){
    return(
        <>
            <Stack.Screen name='welcome' component={Welcome}
                options={{
                    headerShown:false
                }}    
            />
            <Stack.Screen name='login' component={Login}
                options={{
                    headerShown:false
                }}  
            />
            <Stack.Screen name='sign' component={Sign}
                options={{
                    headerShown:false
                }} 
            />
            <Stack.Screen name='forget' component={Forget}
                options={{
                    headerShown:false
                }} 
            />
            <Stack.Screen name='pages' component={Pages}
                options={{
                    headerShown:false
                }} 
            />
        </>
    )
}