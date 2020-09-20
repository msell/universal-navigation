import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Case } from "../components/Case";
interface CaseDashboardScreenProps {}
type Props = CaseDashboardScreenProps &
  StackScreenProps<RootStackParamList, "CaseDashboard">;
const cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const CaseDashboardScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Case Dashboard Screen</Text>

      <View style={styles.grid}>
        {cases.map((c) => (
          <Case key={c} id={c} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
