const { electron, BrowserWindow, app, ipcMain, dialog } = require("electron");

const path = require("path");
const url = require("url");
const fs = require("fs");

let isMD = false;
let viewer = null;
let text = null;

function createWindow(text, title, mode) {
  // Create the browser window.
  path_name = mode === "NormalEditor" ? "editor" : "viewer";
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "/preload_" + path_name + ".js"),
    },
  });
  // and load the index.html of the app.

  if (process.env.NODE_ENV == "build") {
    const startUrl =
      process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, "/../build/index.html"),
        protocol: "file:",
        slashes: true,
      });
    mainWindow.loadURL(startUrl);
  } else {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  }

  // Open the DevTools.

  return mainWindow;
}

app.on("ready", () => {
  fs.readFile("./example.txt", "utf-8", (err, data) => {
    if (err) throw err;

    text = data;
    let window = createWindow(text, "title", "NormalEditor");

    // Emitted when the window is closed.
    window.on("closed", function () {
      app.quit();
    });

    ipcMain.handle("init-editor-data", () => {
      return {
        text,
        title: "example",
        mode: "NormalEditor",
      };
    });
    ipcMain.handle("init-viewer-data", () => {
      return {
        text,
        title: "example",
        mode: "MDViewer",
      };
    });
    ipcMain.handle("md-toggle", () => {
      isMD = !isMD;
      if (isMD) {
        viewer = createWindow("test", "title", "MDViewer");
      } else {
        viewer.close();
        viewer = null;
      }
    });
    console.log(isMD);
    ipcMain.handle("send-text", (event, text) => {
      if (isMD && viewer !== null) {
        viewer.webContents.send("get-text", text);
      }
    });
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
