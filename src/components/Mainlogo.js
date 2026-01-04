import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Mainlogo = () => {
  return (
    <View>
      <Image source={require('../assets/Logo.png')} />
    </View>
  );
};

export default Mainlogo;

const styles = StyleSheet.create({
  
});
