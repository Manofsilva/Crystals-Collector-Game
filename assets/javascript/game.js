
// Variables for Crystals
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0,
      imageUrl:"../Crystals-Collector-Game/assets/images/Blue Crystal.jpg"
    },
    green:
    {
      name: "Green",
      value: 0,
      imageUrl: "../Crystals-Collector-Game/assets/images/Green Crystal.jpg"
    },
    red:
    {
      name: "Red",
      value: 0,
      imageUrl:"../Crystals-Collector-Game/assets/images/Red Crystal.jpg"
    },
    yellow:
    {
      name: "Yellow",
      value: 0,
      imageUrl: "../Crystals-Collector-Game/assets/images/Yellow Crystal.jpg"
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
    
    // Creating a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);
  
    // Make different values for each of the crystals (between 1 and 13)
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

     // Change the HTML to reflect all of these changes
     $("#your-score").text(currentScore);
     $("#target-score").text(targetScore);

  };
  
  // Check if user won or lost and reset the game
  var checkWin = function() {
  
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
      alert("You lost!");

 // Add to Loss Counter
 lossCount++;
 
 // Change Losses HTML
 $("#loss-count").text(lossCount);
  
 // Restart the game
 startGame();

}

    else if (currentScore === targetScore) {
        alert("You Won!");

        // Add to the Win Counter
      winCount++;
  
      // Change Win count HTML
      $("#win-count").text(winCount);
  
      // Restart the game
      startGame();
    }
  };

  
  // Respond to clicks on the crystals
  var addValues = function(clickedCrystal) {
  
    // Change currentScore
    currentScore += clickedCrystal.value;
  
    // Change the HTML for currentScore
    $("#your-score").text(currentScore);
  
    // Call function to see if user won
    checkWin();
  
  };

    // On.clicks for crystals
    startGame();
  
    $("#blue").click(function() {
      addValues(crystal.blue);
    });
    
    $("#red").click(function() {
      addValues(crystal.red);
    });
    
    $("#green").click(function() {
      addValues(crystal.green);
    });
    
    $("#yellow").click(function() {
      addValues(crystal.yellow);
    });