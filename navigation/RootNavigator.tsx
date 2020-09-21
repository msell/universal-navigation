import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CaseDashboardScreen } from "../screens/CaseDashboardScreen";
import { CaseDetailsScreen } from "../screens/CaseDetailsScreen";
import { ClosedCasesScreen } from "../screens/ClosedCasesScreen";
import { ModalScreen } from "../screens/ModalScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

const RootStack = createStackNavigator();

interface RootNavigatorProps {}

export const RootNavigator: React.FC<RootNavigatorProps> = ({}) => {
  return (
    <RootStack.Navigator
      mode="modal"
      headerMode={Platform.OS === "web" ? "none" : "screen"}
      initialRouteName="cases"
    >
      <RootStack.Screen name="Cases" component={CaseDashboardScreen} />
      <RootStack.Screen name="ClosedCases" component={ClosedCasesScreen} />
      <RootStack.Screen name="CaseDetails" component={CaseDetailsScreen} />
      <RootStack.Screen name="Modal" component={ModalScreen} />
      <RootStack.Screen name="NotFound" component={NotFoundScreen} />
    </RootStack.Navigator>
  );
};
