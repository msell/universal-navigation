import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export const CaseDetailsScreen: React.FC<StackScreenProps<
  RootStackParamList,
  "CaseDetails"
>> = ({ route }) => {
  const { id } = route.params!;
  return (
    <View style={styles.container}>
      <Text>{`Case ${id}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#724CF9",
  },
});
