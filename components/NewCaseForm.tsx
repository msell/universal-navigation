import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import commonStyle from "../styles/commonStyle";
interface NewCaseFormProps {}

export const NewCaseForm: React.FC<NewCaseFormProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TextInput style={commonStyle.textInput} placeholder="Field 1" />
      <TextInput style={commonStyle.textInput} placeholder="Field 2" />
      <TextInput style={commonStyle.textInput} placeholder="Field 3" />
      <TextInput style={commonStyle.textInput} placeholder="Field 4" />
      <Button title="Submit" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    padding: 10,
  },
});
