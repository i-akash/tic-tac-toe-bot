const {newGame,setMainWindow}=require('./onClick')
const {Menu}=require('electron')

function startControls(mainWindow){
    setMainWindow(mainWindow);
    
    MenuBar();
    ContextMenu(mainWindow); 
}


function MenuBar(){
  const template=[
    {
      label:"new game",
      click:()=>newGame()
    }
  ]
  const menu=Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu)
    
}


function ContextMenu(mainWindow){
  const template=[
    {
      label:"new game",
      click:()=>newGame()
    }
  ]
  const ctxmenu=Menu.buildFromTemplate(template);  
  mainWindow.webContents.on('context-menu',(e,params)=>{
       ctxmenu.popup(mainWindow,params.x,params.y)      
  })
}


module.exports=startControls;