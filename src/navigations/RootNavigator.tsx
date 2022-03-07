import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchNavigator } from "./SearchNavigator";
import { PersonalizeView } from "../screens/PersonalizeView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === "Home") {
      iconName = "Home";
    }

    return (
      <MaterialCommunityIcons name="feature-search" size={24} color="#06B5D3" />
    );
  },
});

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
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
