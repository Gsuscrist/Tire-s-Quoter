const {app, BrowserWindow} = require('electron');

app.on('ready', ()=>{
    let win=new BrowserWindow({width:800, height:600,
        webPreferences :{
        nodeIntegration : true,
        contextIsolation: false}
    });   
    win.loadFile("Start.html");
    win.show()

    win.on('closed', ()=>{
        win = null;
        app.quit();
    })
})