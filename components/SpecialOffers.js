import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function SpecialOffers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Special Offers
      </Text>

      <View style={styles.offer}>
        <View style={styles.textbox}>
            <Text style={styles.heading}>
              20%
            </Text>

            <Text style={styles.discount}>
              Special discount
            </Text>

            <Text style={styles.text}>
              Get the special price for all products along this month
            </Text>
        </View>

        <Image
            source={require('../images/discount.jpeg')}
            style={styles.image}
            resizeMode="cover"
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'start',
    // justifyContent: 'start',
    // padding: 20,
    width: '100%',
    gap: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '600', 
  },

  offer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
  },

  textbox: {
    flexDirection: 'column',
    width: '40%',
    backgroundColor: '#F5F5F5',
    alignItems: 'start',
    gap: 3,
  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#C15005',
  },

  discount: {
    fontSize: 16,
    fontWeight: '600',
  },

  text: {
    fontSize: 11,
    fontWeight: '300',
  },

  image: {
    width: '55%',
    height: 100,
    borderRadius: 5,
  },
});
