import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      <View style={{ backgroundColor: 'black', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'salmon', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'blue', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
