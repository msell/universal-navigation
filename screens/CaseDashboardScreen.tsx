import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Launch } from "../components/Launch";
import { CaseDashboardLayout } from "../layouts/CaseDashboardLayout";
import { useRecentLaunchesQuery } from "../generated/codegen";

interface CaseDashboardScreenProps {}
type Props = CaseDashboardScreenProps &
  StackScreenProps<RootStackParamList, "CaseDashboard">;

export const CaseDashboardScreen: React.FC<Props> = ({ navigation }) => {
  const { data, loading, error } = useRecentLaunchesQuery();
  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <CaseDashboardLayout>
      <View style={styles.container}>
        <View style={styles.grid}>
          {data?.launchesPast.map((x) =>
            x ? (
              <Launch
                key={x.id}
                id={x.id as string}
                description={x?.mission_name}
              />
            ) : null
          )}
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
