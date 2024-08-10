import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Dimensions } from 'react-native';
const Wallet = ({navigation}) => {

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
        source={require('../assets/back2.jpg')} 
        style={styles.backgroundImage}
      >
    <SafeAreaView style={{flex:1,}}
    
    >
        <View style={{alignItems:'center'}}>
     <View 
     style={{
        height: calculateHeightPercentage(8),
        width: calculateWidthPercentage(90),
        backgroundColor:'#B1CADB',
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        marginTop: calculateHeightPercentage(4),
        alignItems: "center",
        justifyContent:'center'
    }}>
      <Text 
       style={{
        fontSize: 16,
        fontWeight: "bold",
        }}
      
      
      >Current Net Worth: $ 1,240.0000</Text>
     </View>

     <View
     style={{
        height: calculateHeightPercentage(20),
        width: calculateWidthPercentage(90),
        backgroundColor:'#D0D7DD',
        
    
        }}
     >
        <View style={{
            flexDairection:'column'
        }}>
            <Text 
            style={{
           marginLeft:10,
           marginTop:5
             }}
        >Availble Wallet Balance</Text>
            <Text
            style={{
                marginLeft:10,
                marginTop:5
                  }}
            >Inevest Ammount </Text>
            <View
            style={{
        height: calculateHeightPercentage(4),
        width: calculateWidthPercentage(30),
        backgroundColor:'green',
        borderRadius:10,
        marginLeft:10,
        marginTop:10
        
        }}
            >
                <Text style={{Color:'white',margin:3}}>Tottle/Profit</Text>
            </View>
            
        </View>


     </View>
     </View>

    </SafeAreaView>
    </ImageBackground>
  )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: windowWidth,
        height: windowHeight,
      },

})

export default Wallet