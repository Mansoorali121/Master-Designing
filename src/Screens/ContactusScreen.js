import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackArrow from '../components/Backarrow';

const ContactusScreen = () => {
  return (
    <View style={styles.container}>
      
      <BackArrow />
      {/* <UserAvatar /> */}
    </View>
  );
};

export default ContactusScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft:20
   
  },
});
