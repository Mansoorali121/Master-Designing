import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CashICon } from '../assets/icons';
import { s, vs } from 'react-native-size-matters';
import { SVGComponent } from '../assets/icons';
const Paymentmethod = ({ isSelected = false ,title, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
        {isSelected && <View style={styles.checkmarkcontainer}>
          <SVGComponent/>
            </View>}
      <View style={[styles.card, isSelected && styles.selectedcardstyle]}>
        {icon}
      </View>
      <Text style={styles.cashtext}>{title}</Text>
    </TouchableOpacity>
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
    top:s(-8),
    right:s(-8),
    justifyContent:"center",
    alignItems:"center"
  },
});
