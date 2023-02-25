import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from './styles'

const NewItemHeader = ({onChangeText, itemText, addItemToState, inputPlaceHolder, onPressIn, OnPressOut, isPressed}) => {
  return (
    <>
    <View style={styles.addItemInputContainer}>
      <TextInput placeholder="Ingrese un item" style={styles.input} onChangeText={onChangeText} value={itemText}/>
      <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed]} onPress={addItemToState} onPressIn={onPressIn} onPressOut={OnPressOut}>
          <Text style={styles.text}>Agregar</Text>
        </TouchableOpacity>
    </View>
    </>
  );
};

export default NewItemHeader;
