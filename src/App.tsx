import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Data, mode } from "./@types/config";
import { TopPage } from "./pages/TopPage";

export const PersistContext = React.createContext({} as Data);

// Window オブジェクトに myAPI（APIキー）が存在している
const { myAPI } = window;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data>({
    text: "",
    title: "",
    mode: mode.NormalEditor,
    setText: () => {},
  });

  const initData = async () => {
    const init = await myAPI.initData();

    if (!init) return;

    setData({ ...data, ...init });

    if (init.mode === mode.MDViewer) {
      myAPI.getData((initData) => {
        setData({ ...data, ...initData });
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    initData();
  }, []);

  return !loading ? (
    <PersistContext.Provider
      value={{
        ...data,
        setText: (text) => {
          setData({ ...data, text });
        },
      }}
    >
      <TopPage></TopPage>
    </PersistContext.Provider>
  ) : (
    <View style={{ backgroundColor: "gray" }} />
  );
};

export default App;
