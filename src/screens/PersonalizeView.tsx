import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

export const PersonalizeView: React.VFC = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          style={{ flex: 1 }}
          source={{ uri: "https://www.16personalities.com/ja/性格診断テスト" }}
        />
      </SafeAreaView>
    </>
  );
};
