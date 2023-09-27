import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page3() {
  const navigation = useNavigation();


  return (
   <View style={styles.container}>
    <View style={styles.items}>
      <Image
        source={require('../../images/chair.jpeg')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.text}>
        <Text style={styles.heading}>
         Receive notifications of all new
        </Text>

        <Text style={styles.paragrah}>
         You can receive alerts about every new product
          and when there are offers
        </Text>
      </View>

      

      <View style={styles.slide}>
        <TouchableOpacity style={styles.pageButton}>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pageButton}>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pageOneButton}>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonWhite}>Get Started</Text>
      </TouchableOpacity>
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  items:{
    backgroundColor: '#fff',
    padding: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  image: {
    width: '100%',
    height: 150,
  },
  text:{ 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  heading: {
    color: '#373838', 
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  paragrah: {
    color: '#373838', 
    fontSize: 15,
    fontWeight: 'normal',
    letterSpacing: 1,
    textAlign: 'center',
  },

  nextButton: {
    backgroundColor: '#D25705',
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWhite: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'semi-bold',
    letterSpacing: 1,
  },
  pageButton: {
    width: 10,
    height: 10,
    backgroundColor: '#E3A579',
    borderRadius: '50%',
  },
  pageOneButton: {
    width: 70,
    height: 10,
    backgroundColor: '#D25705',
    borderRadius: 15,
  },
  slide:{
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  }
});
