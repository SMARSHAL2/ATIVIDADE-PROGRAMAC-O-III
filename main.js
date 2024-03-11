const { app, BrowserWindow } = require("electron")

function createWindow() {
    const win = new BrowserWindow({

    });
    win.loadFile("html/index.html");
}

app.whenReady().then(createWindow);
