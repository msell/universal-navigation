import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import palette from "../styles/palette";

interface CaseDashboardHeaderProps {}

export const CaseDashboardHeader: React.FC<CaseDashboardHeaderProps> = ({}) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Link style={styles.item} to="/cases">
        <Text
          style={[
            route.name === "Cases"
              ? { textDecorationLine: "underline", fontWeight: "bold" }
              : null,
          ]}
        >
          Open Cases
        </Text>
      </Link>
      <Link style={styles.item} to="/cases/closed">
        <Text
          style={[
            route.name === "ClosedCases"
              ? { textDecorationLine: "underline", fontWeight: "bold" }
              : null,
          ]}
        >
          Closed Cases
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: palette.darkYellow,
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    marginHorizontal: 10,
  },
});
