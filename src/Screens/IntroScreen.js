import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Mainlogo from '../components/Mainlogo';
import SunLogo from '../components/SunLogo';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Mainlogo />
      {/* <SunLogo style={styles.sunimage} /> */}
      <Image
        style={styles.sunimage}
        source={require('../assets/mainlogo.png')}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunimage: {
    height: 200,
    width: 200,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
