import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <Text style={styles.textheading} numberOfLines={4}>
        Lorem Ipsum dolor sit
        <Text
          style={styles.textlink}
          onPress={() => Alert.alert('Button Pressed ')}
        >
          Press Here
        </Text>
        amet, consectetur adisipiscing elit, sed do eiusmod tempor incididunt ut
        lahore labore et dolore magna aliqua.
      </Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  text: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1b241f',
  },
  textheading: { fontSize: 20, textAlign: 'justify' },
  textlink: { color: 'red', textDecorationLine: 'underline' },
});
