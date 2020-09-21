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
import commonStyle from "../styles/commonStyle";
import palette from "../styles/palette";

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
                  <Text style={commonStyle.h1}>{`Case ${id}`}</Text>
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
    backgroundColor: palette.lightBlue,
  },
  caseWrapper: {
    padding: 20,
    width: "90%",
  },
  case: {
    height: 80,
    backgroundColor: palette.darkBlue,
    marginVertical: 3,
    padding: 10,
  },
});
