import { StyleSheet } from "react-native";
import palette from "./palette";

export default StyleSheet.create({
  h1: {
    color: palette.white,
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#fff",
    shadowColor: "#222",
    shadowRadius: 1,
    height: 40,
    width: 200,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
});
