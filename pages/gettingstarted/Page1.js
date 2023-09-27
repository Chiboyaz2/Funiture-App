import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page1() {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.items}>
          <Image
            source={require('../../images/funiture.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.text}>
            <Text style={styles.heading}>
              High quality product for you
            </Text>

            <Text style={styles.paragrah}>
              We Offer you the best services at the lowest 
              price and the best guarantee
            </Text>
          </View>

          

          <View style={styles.slide}>
            <TouchableOpacity style={styles.pageOneButton}>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pageButton}>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pageButton}>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('page2')}>
            <Text style={styles.buttonWhite}>Next</Text>
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

  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 16,
    right: 16,
  },
  buttonText: {
    color: '#999A9A', 
    fontSize: 16,
    fontWeight: 'medium',
    letterSpacing: 1,
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
