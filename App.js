import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routers from './router';
import Bottom from './bottomNavigator';

export default function App() {
  return (
    // <Routers />
    <Bottom />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'start',
//     justifyContent: 'center',
//   },
// });
