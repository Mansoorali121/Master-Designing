import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CashICon } from '../assets/icons';
import { s, vs } from 'react-native-size-matters';

const Paymentmethod = () => {
  return (
    <View style={{width:s(85)}}>
      <View style={styles.card}>
        <CashICon />
      </View>
      <Text style={styles.cashtext}>Cash</Text>
    </View>
  );
};

export default Paymentmethod;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F5FA',
    borderRadius: s(10),
    width: s(85),
    height: vs(72),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cashtext: {
    fontSize: s(14),
    color: '#464E57',
    marginTop: vs(14),
    textAlign: 'center',
  },
});
