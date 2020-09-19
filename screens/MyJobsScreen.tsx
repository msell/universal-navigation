import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MyJobsScreenProps {}

export const MyJobsScreen: React.FC<MyJobsScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Job Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
