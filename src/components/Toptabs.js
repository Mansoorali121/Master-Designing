import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';

const Toptabs = () => {
    //  Tabs Array
    const Tabsarray = ["Live","Recorded"]
    // Tabs Active Color
    const Active_Bg = "#75563B"
    //  Active Text
    const Active_Text = "#FFFFF"
    //  InActive Text
    const InActive_Text = "#2C2016"
  return (
    <View style={styles.container}>
      <Text>Toptabs</Text>
    </View>
  )
}

export default Toptabs;

const styles = StyleSheet.create({
    container:{backgroundColor:"red",borderRadius:s(12)},
})