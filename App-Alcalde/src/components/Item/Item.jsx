import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'

const Item = ({ itemData, openModal, setBorderColor, borderColor }) => {
  return (
    <>
    <Pressable style={[styles.itemContainer, { borderColor }]} onPress={() => {
        if(borderColor === 'red'){
          openModal(itemData.item);
        }else{
          
        }
        
      }}
    >
      <Text style={styles.item}>{itemData.item.value}</Text>
    </Pressable>
    </>
  );
};

export default Item;
