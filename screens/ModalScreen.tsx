import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

interface ModalScreenProps {}

// https://reactnavigation.org/docs/modal/
export const ModalScreen: React.FC<
  ModalScreenProps & StackScreenProps<RootStackParamList, "Modal">
> = ({ navigation, children }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      {children}
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D0DE",
  },
});
