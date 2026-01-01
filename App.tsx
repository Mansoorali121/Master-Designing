import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{    color: Platform.OS === 'android' ? '#fff' : '#0000',
}}>
        {' '}
        SO{' '}
        {Platform.OS === 'android'
          ? 'This is Android Device'
          : 'This is Ios Device '}
          
      </Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'android' ? '#4d58d1ff' : '#0000',
  },
});
