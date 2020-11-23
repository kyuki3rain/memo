const { contextBridge, ipcRenderer } = require("electron");

// 'myAPI' が API キー
contextBridge.exposeInMainWorld("myAPI", {
  initData: () => {
    data = ipcRenderer.invoke("init-editor-data");
    console.log(data);
    return data;
  },
  mdToggle: () => {
    ipcRenderer.invoke("md-toggle");
  },
  sendText: (text) => ipcRenderer.invoke("send-text", text),
});
