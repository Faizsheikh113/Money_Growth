import { StyleSheet, View, Text, Dimensions } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <View style={styles.cocontainer}>
          <View style={styles.box1}>
            <Text>hyy</Text>
          </View>
          <View style={styles.box2}>
            <Text>hyyyyyy</Text>
          </View>
          <View style={styles.box3}>
            <Text>hyyyyyy</Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  cocontainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: windowHeight * 0.05, 
  },
  box1: {
    backgroundColor: '#AFD3E2',
    height: windowHeight * 0.27, 
    width: windowWidth * 0.9, 
    borderRadius: 20,
    padding: windowWidth * 0.05, 
    marginBottom: windowHeight * 0.015, 
  },
  box2: {
    backgroundColor: '#FFEADD',
    height: windowHeight * 0.27,
    width: windowWidth * 0.9,
    borderRadius: 20,
    padding: windowWidth * 0.05,
    marginBottom: windowHeight * 0.015,
  },
  box3: {
    backgroundColor: '#C4D7B2',
    height: windowHeight * 0.27,
    width: windowWidth * 0.9,
    borderRadius: 20,
    padding: windowWidth * 0.05,
  },
});

export default Profile;