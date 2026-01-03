import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {s, vs} from "react-native-size-matters"
const App = () => {
  return (
    <View style={{backgroundColor:"#fff",flex:1}}>
     <View style={{width:s(300),height:vs(600),backgroundColor:"tomato"
     }}>

     </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})