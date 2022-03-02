import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchNavigator } from "./SearchNavigator";
import { PersonalizeView } from "../screens/PersonalizeView";

const Tab = createBottomTabNavigator();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={SearchNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Test"
          component={PersonalizeView}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
