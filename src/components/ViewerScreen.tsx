import React, { useContext } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Markdown from "../helpers/markdown/index";
import { PersistContext } from "../App";

export const ViewerScreen: React.FC = () => {
  const data = useContext(PersistContext);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ height: "100%" }}
        >
          <Markdown>{data.text}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
