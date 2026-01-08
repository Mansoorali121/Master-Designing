import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { Card } from '../assets/icons';

const BankCard = () => {
  return (
    <View style={styles.container}>
        <Card/>
      <Text style={{
        color:"#32343E",
        fontSize:s(16),
        fontWeight:"bold",
        marginTop:vs(17)
      }}>No master card added</Text>
      <Text style={{}}>You can add master card and save it for later</Text>
    </View>
  )
}

export default BankCard;

const styles = StyleSheet.create({
    container:{backgroundColor:"#F7F8F9",
        // height:vs(257),
        borderRadius:s(10),
        marginTop:vs(25),
        justifyContent:"center",
        alignItems:"center",
        paddingTop:vs(35)
    },
})