// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import { createStackNavigator } from "@react-navigation/stack";
import { CaseDashboardScreen } from "./screens/CaseDashboardScreen";
import { CaseDetailsScreen } from "./screens/CaseDetailsScreen";
import { ModalScreen } from "./screens/ModalScreen";

import * as Linking from "expo-linking";

const RootStack = createStackNavigator();
const prefix = Linking.makeUrl("/");
const linking = {
  // TODO: add your domain to prefixes for universal
  // https://reactnavigation.org/docs/deep-linking/#universal-links
  prefixes: [prefix],
  config: {
    screens: {
      Cases: "cases",
      CaseDetails: "cases/:id",
    },
  },
};
export default function App() {
  const navigationRef = React.useRef<NavigationContainerRef>(null);

  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <RootStack.Navigator
        mode="modal"
        headerMode={Platform.OS === "web" ? "none" : "screen"}
        initialRouteName="Cases"
      >
        <RootStack.Screen name="Cases" component={CaseDashboardScreen} />
        <RootStack.Screen name="CaseDetails" component={CaseDetailsScreen} />
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
