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
      {/* Contact Us Text */}
      <Text style={styles.screentitle}>Contat Us</Text>

      {/* Sociel Section Here */}
      <View style={styles.socialContainer}>
        <Text style={styles.socialtext}>Social Media Platforms</Text>
        <SocialSection  title="WhatsApp" />
        <SocialSection   title="Twitter"/> 
        <SocialSection   title="TikTok"/> 
        <SocialSection  title="SnapChat" /> 
        <SocialSection   title=""/>
      </View>
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
  socialContainer: {
    backgroundColor: '#F5F5FA',
    borderRadius: s(14),
    paddingHorizontal: s(20),
    marginVertical: vs(16),
    marginTop: vs(22),
  },
  socialtext: { fontSize: s(16), color: '#0000', fontWeight: 'semibold' },
  screentitle: {
    fontSize: s(32),
    color: '#0000',
    fontWeight: 'semibold',
    marginTop: vs(20),
    marginStart: s(19),
  },
});
