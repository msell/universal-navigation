import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { CaseDashboardHeader } from "../components/CaseDashboardHeader";
import palette from "../styles/palette";
import { Dialog } from "../components/Dialog";
import commonStyles from "../styles/commonStyle";

interface CaseDashboardLayoutProps {}

export const CaseDashboardLayout: React.FC<CaseDashboardLayoutProps> = ({
  children,
}) => {
  const [showNewCaseDialog, setShowNewCaseDialog] = React.useState(false);
  return (
    <View style={styles.container}>
      {showNewCaseDialog && (
        <Dialog
          active={showNewCaseDialog}
          onDismiss={() => setShowNewCaseDialog(false)}
        />
      )}
      <CaseDashboardHeader />

      <ScrollView>{children}</ScrollView>

      <TouchableOpacity
        onPress={() => setShowNewCaseDialog(true)}
        style={styles.newCaseCta}
      >
        <Text style={[commonStyles.h1, { color: palette.black }]}>
          New Case
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.lightBlue,
  },
  newCaseCta: {
    position: "absolute",
    bottom: 10,
    right: 40,
    width: 140,
    height: 180,
    backgroundColor: palette.darkYellow,
    paddingTop: 30,
    paddingLeft: 12,
  },
});
