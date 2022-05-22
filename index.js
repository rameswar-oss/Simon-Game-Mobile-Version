var buttonColors=["red","green","blue","yellow"];
var userChosenPattern=[];
var gamePattern=[];
//find the next sequence for the user to be played until the game is over
function nextSequence()
{
  var q= Math.random();

var randomNumber=Math.floor(4*q);

var randomChosenColor=buttonColors[randomNumber];



gamePattern.push(randomChosenColor);
//var a="#"+gamePattern[gamePattern.length-1];


$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
var level=gamePattern.length;
$("h1").text("Level "+level);


}
//end of nextSequence



//detect the color of the buttons on click
$(".btn").on("click",function(event){
  var userChosenColor=$(this).attr("id");
  userChosenPattern.push(userChosenColor);
//giving sound to the button when clicked by the user
  playSound(userChosenColor);
//calling animate function for animation after clicking
  animateButton(userChosenColor);

  checkAnswer(userChosenPattern.length-1);
  // setTimeout(function(){
  //   nextSequence();
  // },700);
});
//.....
//animating the pressing of the user
function animateButton(color)
{
  $("#"+color).addClass("pressed");
  setTimeout(function(){
    $("#"+color).removeClass("pressed");
  },100);
}
//end of user click response
//check answeres patterns
function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel]==userChosenPattern[currentLevel])
  {
    if(currentLevel+1==gamePattern.length)
    {
      setTimeout(function(){
        nextSequence();
      },700);
      userChosenPattern=[];
    }
    console.log("right");
  }
  else
  {
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    console.log("wrong");
    $("h1").text("Game Over.Press Start to restart the game");

    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    going=0;
    gamePattern=[];
    userChosenPattern=[];
  }

}








//play sound
function playSound(color)
{
  var audio=new Audio("sounds/"+color+".mp3");
  audio.play();
}
// end of play sound


//calling functions
var going=0;

  $(".buttonClass").on("click",function(){
    if(going==0)
    {
      going=1;
      nextSequence();
    }
    else
    {
      $(".buttonClass").on("click",function(){
        console.log("fuck off");
      });
    }
  });


//

//
