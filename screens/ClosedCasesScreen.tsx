import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CaseDashboardLayout } from "../layouts/CaseDashboardLayout";
import { Link } from "@react-navigation/native";

interface ClosedCasesScreenProps {}
const cases = [11, 12, 13, 14, 15];

export const ClosedCasesScreen: React.FC<ClosedCasesScreenProps> = ({}) => {
  return (
    <CaseDashboardLayout>
      <View style={styles.container}>
        <View style={styles.caseWrapper}>
          {cases.map((id) => (
            <Link
              style={styles.case}
              key={id}
              to={`/cases/${id}`}
              target={Platform.OS === "web" ? "_blank" : undefined}
            >
              <TouchableOpacity>
                <View>
                  <Text>{`Case ${id}`}</Text>
                </View>
              </TouchableOpacity>
            </Link>
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
  },
  caseWrapper: {
    padding: 20,
    width: "90%",
  },
  case: {
    height: 80,
    backgroundColor: "#e9c46a",
    marginVertical: 3,
    padding: 10,
  },
});
