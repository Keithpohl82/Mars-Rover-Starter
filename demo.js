const Message = require('./message.js');
const Command = require('./command.js');
const Rover = require("./rover.js");

let commands = [new Command("MOVE", 369), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);


console.log(response);