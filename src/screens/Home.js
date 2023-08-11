import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, Feather } from '@expo/vector-icons';

const Home = () => {
  return (
    <SafeAreaView>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <View style={styles.header}>
          <View>
            <Text style={styles.instagramText}>Instagram</Text>
          </View>
          <View style={styles.headerIconArea}>
            <FontAwesome name="plus-square-o" style={styles.headerIcon}/>
            <Feather name="navigation" style={styles.headerIcon}/>
          </View>
        </View>
        <ScrollView>
          {/* 내용 */}
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  instagramText: {
    fontSize: 25,
    fontWeight: '500',
  },
  headerIconArea: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  }, 
   headerIcon: {
    fontSize: 24,
    paddingHorizontal: 10
   }
});
