
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Button = (props) => {
    const filledBgColor=props.color || COLORS.primary;
    const outLinedColor=COLORS.white;
    const bgColor=props.filled ? filledBgColor : outLinedColor;
    const textColor=props.filled ? COLORS.white: COLORS.primary;

  return (
   <TouchableOpacity 
   style={{
        ...styles.button,
        ...{backgroundColor:bgColor},
        ...props.style
   }}
    onPress={props.onPress}>
    <Text style={{fontSize:18, ...{color:textColor}}}>{props.title}</Text>

   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        paddingBottom:16,
        paddingVertical: 10,
       color:COLORS.white,
        borderColor:COLORS.primary,
        borderWidth:2,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        width:300,
        alignItems:'center',
        left:10,
    }
})
export default Button