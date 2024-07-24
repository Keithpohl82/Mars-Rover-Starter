const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// Added this comment for git changes to rerun autograder
describe("Rover class", function() {

  // 7 tests here!
  test("constructor sets position and default values for mode and generatorWatts.", function(){
    let testRover = new Rover(98382);  
    expect(testRover).toEqual(new Rover(98382, "NORMAL", 110));
  });
  test("response returned by receiveMessage contains the name of the message.", function(){
    let testRover = new Rover(98382);
    let commands = [new Command('MODE_CHANGE', "LOW_POWER"), new Command('STATUS_CHECK'), new Command("MOVE", 846548)];
    let testMessage = new Message("New Test Message", commands);
    expect(testRover.receiveMessage(testMessage).message).toEqual("New Test Message");
  });
  test("response returned by receiveMessage includes two results if two commands are sent in the message.", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let testRover = new Rover(98382);
    expect(testRover.receiveMessage(message).results.length).toBeGreaterThanOrEqual(2);
  });
  test("responds correctly to the status check command", function(){
    let testCommand = new Command("STATUS_CHECK");
    expect(testCommand.value).toBeUndefined();
  });
  test("responds correctly to the mode change command", function(){

  });
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function(){

  });
  test("responds with the position for the move command", function(){

  });
});
