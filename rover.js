const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   
   constructor(position){
      this.position = position;
       this.mode = "NORMAL";
       this.generatorWatts = 110;
   }
   
   receiveMessage(message){

      
      let response = {
         message: message.name,
         results: [] 
      }
      for(let i = 0; i < message.commands.length; i++){

         const command = message.commands[i];

         if(command.commandType === "MODE_CHANGE"){
            if(this.mode === command.value){
               response.results.push({completed: false})
            }else{
               response.results.push({completed: true})
               this.mode = command.value;
            }

         }

         if(command.commandType === "MOVE" && this.mode != "LOW_POWER"){          
            this.position = command.value;
            response.results.push({completed: true})
            console.log(this.position);
         }else if(command.commandType === "MOVE" && this.mode === "LOW_POWER"){
            response.results.push({completed: false})
            console.log(this.position);
         }

         if(command.commandType === "STATUS_CHECK"){           
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