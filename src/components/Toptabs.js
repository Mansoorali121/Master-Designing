import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const Toptabs = () => {
  //  Tabs Array
  const Tabsarray = ['Live', 'Recorded'];
  // Tabs Active Color
  const Active_Bg = '#75563B';
  //  Active Text
  const Active_Text = '#FFFFF';
  //  InActive Text
  const InActive_Text = '#2C2016';

  const [activetab, setActivetab] = useState('Recorded');

  return (
    <View style={styles.container}>
      {Tabsarray.map(tabname => {
        return (
          <TouchableOpacity
            style={[
              styles.tabs,
              activetab === tabname && { backgroundColor: Active_Bg },
            ]}
          >
            <Text >{tabname}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Toptabs;

const styles = StyleSheet.create({
  container: {
    borderRadius: s(12),
    flexDirection: 'row',
    backgroundColor: '#F5F5F4',
    height: vs(48),
    alignItems: 'center',
    padding: s(4),
  },
  tabs: {
    // backgroundColor: 'red',
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
