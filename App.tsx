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
import * as Linking from "expo-linking";

const Stack = createStackNavigator();
const prefix = Linking.makeUrl("/");
const linking = {
  // TODO: add your domain to prefixes for universal
  // https://reactnavigation.org/docs/deep-linking/#universal-links
  prefixes: [prefix],
};
export default function App() {
  const navigationRef = React.useRef<NavigationContainerRef>(null);

  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Stack.Navigator
        headerMode={Platform.OS === "web" ? "none" : "screen"}
        initialRouteName="Cases"
      >
        <Stack.Screen name="Cases" component={CaseDashboardScreen} />
        <Stack.Screen name="CaseDetails" component={CaseDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
