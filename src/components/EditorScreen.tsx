import React, { useContext } from "react";
import { StyleSheet, TextInput } from "react-native";
import { PersistContext } from "../App";

const styles = StyleSheet.create({
  input: {
    height: "100%",
    width: "100%",
    borderColor: "none",
    outlineWidth: 0,
  },
});

export const EditorScreen: React.FC = () => {
  const data = useContext(PersistContext);

  return (
    <TextInput
      multiline={true}
      numberOfLines={4}
      style={styles.input}
      onChangeText={(text) => data.setText(text)}
      value={data.text}
    />
  );
};
