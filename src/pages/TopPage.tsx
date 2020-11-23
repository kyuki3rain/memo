import React, { useContext } from "react";
import { PersistContext } from "../App";
import { EditorScreen } from "../components/EditorScreen";
import { mode } from "../@types/config";
import { ViewerScreen } from "../components/ViewerScreen";

export const TopPage: React.FC = () => {
  const data = useContext(PersistContext);

  return data.mode === mode.NormalEditor ? (
    <EditorScreen></EditorScreen>
  ) : (
    <ViewerScreen></ViewerScreen>
  );
};
