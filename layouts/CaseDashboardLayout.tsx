import React from "react";
import { View, StyleSheet } from "react-native";
import { CaseDashboardHeader } from "../components/CaseDashboardHeader";
interface CaseDashboardLayoutProps {}

export const CaseDashboardLayout: React.FC<CaseDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <View style={styles.container}>
      <CaseDashboardHeader />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
