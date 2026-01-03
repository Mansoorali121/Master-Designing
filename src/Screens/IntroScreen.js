import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const IntroScreen = () => {
  return (
    <View style={{ flex: 1, alignContent: 'center' }}>
      <Image source={require('../assets/Logo.png')} />
      <Image
        source={require('../assets/mainlogo.png')}
        style={{ height: 200, width: 200, position: 'absolute' }}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
