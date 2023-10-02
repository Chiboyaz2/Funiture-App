import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';

export default function Search() {
    const [search, setSearch] = useState('');

    const handleLogin = () => {
        console.log('Search:', search);
      };


  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchOutlinedIcon/>
        
        <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={text => setSearch(text)}
            value={search}
            keyboardType="search"
            autoCapitalize="none"
        /> 
            
      </View>

      <AddRoadOutlinedIcon style={styles.icon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingVertical: 5,
    gap: 5,
    borderRadius: 5,
    width: '90%',
    color: '#909090',
  },

  input: {
    color: '#909090',
    fontSize: '18',
    fontWeight: '400',
    width: '90%',
  }
});
