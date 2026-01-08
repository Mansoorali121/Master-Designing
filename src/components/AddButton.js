import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { Plusicon } from '../assets/icons';

const AddButton = () => {
  return (
    <View  style={{
        borderColor:"#F0F5FA",
        borderWidth:s(2),
        backgroundColor:"#fff",
        borderRadius:s(10) ,
        paddingVertical:vs(15),
        justifyContent:"center",
        alignItems:"center"  ,
        flexDirection:"row" }}>
            <Plusicon/>
      <Text style={{color:"#FF7622",fontSize:s(14),marginStart:s(10)}}>Add New</Text>
    </View>
  )
}

export default AddButton;

const styles = StyleSheet.create({})