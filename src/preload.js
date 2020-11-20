const { contextBridge, ipcRenderer } = require("electron");

// 'myAPI' が API キー
contextBridge.exposeInMainWorld("myAPI", {
  initData: async () => await ipcRenderer.invoke("init-data"),
});
