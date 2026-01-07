import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  CashICon,
  MasterCardIcon,
  PaypalIcon,
  VisaIcon,
} from '../assets/icons';
import Paymentmethod from './Paymentmethod';
import { s, vs } from 'react-native-size-matters';

const Paymentmethods = [
  { label: 'Cash', icon: <CashICon /> },
  { label: 'Visa', icon: <VisaIcon /> },
  { label: 'MasterCard', icon: <MasterCardIcon /> },
  { label: 'Paypal', icon: <PaypalIcon /> },
];

const PaymentList = () => {
    
    // Select Item
    const [selectedMethod,setSelectedMethod] = useState("Cash");
  return (

    <View>
      <FlatList
        data={Paymentmethods}
        keyExtractor={item => item.label}
        renderItem={({ item }) => (
          <Paymentmethod title={item.label} icon={item.icon} 
          onPress={()=>setSelectedMethod(item.label)}
          isSelected={selectedMethod === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(12), paddingHorizontal: s(16),paddingTop:vs(10) }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
