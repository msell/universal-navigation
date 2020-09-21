import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { JobDashboardScreen } from "../screens/JobDashboardScreen";
import { JobDetailsScreen } from "../screens/JobDetailsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

const MechanicStack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface MechanicNavigatorProps {}

const JobsNavigator: React.FC<MechanicNavigatorProps> = ({}) => {
  return (
    <MechanicStack.Navigator initialRouteName="MyJobs">
      <MechanicStack.Screen name="MyJobs" component={JobDashboardScreen} />
      <MechanicStack.Screen name="JobDetails" component={JobDetailsScreen} />
      <MechanicStack.Screen name="NotFound" component={NotFoundScreen} />
    </MechanicStack.Navigator>
  );
};

export const MechanicNavigator: React.FC<MechanicNavigatorProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Home" component={JobsNavigator} />
    </Tab.Navigator>
  );
};
