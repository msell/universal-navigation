// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import * as Linking from "expo-linking";
import { AuthContextProvider } from "./AuthContext";
import { AuthNavigator } from "./navigation/AuthNavigator";
import { RootNavigator } from "./navigation/RootNavigator";
import { MechanicNavigator } from "./navigation/MechanicNavigator";
import { AuthContext } from "./AuthContext";
import { AppLoading } from "expo";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";

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
      MyJobs: "jobs/my",
      JobDetails: "jobs/:id",
      Signin: "signin",
      NotFound: "*",
    },
  },
};

const Main = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  useReduxDevToolsExtension(navigationRef);
  const { state } = React.useContext(AuthContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      {state?.authenticated ? (
        state.role === "mechanic" ? (
          <MechanicNavigator />
        ) : (
          <RootNavigator />
        )
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}
