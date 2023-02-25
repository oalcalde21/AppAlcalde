import { ItemList, Modal, NewItemHeader } from "./src/components";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Logo from "./src/components/Logo/Logo";
import {styles} from './styles';

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
  };

  const [isReady, setIsReady] = useState(false);

  const handleIsReady = () => {
    setIsPressed(true);
  };

  const handleIsReadyCancel = () => {
    setIsPressed(false);
  };  
  
  const [borderColor, setBorderColor] = useState('red');

  const handleSetBorderColor = () => {
    setBorderColor('red');
  };

  const openModal = (item) => {
    if (isReady){
    setSelectedItem(item);
    setModalVisible(true);
    }else{
      setModalVisible(false);
    }
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={styles.screen}>
      {/* ADDITEM COMPONENT */}
      <Logo/>
      <NewItemHeader onChangeText={onChangeText} itemText={itemText} addItemToState={addItemToState} onPressIn={handlePressIn} OnPressOut={handlePressOut} isPressed={isPressed}/>
      {/* LIST COMPONENT */}
      <ItemList items={items} openModal={openModal} setBorderColor borderColor />
      {/* MODAl COMPONENT */}
      <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
    </View>
  );
}
