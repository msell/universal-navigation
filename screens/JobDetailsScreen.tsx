import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface JobDetailsScreenProps {}

export const JobDetailsScreen: React.FC<JobDetailsScreenProps> = ({}) => {
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
