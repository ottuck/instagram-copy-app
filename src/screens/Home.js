import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, Feather } from '@expo/vector-icons';
import Stories from '../components/Stories';

const Home = () => {
  return (
    <SafeAreaView>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <View style={styles.homeHeader}>
          <View>
            <Text style={styles.instagramText}>Instagram</Text>
          </View>
          <View style={styles.homeHeaderIconArea}>
            <FontAwesome name="plus-square-o" style={styles.homeHeaderIcon}/>
            <Feather name="navigation" style={styles.homeHeaderIcon}/>
          </View>
        </View>
        <ScrollView>
          <Stories />

        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  homeHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  instagramText: {
    fontSize: 25,
    fontWeight: '500',
  },
  homeHeaderIconArea: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  }, 
  homeHeaderIcon: {
    fontSize: 24,
    paddingHorizontal: 10
   }
});
