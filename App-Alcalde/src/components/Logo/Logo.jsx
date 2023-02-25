import { FlatList, StyleSheet, Text, View } from "react-native";

import{ Image } from 'react-native';
import Item from "../Item/Item";
import React from "react";
import {styles} from './styles'

const Logo = () => {
  return (
    <>
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.align}/>
    </View>
    </>
  );
};

export default Logo;
