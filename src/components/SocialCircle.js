import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';
import { Sendicon, Whatsapp } from '../assets/icons';

const SocialCircle = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <Whatsapp/>
    </TouchableOpacity>
  )
}

export default SocialCircle;

const styles = StyleSheet.create({
    circle:{height:s(46),
        width:s(46),
        borderRadius:s(40),
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:s(1),
        borderColor:"#E4E6E8"
    },
})