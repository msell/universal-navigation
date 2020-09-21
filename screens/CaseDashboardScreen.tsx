import React from "react";
import { View, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Case } from "../components/Case";
import { CaseDashboardLayout } from "../layouts/CaseDashboardLayout";

interface CaseDashboardScreenProps {}
type Props = CaseDashboardScreenProps &
  StackScreenProps<RootStackParamList, "CaseDashboard">;
const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const CaseDashboardScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <CaseDashboardLayout>
      <View style={styles.container}>
        <View style={styles.grid}>
          {cases.map((c) => (
            <Case key={c} id={c} />
          ))}
        </View>
      </View>
    </CaseDashboardLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  grid: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
