import React from "react";
import {View, StyleSheet, TextInput} from "react-native";

export const SearchScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <TextInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})