import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "../screens/searchScreens/SearchScreen";
import { SearchResultHome } from "../screens/searchScreens/SearchResultHome";

const Stack = createNativeStackNavigator();

export const SearchNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SearchPersonalize">
      <Stack.Screen
        name="SearchPersonalize"
        component={SearchScreen}
        options={{ title: "性格診断検索システム" }}
      />
      <Stack.Screen
        name="SearchResultHome"
        component={SearchResultHome}
        options={{ title: "診断結果" }}
      />
    </Stack.Navigator>
  );
};
