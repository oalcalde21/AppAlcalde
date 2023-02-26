import { FlatList, StyleSheet, Text } from "react-native";

import Item from "../Item/Item";
import React from "react";
import { styles } from "./styles";

const ItemList = ({ items, openModal, setBorderColor, borderColor }) => {
  const handleItemPress = (item) => {
    if (item.borderColor === "green") {
      // el borde es verde, mostrar el modal de eliminación
      openModal("delete", item);
    } else {
      // el borde es rojo, mostrar el modal de listo
      openModal("isReady", item);
    }
  };

  return (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item
            itemData={item}
            openModal={handleItemPress}
            setBorderColor={setBorderColor}
            borderColor={item.borderColor}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default ItemList;