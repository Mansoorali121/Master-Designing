import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [modal, setmodal] = useState(false);

  return (
    <View
      style={{ backgroundColor: 'gold', flex: 1, justifyContent: 'center' }}
    >
      <Button title="Show Modal" onPress={() => setmodal(true)} />

      <Modal visible={modal} animationType="fade" transparent={true}>
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Text>Modal is Opened</Text>
          <Button title="Close" onPress={() => setmodal(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
