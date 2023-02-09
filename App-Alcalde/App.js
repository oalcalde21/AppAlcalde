import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import{ Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coder</Text>
      <Text>Bievenidos al primer estadio mundialista</Text>
      <Image source={require('./assets/gpc.png')} style={{width: 350, height: 250}}/>
      <StatusBar style="auto" />
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
});
