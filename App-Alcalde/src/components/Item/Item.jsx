import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'

const Item = ({ itemData, openModal }) => {
  return (
    <>
    <Pressable style={styles.itemContainer} onPress={() => {
        openModal(itemData.item);
      }}
    >
      <Text style={styles.item}>{itemData.item.value}</Text>
    </Pressable>
    </>
  );
};

export default Item;
