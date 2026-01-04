import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Backarrow } from '../assets/icons';

const BackArrow = () => {
  return (
    <TouchableOpacity>
      <Backarrow/>
    </TouchableOpacity>
  )
}

export default BackArrow;

const styles = StyleSheet.create({})