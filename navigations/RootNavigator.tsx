import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SearchScreen} from "../screens/SearchScreen";

const Stack =createNativeStackNavigator()

export const RootNavigator:React.FC =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SearchScreen">
                <Stack.Screen name="" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}