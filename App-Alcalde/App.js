import { Button, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useEffect, useState} from 'react';

import{ Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {styles} from './styles'

export default function App() {

  const [itemText, setItemText] = useState(''); //State para los inputs, entre las comillas va el estado inicial
  const [items, setItems] = useState([]); //State de los Items
  
//Cada vez que escriba algo llama set del itemtext

  useEffect(() => {
    console.log('items', items);
  }, [items])
  
  const onChangeText = (text) => { //Cadena de Texto
    setItemText(text)//Setea el itemText con el texto que le paso
  }

  const addItem = () => {
    setItems(oldArray => [...oldArray, {id: Date.now(), value: itemText}]) // los items que ya tengo les voy a agregar un nuevo item, con los ... se agara todo el array y agrega dentro del nuevo
    setItemText(''); //limpio el input
  }
  
const [modalVisible, setModalVisible] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const removeItem = (id) => {      
  setModalVisible(!modalVisible); //Cierro el modal
  setItems((oldArry) => oldArry.filter((item) => item.id !== id)); //Filta el array con todos los elementos menos el que tiene el id que le paso
  setSelectedItem(null); //Limpio el item seleccionado
};

const selectItem = (item) => {
  setSelectedItem(item); //Guardo el item seleccionado
  setModalVisible(true); //Abro el modal
};

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
          <TextInput 
                  placeholder='Item de lista' 
                  style={styles.input} 
                  onChangeText={(onChangeText)} 
                  value={itemText}
          />
          <Button title='Agregar'
                  onPress={addItem}
          />
      </View>
      {/* Map para Item de la lista */}
      {/* <View style={styles.itemContainer}> */}
        {/* {items.map((item) => {
          return (
          <Text key={item.id} style={styles.item}>
            {item.value}
          </Text>);
        })} */}
      <FlatList
        data={items}
        renderItem={(itemData) => ( // Este Render item hace lo mismo que el map
          <Pressable style={styles.contentList} onPress={()=>{
            selectItem(itemData.item)
          }}>
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
          <View style={styles.modalContainer}>
            <View styles={styles.modalTitle}>
              <Text styles={styles.modalText}>Eliminar Item</Text>
            </View>
            <View styles={styles.modalContent}>
              <Text styles={styles.modalText}>¿Está seguro que desea eliminar el item {selectedItem?.value}?</Text>
              </View>
              <View styles={styles.modalActions}>
                <Button title="Cancelar" onPress={()=>{
                  setModalVisible(false)
                  setSelectedItem(null);
                }}/>
                <Button title="Eliminar" onPress={()=>{
                  removeItem(selectedItem.id)
                }}/>
              </View>
          </View>
        </Modal>
    </View>
  );
}

