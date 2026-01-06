import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { VideoIcon } from '../assets/icons';

const Phone_width = Dimensions.get("window").width

const card_width = (Phone_width - s(14) * 3) / 2

const MeditationCard = ({imageUrl,title,date}) => {
  return (
    <ImageBackground
      style={styles.card}
      imageStyle={styles.image}
      source={{
        uri: imageUrl
      }}
    >
      {/* Over Lay View */}
      <View style={styles.overlay} />
      {/* Live Bedge */}
      <View style={styles.livebedge}>
        <Text style={styles.badgetext}>Live</Text>
      </View>
      <View style={styles.cardcontent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <VideoIcon />
          <Text style={styles.datetext}> {date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  card: {
    height: vs(141),
    width: card_width,
    borderRadius: s(12),
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.7 },
  cardcontent: { position: 'absolute', left: s(10), bottom: s(10) },
  title: { color: '#fff', fontSize: s(12), fontWeight: 'semibold' },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  datetext: {
    fontSize: s(12),
    fontWeight: 'semibold',
    color: '#fff',
    marginStart: s(7),
  },
  livebedge: {
    backgroundColor: '#E41111',
    height: vs(22),
    width: vs(39),
    borderRadius: s(90),
    position: 'absolute',
    right: s(10),
    top: vs(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgetext: {
    color: '#fff',

    fontWeight: 'semibold',
    fontSize: s(11),
  },
});
