import { View, Text, StyleSheet,Image,Dimensions } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Header = ({props}) => {
  return (
    <View style={styles.header}>
      <Image 
        style={styles.logo}
        source={require("../assets/HeadLogo.jpeg")}/>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  header: {
    // backgroundColor: COLORS.BottelGreen,
    // padding: 10,
    alignItems: 'center',
    // width:550,
    marginTop:32
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  logo: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.6,
  },
});

export default Header