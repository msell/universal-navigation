import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface CaseProps {
  id: string | number;
}

export const Case: React.FC<CaseProps> = ({ id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        // todo: navigate to /cases/:id
        navigation.navigate("CaseDetails", {
          id,
        });
      }}
      style={styles.container}
    >
      <Text>{`Case ${id}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 340,
    backgroundColor: "#a8dadc",
    padding: 20,
    margin: 3,
  },
});
