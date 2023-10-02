import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import funiture from '../constant/Funiture';

export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity style={styles.link}>See all</TouchableOpacity>
      </View>

      <ScrollView horizontal={true} style={styles.categories} showsHorizontalScrollIndicator={false}>
        {funiture.map((file, index) => (
          <View key={index} style={styles.category}>
            <Image
              source={file.imageSrc}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>{file.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
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
    marginRight: 8,
    alignItems: 'center',
    gap: 5,
    width: 100,
  },

  text: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 50,
    borderRadius: 5,
  },
});
