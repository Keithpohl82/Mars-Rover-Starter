const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   
   constructor(position){
      this.position = position;
       let mode = "NORMAL";
       let generatorWatts = 110;
   }
   
   receiveMessage(message){

      
      let response = {
         message: message.name,
         results: [] 
      }
      for(let i = 0; i < message.commands.length; i++){
         if(message.commands[i].commandType === "MODE_CHANGE"){
            this["mode"] = message.commands[i].value;
            
            response.results.push({complete: true})
         }
         if(message.commands[i].commandType === "MOVE"){
            
            this.position = message.commands[i].value;
            response.results.push({complete: true})
         }
         if(message.commands[i].commandType === "STATUS_CHECK"){
            //this.generatorWatts = generatorWatts,
            response.results.push({
               complete: true,
               roverStatus: {
                  mode: this.mode, 
                  generatorWatts: this.generatorWatts, 
                  position: this.position}
            })
            console.log(response.roverStatus);
         }
         
      }      
      return response;
   };
}

module.exports = Rover;