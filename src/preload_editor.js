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
  sendData: (data) => ipcRenderer.send("send-data", data),
});
