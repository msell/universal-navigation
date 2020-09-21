import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SigninScreen } from "../screens/SigninScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
const AuthStack = createStackNavigator();

export const AuthNavigator: React.FC = ({}) => {
  return (
    <AuthStack.Navigator
      mode="modal"
      headerMode={Platform.OS === "web" ? "none" : "screen"}
      initialRouteName="Signin"
    >
      <AuthStack.Screen name="Signin" component={SigninScreen} />
      <AuthStack.Screen name="NotFound" component={NotFoundScreen} />
    </AuthStack.Navigator>
  );
};
