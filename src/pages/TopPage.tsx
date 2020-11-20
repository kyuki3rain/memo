import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PersistContext } from "../App";
import { EditorScreen } from "../components/EditorScreen";
import { mode } from "../config";

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export const TopPage: React.FC = () => {
  const data = useContext(PersistContext);

  console.log(data.mode, mode.NormalEditor);

  return data.mode === mode.NormalEditor ? (
    <EditorScreen></EditorScreen>
  ) : (
    <View>
      <Text style={styles.text}>Hello React Native for Web!</Text>
    </View>
  );
};
