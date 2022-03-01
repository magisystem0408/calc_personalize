import _ from "lodash";
import React, { useState, VFC } from "react";
import {
  View,
  StyleSheet,
  Button,
  Picker,
  Text,
  ActivityIndicator,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/types";
import axios from "axios";

type Props = NativeStackScreenProps<RootStackParamList, "SearchPersonalize">;

const URL = "https://4i3e99.deta.dev/personalities/";

export const SearchScreen: VFC<Props> = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState<string>("ENTJ");
  const [isloading, setIsLoading] = useState<boolean>(false);

  const personals = [
    { type: "ENTJ", name: "指揮官", id: 1 },
    { type: "ENTP", name: "討論者", id: 2 },
    { type: "INTJ", name: "建築家", id: 3 },
    { type: "INTP", name: "論理学者", id: 4 },
    { type: "ISTP", name: "巨匠", id: 5 },
    { type: "ISFP", name: "冒険家", id: 6 },
    { type: "ESTP", name: "起業家", id: 7 },
    { type: "ESFP", name: "エンターテイナー", id: 8 },
    { type: "ISTJ", name: "管理者", id: 9 },
    { type: "ISFJ", name: "擁護者", id: 10 },
    { type: "ESTJ", name: "幹部", id: 11 },
    { type: "ESFJ", name: "領事官", id: 12 },
    { type: "INFP", name: "仲介者", id: 13 },
    { type: "INFJ", name: "提唱者", id: 14 },
    { type: "ENFP", name: "広報運動家", id: 15 },
    { type: "ENFJ", name: "主人公", id: 16 },
  ];
  const onSubmit = async () => {
    const reaquestURL = URL + selectedValue;
    setIsLoading(true);
    const response = await axios.get(reaquestURL);
    setIsLoading(false);
    console.log(response);
  };
  return (
    <>
      {isloading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <Text>性格型を入力してください。</Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSelectedValue(itemValue);
            }}
          >
            {_.map(personals, (personal) => {
              return (
                <Picker.Item
                  label={
                    personal.name.toString() + "：" + personal.type.toString()
                  }
                  value={personal.type.toString()}
                  key={personal.id.toString()}
                />
              );
            })}
          </Picker>
          <Button title="確定する" onPress={onSubmit} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: 200,
    borderRadius: 5,
    borderColor: "transparent",
    marginTop: 20,
    marginBottom: 20,
  },
});
