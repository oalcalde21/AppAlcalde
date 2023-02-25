import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'

const Button = ({styleButtonType, onPress, title}) => {
  return (
    <>
    <Pressable style={[styles.button, styleButtonType]} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
    </>
  );
};

export default Button;
