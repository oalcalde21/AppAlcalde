import { Modal as RNmodal, StyleSheet, Text, View } from "react-native";

import Button from "../Button/Button";
import React from "react";
import { styles } from "./styles";

const ModalIsReady = ({
  modalVisible,
  selectedItem,
  handleIsReady,
  handleIsReadyCancel,
  handleSetBorderColor,
}) => {
  return (
    <>
      <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Marcar como listo</Text>
            <Text style={styles.modalText}>
              ¿Desea marcar el item como listo{" "}
              <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
            </Text>
            <View style={styles.modalActions}>
              <Button
                styleButtonType={styles.buttonCancel}
                title="Cancelar"
                onPress={handleIsReadyCancel}
              />
              <Button
                styleButtonType={styles.buttonDelete}
                title="Marcar como listo"
                onPress={() => {
                  handleIsReady(selectedItem.id);
                  handleSetBorderColor("green");
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