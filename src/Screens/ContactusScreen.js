import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackArrow from '../components/Backarrow';
import { s, vs } from 'react-native-size-matters';

import SocialSection from '../components/SocialSection';

const ContactusScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrow />
        <UserAvatar />
      </View>

      {/* Sociel Section Here */}
      <SocialSection />
    </View>
  );
};

export default ContactusScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(30),
    paddingHorizontal: s(17),
  },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
});
