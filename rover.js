const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   
   constructor(position){
      this.position = position;
       this.mode = "LOW_POWER";
       this.generatorWatts = 110;
   }
   
   receiveMessage(message){

      
      let response = {
         message: message.name,
         results: [] 
      }
      for(let i = 0; i < message.commands.length; i++){
         if(message.commands[i].commandType === "MODE_CHANGE"){
            if(this.mode === message.commands[i].commandType.value){
               response.results.push({complete: false})
               console.log("This should have pushed false to array");
            }
            
            console.log(`current mode: ${this.mode}`)
            this.mode = message.commands[i].value;
            console.log(`New Mode mode: ${message.commands[i].commandType.value}`)            
            response.results.push({completed: true,})
         }
         if(message.commands[i].commandType === "MOVE"){
            
            this.position = message.commands[i].value;
            response.results.push({completed: true,})
         }
         if(message.commands[i] && message.commands[i].commandType === "STATUS_CHECK"){
            
            response.results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position,
               }
            })
         }
         
      }      
      return response;
   };
}

module.exports = Rover;