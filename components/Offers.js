import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native';
import funiture from '../constant/Funiture';

export default function Offers() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Offers</Text>
        <TouchableOpacity style={styles.link}>See all</TouchableOpacity>
      </View>

      <FlatList
        data={funiture}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Image
              source={item.imageSrc}
              style={styles.image}
              resizeMode="cover"
            />

            <View>  
             <Text style={styles.text}>{item.title}</Text>
             <Text style={styles.light}>{item.description}</Text>
            </View>            
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    gap: 10,
  },
  top: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    fontSize: 16,
    fontWeight: '400',
    color: '#909090',
  },
  category: {
    flex: 1,
    alignItems: 'start',
    margin: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'start',
  },
  light: {
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'start',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
});
