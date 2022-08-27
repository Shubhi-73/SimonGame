// Basically - we match the userCLickedPattern to the gamePattern after every click by the user
// if the patterns match, then the randon number generator selects a random color to be added to the gamePattern
// the level is incremented with each addition to the gamePattern
var buttonColours = ['red','blue','green','yellow'];
var userClickedPattern = [];
var gamePattern = [];
var delay = 1000;
var userChosenColour,level=0;
$("body").on("keypress",nextSequence())
// check();
function nextSequence(){
  $("h1").html("Level "+level); level++;
  var randomNumber = Math.floor(Math.random()*4); //random number from 0-3
  var randomChosenColour = buttonColours[randomNumber]; //random index for array
  gamePattern.push(randomChosenColour); //adding it to the end of the sequence
  console.log(gamePattern);
  $("#"+randomChosenColour).fadeOut();//targetting the header of the colour
    $("#"+randomChosenColour).fadeIn();
    playSound(randomChosenColour);
    userClickedPattern = [];
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
    console.log("success");
    if(gamePattern.length==(currentLevel+1))
      setTimeout(nextSequence(),delay);
      //add 1000 milliseconds gap
  }

  else {
    console.log("wrong!");
    $("h1").html("Wrong!");
  }

}

 $(".btn").click(function(){ //when a button is pressed
   userChosenColour = this.id;
 $(this).fadeOut("fast");
   $(this).fadeIn("fast");
   console.log(userChosenColour);
   userClickedPattern.push(userChosenColour);
   console.log(userClickedPattern);
   playSound(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
   });




   function playSound(colour){
 var audio;
     switch (colour) {
    case "red":
         audio = new Audio("sounds/red.mp3");
         audio.play();
      break;
      case "blue":
           audio = new Audio("sounds/blue.mp3");
           audio.play();
      break;
        case "yellow":
             audio = new Audio("sounds/yellow.mp3");
             audio.play();
        break;
         case "green":
               audio = new Audio("sounds/green.mp3");
               audio.play();
        break;
     }
   }
