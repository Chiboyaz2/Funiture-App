import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Top from '../components/Top';

export default function Home() {
  return (
    <View style={styles.container}>
      <Top /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'start',
    padding: 20,
    width: '100%',
  },
});
