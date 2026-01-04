import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';
import { Sendicon } from '../assets/icons';

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <Sendicon/>
    </TouchableOpacity>
  )
}

export default SendButton;

const styles = StyleSheet.create({
    circle:{height:s(46),
        width:s(46),
        borderRadius:s(40),
        backgroundColor:"#107AFF",
        justifyContent:"center",
        alignItems:"center"
    },
})