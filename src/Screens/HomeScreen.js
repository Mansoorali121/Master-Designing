import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Toptabs from '../components/Toptabs';
import MeditationCard from '../components/MeditationCard';
import { dummyData } from '../data/data';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Meditations</Text>
      <Text style={styles.dummytext}>Lorem Ispum is simply dummy text</Text>
      <Toptabs />
      {/* <MeditationCard/> */}
      {/* Flatlist  */}
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => (
          <MeditationCard
            imageUrl={item.image}
            title={item.title}
            date={item.date}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { paddingTop: vs(50), paddingHorizontal: s(16) },
  headertext: { color: '#1D150F', fontSize: s(20), fontWeight: 'semibold' },
  dummytext: { color: '#2C2016', fontSize: s(14), marginBottom: vs(16) },
});
