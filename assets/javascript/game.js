
// Variables for Crystals
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };
  
  // Scores (Current and Target)
  var currentScore = 0;
  var targetScore = 0;
  
  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;

  // FUNCTIONS
  
  // Function for getting random numbers
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Variable that will start the Game and restart it
  var startGame = function() {
  
    // Reset the current Score
    currentScore = 0;
    
    // Creating a new Target Score (between 15 and 100)
    targetScore = getRandom(21, 100);
  
    // Make different values for each of the crystals (between 1 and 13)
    crystal.blue.value = getRandom(1, 13);
    crystal.red.value = getRandom(1, 13);
    crystal.green.value = getRandom(1, 13);
    crystal.yellow.value = getRandom(1, 13);