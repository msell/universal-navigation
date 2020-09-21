import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import palette from "../styles/palette";
import { AuthContext } from "../AuthContext";
interface CaseDashboardHeaderProps {}

export const CaseDashboardHeader: React.FC<CaseDashboardHeaderProps> = ({}) => {
  const route = useRoute();
  const { dispatch } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
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
      <View style={styles.signout}>
        <Button
          title="Sign Out"
          onPress={() => dispatch!({ type: "REQUEST_SIGN_OUT" })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: palette.darkYellow,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  navigation: {
    height: 60,
    backgroundColor: palette.darkYellow,
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    marginHorizontal: 10,
  },
  signout: {
    justifyContent: "flex-end",
  },
});
