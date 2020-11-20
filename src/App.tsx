import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Mode, mode } from "./config";
import { TopPage } from "./pages/TopPage";

export const PersistContext = React.createContext({} as Data);

// Window オブジェクトに myAPI（APIキー）が存在している
const { myAPI } = window;
type Data = {
  text: string;
  title: string;
  mode: Mode;
  setText: (text: string) => void;
};

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
