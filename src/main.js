import { BrowserWindow, app } from "electron";
const isDev = process.env.NODE_ENV === 'development'
let mainWindow;
const start = () => {
    mainWindow = new BrowserWindow({ width: 1200, height: 900 });
    const indexUrl = isDev ? 'http://localhost:8000' : `${__dirname}/index.html`
    mainWindow.loadURL(indexUrl);
    isDev && mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => {
        mainWindow = undefined
    })
}
app.on("ready", start)
app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
app.on("activate", () => {
    if (!mainWindow) {
        start()
    }
})