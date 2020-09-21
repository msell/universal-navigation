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
import { ClosedCasesScreen } from "./screens/ClosedCasesScreen";
import { ModalScreen } from "./screens/ModalScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import * as Linking from "expo-linking";
import { SigninScreen } from "./screens/SigninScreen";
import { AuthContext } from "./AuthContext";
const RootStack = createStackNavigator();
const prefix = Linking.makeUrl("/");
const linking = {
  // TODO: add your domain to prefixes for universal
  // https://reactnavigation.org/docs/deep-linking/#universal-links
  prefixes: [prefix],
  config: {
    screens: {
      Cases: "cases",
      ClosedCases: "cases/closed",
      CaseDetails: "cases/:id",
      Jobs: "jobs",
      JobDetails: "jobs/:id",
      SignIn: "signin",
      NotFound: "*",
    },
  },
};
export default function App() {
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useReduxDevToolsExtension(navigationRef);

  return (
    <AuthContext.Provider
      value={{
        authenticated: isAuthenticated,
        signIn: (email, password) => {
          setIsAuthenticated(true);
        },
        signOut: () => setIsAuthenticated(false),
      }}
    >
      <NavigationContainer linking={linking} ref={navigationRef}>
        <RootStack.Navigator
          mode="modal"
          headerMode={Platform.OS === "web" ? "none" : "screen"}
          initialRouteName={isAuthenticated ? "Cases" : "Signin"}
        >
          {isAuthenticated ? (
            <>
              <RootStack.Screen name="Cases" component={CaseDashboardScreen} />
              <RootStack.Screen
                name="ClosedCases"
                component={ClosedCasesScreen}
              />
              <RootStack.Screen
                name="CaseDetails"
                component={CaseDetailsScreen}
              />
              <RootStack.Screen name="Modal" component={ModalScreen} />
              <RootStack.Screen name="NotFound" component={NotFoundScreen} />
            </>
          ) : (
            <>
              <RootStack.Screen name="SignIn" component={SigninScreen} />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
