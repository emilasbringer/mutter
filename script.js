const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const safezone = document.querySelector(".safezone");
const deathzone = document.querySelector(".overlay");
const leftdeath = document.querySelector("#deathleft");
const rightdeath = document.querySelector("#deathright");
var isRunning = false;
var playermovement = [false, false, false, false]
var p1XPos = 300;
var p2XPos = 800;
var deathYPos = 0;
var deathspeed = 1;
var totalPageWidth = window.innerWidth;
var safezoneWidth = 250;
var safezoneLeftBound = 100;
var safezoneRightBound = safezoneLeftBound + safezoneWidth;
var deathLayLeftWidth = safezoneLeftBound;
var deathLayRightWidth = totalPageWidth - safezoneRightBound;

function randNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

function uniKeyCode(event) {
    var key = event.keyCode;
    if(key == 65) {playermovement[0] = true; console.log(playermovement);}
    if(key == 68) {playermovement[1] = true; console.log(playermovement);}
    if(key == 37) {playermovement[2] = true; console.log(playermovement);}
    if(key == 39) {playermovement[3] = true; console.log(playermovement);}
    if(key == 13) {isRunning = true;}
}

function logKeyUp(event) {
    var keyup = event.keyCode;
    if(keyup == 65) {playermovement[0] = false;};
    if(keyup == 68) {playermovement[1] = false;};
    if(keyup == 37) {playermovement[2] = false;};
    if(keyup == 39) {playermovement[3] = false;};
  }

  setInterval(() => {
      if(isRunning) {
        if(playermovement[0] && p1XPos > 0) {p1XPos -= 5;}
        if(playermovement[1] && p1XPos < 1335) {p1XPos += 5;}
        if(playermovement[2] && p2XPos > 0) {p2XPos -= 5;}
        if(playermovement[3] && p2XPos < 1335) {p2XPos += 5;}
        player1.style.left = p1XPos+"px";
        player2.style.left = p2XPos+"px";

        deathLayLeftWidth = safezoneLeftBound;
        deathLayRightWidth = totalPageWidth - safezoneRightBound;

        leftdeath.style.width = deathLayLeftWidth + "px";
        rightdeath.style.width = deathLayRightWidth + "px";

        
        deathYPos += deathspeed;
        deathzone.style.top = deathYPos+"px";
      }
  }, 5);
    
