import { FlatList, StyleSheet, Text } from "react-native";

import Item from "../Item/Item";
import React from "react";
import {styles} from './styles'

const ItemList = ({ items, openModal, setBorderColor, boderColor }) => {
  return (
    <>
    <FlatList data={items} renderItem={(itemData) => {
        return <Item itemData={itemData} openModal={openModal} setBorderColor />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
    </>
  );
};

export default ItemList;
