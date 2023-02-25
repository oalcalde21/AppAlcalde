import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";
import {styles} from './styles'

const NewItemHeader = ({onChangeText, itemText, addItemToState, inputPlaceHolder}) => {
  return (
    <>
    <View style={styles.addItemInputContainer}>
      <TextInput placeholder="Ingrese un item" style={styles.input} onChangeText={onChangeText} value={itemText}/>
      <Button title="Agregar" onPress={addItemToState} />
    </View>
    </>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});