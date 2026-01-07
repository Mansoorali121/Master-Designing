import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CashICon } from '../assets/icons';
import { s, vs } from 'react-native-size-matters';

const Paymentmethod = ({ isSelected = false }) => {
  return (
    <View style={{ width: s(85) }}>
        {isSelected && <View style={styles.checkmarkcontainer}>
            </View>}
      <View style={[styles.card, isSelected && styles.selectedcardstyle]}>
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
  selectedcardstyle: {
    backgroundColor: '#fff',
    borderWidth: s(2),
    borderColor: '#FF7622',
  },
  checkmarkcontainer:{
    height:s(24),
    width:s(24),
    borderRadius:s(12),
    borderWidth:s(2),
    borderColor:"#fff",
    backgroundColor:"#FF7622",
    position:"absolute",
    zIndex:1,
    top:s(-10),
    right:s(-10)
  },
});
