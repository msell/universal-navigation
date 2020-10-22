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
import { ShareTech_400Regular } from "@expo-google-fonts/share-tech";
import { Provider as PaperProvider } from "react-native-paper";
import { client } from "./services/apollo/client";
import { ApolloProvider } from "@apollo/client";

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
    ShareTech_400Regular,
  });
  const navigationRef = React.useRef<NavigationContainerRef>(null);
  useReduxDevToolsExtension(navigationRef);
  const { state } = React.useContext(AuthContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <PaperProvider>
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
      </PaperProvider>
    </ApolloProvider>
  );
};
export default function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}
