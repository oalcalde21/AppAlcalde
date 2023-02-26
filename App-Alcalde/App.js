import { ItemList, Modal, ModalDelete, ModalIsReady, NewItemHeader } from "./src/components";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Logo from "./src/components/Logo/Logo";
import {styles} from './styles';

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [borderColor, setBorderColor] = useState('red');

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
  }; 

  const openModal = (item) => {
    setSelectedItem(item);
    if (borderColor === 'red') {
      setModalVisible(true);
    } else {
      setBorderColor('green');
    }
  };

  const onCancelModal = () => {
    setModalVisible(false);
  };

  const onDeleteModal = (id) => {
    setModalVisible(false);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const handleIsReadyCancel = () => {
    setBorderColor('red');
    setSelectedItem(null);
    setModalVisible(false);
  }

  const handleIsReady = () => {
    setBorderColor('green');
    setSelectedItem(null);
    setModalVisible(false);
  }

  const handleSetBorderColor = () => {
    setBorderColor('green');
    setSelectedItem(null);
  }

  const handleDeleteItem = () => {
    if (borderColor === 'red') {
      setModalVisible(true);
    } else {
      setModalVisible(false);
      setItems((oldArry) => oldArry.filter((item) => item.id !== selectedItem.id));
      setSelectedItem(null);
      setBorderColor('red');
    }
  }

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
      <ItemList items={items} openModal={openModal} setBorderColor={setBorderColor} borderColor={borderColor}/>
      {/* MODAL COMPONENTS */}
      {borderColor === 'red' ? (
        <ModalDelete modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={handleDeleteItem}/>
      ) : (
        <ModalIsReady modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={handleIsReadyCancel} onIsReady={handleIsReady} onSetBorderColor={handleSetBorderColor}/>
      )}
    </View>
  );
}
