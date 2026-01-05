import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SendButton from '../components/SendButton';
import SocialCircle from '../components/SocialCircle';
import { s, vs } from 'react-native-size-matters';
import { Sendicon, Whatsapp } from '../assets/icons';

const SocialSection = ({title}) => {
  return (
    <View style={styles.container}>
      {/* <SocialCircle /> */}  
      <View style={styles.circle}>
            <Whatsapp/>
          </View>

      <Text style={styles.socialtext}>{title}</Text>
      {/* Social Names */}
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6E8',
    paddingVertical: vs(15),
  },
  socialtext: {
    marginStart: s(14),
    flex: 1,
    color: '#8083A3',
    fontSize: s(12),
  },
  circle:{height:s(46),
        width:s(46),
        borderRadius:s(40),
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:s(1),
        borderColor:"#E4E6E8"
    },
});
