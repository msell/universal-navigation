import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export const CaseDetailsScreen: React.FC<StackScreenProps<
  RootStackParamList,
  "CaseDetails"
>> = ({ route, navigation }) => {
  const { id } = route.params!;
  return (
    <View style={styles.container}>
      <Text>{`Case ${id}`}</Text>
      <Button title="Open Modal" onPress={() => navigation.navigate("Modal")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#724CF9",
  },
});
