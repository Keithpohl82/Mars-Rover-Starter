const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   
   constructor(position, mode = "NORMAL", generatorWatts = 110){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   
   receiveMessage(message){
      let commands = [new Command('MODE_CHANGE', "LOW_POWER"), new Command('STATUS_CHECK'), new Command("MOVE", 846548)];
      message = new Message("New Test Message", commands);
      let testObject = {
         name: message.name,
         results: message.commands
      };
      return testObject;
   };
}




module.exports = Rover;