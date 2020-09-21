import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
