import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const buttonpress = () => {
    Alert.alert("Button Pressed");
    setName("");
    setPassword("");
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://pikaso.cdnpk.net/private/production/2923865287/FfhrahOfbvJN3ePoc3ASLY2Am34cNzkomaCwFmlb.jpg?token=exp=1767744000~hmac=ba2ca455c6bcd2d04de87490c52256957823482a6fbea15db7c7ba29ef1f2624&preview=true&size=420',
      }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View
        style={{
          backgroundColor: 'white',
          height: 300,
          width: 300,
          borderRadius: 20,
        }}
      >
        {/* TextInput Component */}

        <View style={{ marginTop: 20, marginLeft: 20, gap: 30 }}>
          <TextInput
            placeholder="Enter Name: "
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Enter Password: "
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable style={styles.btn} onPress={buttonpress}>
            <Text style={styles.btntext}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    width: '80%',
    borderRadius: 10,
    marginLeft: 20,
    paddingLeft: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90caf9',
    width: '80%',
    height: '25%',
    marginLeft: 20,
    borderRadius: 20,
  },
  btntext: { fontWeight: 'bold', fontSize: 14 },
});
