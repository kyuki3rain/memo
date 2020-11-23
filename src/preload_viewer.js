const { contextBridge, ipcRenderer } = require("electron");

// 'myAPI' が API キー
contextBridge.exposeInMainWorld("myAPI", {
  initData: () => {
    data = ipcRenderer.invoke("init-viewer-data");
    return data;
  },
  onGetText: (listener) => {
    ipcRenderer.on("get-text", listener);
  },
  removeGetText: () => {
    ipcRenderer.removeAllListeners("get-text");
  },
});
