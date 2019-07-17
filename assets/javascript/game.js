// Execute this code when the DOM has fully loaded.

$(document).ready(function() {
    
    // The number we will change repeatedly by clicking crystals. This will serve as "current guess" number.
    var yourMatchingNumber = 0;
// Create a variable that will generate a random "target number".
 
var randomNum = randomNumGen();

  // Variables needed to start the game.

  var wins = 0;
  var losses = 0;
  var crystals;
  
   
// Create a function that will generate a random value for the crystals and returns our crystals object.

function randomNumCrystals() {


// Create the crystals object.

return {
    red: {
            
    points: Math.floor(Math.random() * 12) + 1,
            
    imageUrl: "../../images/RedCrystal.jpeg"
          
    },
    blue: {
        
        points: Math.floor(Math.random() * 12) + 1,
                
        imageUrl: "assets/images/blue.png"
              
        },
              
        yellow: {
                
        points: Math.floor(Math.random() * 12) + 1,
                
        imageUrl: "assets/images/yellow.png"
              
        },
              
        green: {
                
        points: Math.floor(Math.random() * 12) + 1,
                
        imageUrl: "assets/images/green.png"
         
    }
};