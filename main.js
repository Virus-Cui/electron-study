const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    })
    win.loadFile("index.html")

    win.webContents.openDevTools()
    // 暂时关闭安全警告
    process.env["ELECTROON_DISABLE_SECURITY_WARNINGS"] = 'true'
    
}

app.whenReady().then(createWindow)
