import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addItemInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  button: {
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2296f3',
    transform: [{ scale: 1 }],
    transition: 'transform 0.2s',
  },
  buttonPressed: {
    transform: [{ scale: 1.1 }],
    backgroundColor: '#1766a6',
  },
  text:{
    color: 'white',
  }
  });