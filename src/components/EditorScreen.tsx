import React, { useContext } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { PersistContext } from "../App";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "calc(100% - 41.6px)",
    borderColor: "none",
    outlineWidth: 0,
  },
});

const { myAPI } = window;

export const EditorScreen: React.FC = () => {
  const data = useContext(PersistContext);

  return (
    <>
      <Button onPress={() => myAPI.mdToggle()} title="Toggle"></Button>
      <TextInput
        multiline={true}
        style={styles.input}
        onChangeText={(text) => data.setText(text)}
        value={data.text}
      />
    </>
  );
};
