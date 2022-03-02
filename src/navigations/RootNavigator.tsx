import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/SearchScreen";
import { SearchResultHome } from "../screens/SearchResultHome";

const Stack = createNativeStackNavigator();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPersonalize">
        <Stack.Screen
          name="SearchPersonalize"
          component={SearchScreen}
          options={{ title: "性格診断検索システム" }}
        />
        <Stack.Screen
          name="SearchResultHome"
          component={SearchResultHome}
          options={{ title: "検索結果" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
