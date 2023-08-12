import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Status = (route, navigation) => {
  //name, image 객체를 받아서 parameter를 읽는다
  // const { name, image } = route.params;

  return (
    <SafeAreaView style={styles.statusSafeAreaView}>
      <StatusBar  backgroundColor={'black'} barStyle={'light-content'} />
      {/* grey Line */}     
      <View style={styles.greyLine} />  
      <View>
        <View style={styles.statusHeaderContainer}>
          <Image source={image} 
          style={styles.storyImage} />
        </View>
        <View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Status

const styles = StyleSheet.create({
  statusSafeAreaView: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center'
  },
  greyLine: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'grey',
    position: 'absolute',
    top: 18
  },
  statusHeaderContainer : {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },

})
