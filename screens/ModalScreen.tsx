import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface ModalScreenProps {}

// https://reactnavigation.org/docs/modal/
export const ModalScreen: React.FC<ModalScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
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
