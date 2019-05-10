const {dialog} =require('electron')




function createMessageBox(mainWindow=null,type="",buttons="",defaultId="",title="",message="",callback=()=>{}){
    const options = {
      type,
      buttons,
      defaultId,
      title,
      message
    };
    dialog.showMessageBox(mainWindow, options, (response) => {
      if(response===0)      
           callback();    
    });
}


module.exports=createMessageBox;