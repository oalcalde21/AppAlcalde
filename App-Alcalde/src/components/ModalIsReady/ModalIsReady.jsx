import { Modal as RNmodal, StyleSheet, Text, View } from "react-native";

import Button from "../Button/Button";
import React from "react";
import {styles} from './styles'

const ModalIsReady = ({isReady, selectedItem, handleIsReady, handleIsReadyCancel, handleSetBorderColor}) => {
  return (
    <>
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Eliminar Item</Text>
          <Text style={styles.modalText}>
            ¿Desea Marcar el Item como listo{" "}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
          </Text>
          <View style={styles.modalActions}>
            <Button styleButtonType={styles.buttonCancel} title="Cancelar" onPress={handleIsReadyCancel}/>
            <Button styleButtonType={styles.buttonDelete} title="Marcar como Listo" onPress={() => {
                handleIsReady;
                handleSetBorderColor;
              }}
            />
          </View>
        </View>
      </View>
    </RNmodal>
    </>
  );
};

export default ModalIsReady;
