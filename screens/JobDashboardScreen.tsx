import React from 'react'
import { View, Text, StyleSheet } from "react-native";

interface JobDashboardScreenProps {

}

export const JobDashboardScreen: React.FC<JobDashboardScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Job Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
