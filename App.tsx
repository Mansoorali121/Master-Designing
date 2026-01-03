import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  const deviceheight = Dimensions.get("screen").height;
  const devicewidth = Dimensions.get("screen").width;
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      {/* Device Height wtith Percentage Method */}
      <View style={{height:deviceheight/2,width:devicewidth/1,backgroundColor:"black"}}>
        {/* Now try Dimenstions */}


      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})