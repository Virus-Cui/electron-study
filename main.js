const path = require("path")
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: './airpods.ico', // 自定义图标
        title: '测试', // 自定当前应用的桌面的显示标题
        frame: true, // 用于自定义Menu 设置为false可恶意将默认菜单栏隐藏
        autoHideMenuBar: true,
        webPreferences:{
            preload: path.resolve(__dirname, "./preload.js")
        }
    })
    win.loadFile("index.html")
    // win.loadURL("https://blog.mrcsh.cn")
    win.webContents.openDevTools()
}

app.on('window-all-closed', ()=>{
    console.log(12345);
    // 如果是Mac系统，彻底关闭程序
    if(process.platform === 'darwin'){
        app.quit()
    }
})

app.whenReady().then(createWindow).catch(err=>{

})