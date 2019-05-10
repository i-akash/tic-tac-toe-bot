const {ipcMain ,dialog} =require('electron') 
const Checker=require('./Checker')
const Move=require('./bot/BestMove')
const {InitState}=require('./styles/Options')
const createMessageBox=require('./styles/CreateMessageBox')
let mainWindow=null;



function IPC(window){

    mainWindow=window;
ipcMain.on("on best move",(event,arg)=>{
    event.returnValue=Move(arg);
})    
ipcMain.on("on check",(event,arg)=>{
    let winner=Checker(arg);
    console.log("line : --------------- ",winner);
    
    event.returnValue=winner;
})

ipcMain.on('on error',(event)=>{
    dialog.showErrorBox("Error","electron")
})

ipcMain.on("on win",(event,arg)=>{  
   createMessageBox(mainWindow,"info",["OK"],2,"Winner","Congratulations to "+arg,()=>event.sender.send("new game",InitState));
   
})


ipcMain.on("on finished",(event,arg)=>{
   createMessageBox(mainWindow,'warning',["OK"],2,"Finished","Draw",()=>event.sender.send("new game",InitState))
   
})

ipcMain.on("on double",(event)=>{
   createMessageBox(mainWindow,'warning',["OK"],2,"Warning","You Clicked already clicked cell ..")            
})

}

module.exports=IPC