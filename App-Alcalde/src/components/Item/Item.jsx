import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import { styles } from "./styles";

const Item = ({ itemData, openModal, setBorderColor, borderColor }) => {
  const handlePress = () => {
    if (borderColor === "red") {
      openModal(itemData);
    } else {
      setBorderColor("green");
    }
  };

  return (
    <>
      <Pressable
        style={[styles.itemContainer, { borderColor }]}
        onPress={handlePress}
      >
        <Text style={styles.item}>{itemData.value}</Text>
      </Pressable>
    </>
  );
};

export default Item;
