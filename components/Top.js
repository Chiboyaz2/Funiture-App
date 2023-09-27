import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Top() {
  return (
    <View style={styles.container}>
        <View style={styles.location}>
            <LocationOnOutlinedIcon style={styles.icon}/>

            <Text style={styles.text}>
                Gaza, Palestine
            </Text>
        </View>
        
        <View style={styles.location}>
            <ShoppingCartOutlinedIcon style={styles.icon}/>
            <NotificationsOutlinedIcon style={styles.icon}/>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
     width: '100%',
  },
  location: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  }
});
