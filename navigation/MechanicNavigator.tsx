import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { JobDashboardScreen } from "../screens/JobDashboardScreen";
import { JobDetailsScreen } from "../screens/JobDetailsScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

const MechanicStack = createStackNavigator();

interface MechanicNavigatorProps {}

export const MechanicNavigator: React.FC<MechanicNavigatorProps> = ({}) => {
  return (
    <MechanicStack.Navigator initialRouteName="jobs">
      <MechanicStack.Screen name="Jobs" component={JobDashboardScreen} />
      <MechanicStack.Screen name="JobDetails" component={JobDetailsScreen} />
      <MechanicStack.Screen name="NotFound" component={NotFoundScreen} />
    </MechanicStack.Navigator>
  );
};
