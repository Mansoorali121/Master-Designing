import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const SunLogo = () => {
  return (
    <View>
      <Image source={require('../assets/mainlogo.png')} />
    </View>
  );
};

export default SunLogo;

const styles = StyleSheet.create({});
