import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Backarrow from '../components/Backarrow';
import { s, vs } from 'react-native-size-matters';
import Paymentmethod from '../components/Paymentmethod';
import PaymentList from "../components/PaymentList"

const Paymentscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Backarrow />
        <Text style={styles.headertitle}>Payment</Text>
      </View>
      {/* Payment method card */}
      {/* <Paymentmethod title="Cash" />
      <Paymentmethod isSelected={true} /> */}
      <PaymentList/>
    </View>
  );
};

export default Paymentscreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: vs(20), paddingHorizontal: s(16) },
  headertitle: { fontSize: s(17), color: '#181C2E', marginStart: s(12) },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(37),
  },
});
