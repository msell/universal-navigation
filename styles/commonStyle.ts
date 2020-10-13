import { StyleSheet } from "react-native";
import palette from "./palette";

export default StyleSheet.create({
  h1: {
    color: palette.white,
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Bangers_400Regular",
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
