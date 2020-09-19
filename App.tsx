import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { useReduxDevToolsExtension } from "@react-navigation/devtools";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { CaseDashboardScreen } from './screens/CaseDashboardScreen'
import { CaseDetailsScreen } from './screens/CaseDetailsScreen'


//https://reactnavigation.org/docs/typescript/
const Stack = createStackNavigator();

export default function App() {
  const navigationRef = React.useRef<NavigationContainerRef>(null);

  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
       <Stack.Navigator initialRouteName="Cases">
        <Stack.Screen name="Cases" component={CaseDashboardScreen} />
        <Stack.Screen name="CaseDetails" component={CaseDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
