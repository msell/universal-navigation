// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import * as Linking from "expo-linking";
import { AuthContext } from "./AuthContext";
import { AuthNavigator } from "./navigation/AuthNavigator";
import { RootNavigator } from "./navigation/RootNavigator";
import AsyncStorage from "@react-native-community/async-storage";

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
      Signin: "signin",
      NotFound: "*",
    },
  },
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  React.useEffect(() => {
    const lookupAuth = async () => {
      try {
        const result = await AsyncStorage.getItem("isAuthenticated");
        console.log({ result, isAuth: !!result && result === "true" });
        setIsAuthenticated(!!result && result === "true");
      } catch (e) {}
    };
    lookupAuth();
  }, []);

  useReduxDevToolsExtension(navigationRef);
  return (
    <AuthContext.Provider
      value={{
        authenticated: isAuthenticated,
        signIn: (email, password) => {
          AsyncStorage.setItem("isAuthenticated", "true");
          setIsAuthenticated(true);
        },
        signOut: () => {
          AsyncStorage.clear();
          setIsAuthenticated(false);
        },
      }}
    >
      <NavigationContainer linking={linking} ref={navigationRef}>
        {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
