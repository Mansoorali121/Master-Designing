import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const HomeScreen = () => {
  return (
    <View  style={styles.container}>
      <Text style={styles.headertext}>Meditations</Text>
      <Text style={styles.dummytext}>Lorem Ispum is simply dummy text</Text>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{paddingTop:vs(50),paddingHorizontal:s(16)},
  headertext:{color:"#1D150F",fontSize:s(20),fontWeight:"semibold"},
  dummytext:{color:"#2C2016",fontSize:s(14),marginBottom:vs(16)},
})