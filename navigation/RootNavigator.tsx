import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CaseDashboardScreen } from "../screens/CaseDashboardScreen";
import { CaseDetailsScreen } from "../screens/CaseDetailsScreen";
import { ClosedCasesScreen } from "../screens/ClosedCasesScreen";
import { ModalScreen } from "../screens/ModalScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import { Title } from "react-native-paper";
// import { messaging } from "../services/firebase/firebase";
const RootStack = createStackNavigator();

interface RootNavigatorProps {}

export const RootNavigator: React.FC<RootNavigatorProps> = ({}) => {
  // React.useEffect(() => {
  // const getToken = async () => {
  //   await messaging.getToken({
  //     vapidKey:
  //       "BGmo-y4wgTVXo5KMwbS-5_R9y4VRDiFNfIkQvhgZL13DSY9rDj03Sr-jnJ0WOA5s-lMvCaqW2SI7BqfB4VEmZK8",
  //   });
  // };
  // getToken();
  // }, [messaging]);
  return (
    <RootStack.Navigator
      screenOptions={{ title: "yey" }}
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
