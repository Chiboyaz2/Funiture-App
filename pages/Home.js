import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Top from '../components/Top';
import Search from '../components/Search';
import SpecialOffers from '../components/SpecialOffers';
import Categories from '../components/Categories';
import Offers from '../components/Offers';

export default function Home() {
  return (
    <View style={styles.container}>
      <Top /> 
      <Search /> 
      <SpecialOffers />
      <Categories/>
      <Offers/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'start',
    // justifyContent: 'start',
    padding: 20,
    width: '100%',
    gap: 20,
  },
});
