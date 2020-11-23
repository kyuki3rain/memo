const { contextBridge, ipcRenderer } = require("electron");

// 'myAPI' が API キー
contextBridge.exposeInMainWorld("myAPI", {
  initData: () => {
    data = ipcRenderer.invoke("init-viewer-data");
    return data;
  },
  getData: (listener) =>
    ipcRenderer.on("get-data", (event, data) => listener(data)),
});
