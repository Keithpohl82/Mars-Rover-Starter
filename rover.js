const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   
   constructor(position){
      this.position = position;
       let mode = "NORMAL";
       let generatorWatts = 110;
   }
   
   receiveMessage(message){
      /* The object from message should be built and returned from here. */
      
      message = {
         message: message.name,
         results: message.commands,        
      }
      console.log(this.position)
      return message;
   };
}

module.exports = Rover;