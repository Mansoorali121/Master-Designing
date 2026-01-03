import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <ImageBackground
      source={{uri:"https://pikaso.cdnpk.net/private/production/2923865287/FfhrahOfbvJN3ePoc3ASLY2Am34cNzkomaCwFmlb.jpg?token=exp=1767744000~hmac=ba2ca455c6bcd2d04de87490c52256957823482a6fbea15db7c7ba29ef1f2624&preview=true&size=420"}}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ backgroundColor: 'white', height: 300, width: 300 , borderRadius:20}}>

        <Text style={{textAlign:"center",top:20}}> Hello World</Text>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({});
