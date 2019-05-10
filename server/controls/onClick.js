const createMessageBox=require('../styles/CreateMessageBox')
const {InitState}=require('../styles/Options')
let mainWindow=null;

function setMainWindow(window){
    mainWindow=window;
    
}

function newGame(){
    createMessageBox(mainWindow,"warning",["start","no"],2,"new game","Do you want to start new game",()=>mainWindow.webContents.send("new game",InitState))
}


module.exports={newGame,setMainWindow}