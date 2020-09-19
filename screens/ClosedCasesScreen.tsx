import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ClosedCasesScreenProps {}

export const ClosedCasesScreen: React.FC<ClosedCasesScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Closed Cases</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
