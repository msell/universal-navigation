import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CaseDetailsScreenProps {}

export const CaseDetailsScreen: React.FC<CaseDetailsScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Case Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
