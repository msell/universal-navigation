import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import palette from "../styles/palette";

const ModalContents = () => (
  <View>
    <Text>
      Consectetur sit dolore ut mollit. Veniam dolore nostrud enim do. Id
      commodo dolor dolor sunt qui. Pariatur non cupidatat magna laboris officia
      nulla ex incididunt. Deserunt proident cupidatat nostrud dolor enim
      exercitation non labore exercitation qui voluptate. Eu consectetur sit
      adipisicing labore tempor aliquip. Qui consequat occaecat amet do cillum
      eiusmod non dolor dolore id cupidatat adipisicing. Pariatur cupidatat
      reprehenderit cillum occaecat proident qui laborum eu mollit. Amet tempor
      dolor nisi enim proident proident eu mollit officia eiusmod. Consectetur
      anim nulla ad consequat quis. Veniam nulla ad deserunt proident. Sunt sit
      consectetur eu aliqua veniam officia magna excepteur voluptate. Quis velit
      incididunt enim magna ex eu pariatur irure reprehenderit anim.
    </Text>
  </View>
);
export const CaseDetailsScreen: React.FC<StackScreenProps<
  RootStackParamList,
  "CaseDetails"
>> = ({ route, navigation }) => {
  const { id } = route.params!;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Case ${id}`}</Text>
      <View style={styles.button}>
        <Button
          title="Open Modal"
          onPress={() => navigation.navigate("Modal")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.lightBlue,
  },
  text: {
    fontSize: 30,
    color: "#fff",
    paddingBottom: 10,
  },
  button: {
    width: 200,
  },
});
