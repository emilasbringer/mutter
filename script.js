const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const safezone = document.querySelector(".safezone");
const deathzone = document.querySelector(".overlay");
const leftdeath = document.querySelector("#deathleft");
const rightdeath = document.querySelector("#deathright");
const p1text = document.querySelector("#textplayer1");
const p2text = document.querySelector("#textplayer2");
var isRunning = false;
var playermovement = [false, false, false, false]
var playerWidth = 200;
var p1XPos = 300;
var p2XPos = 800;
var deathYPos = 0;
var deathspeed = 2;
var safezoneWidth = 250;
var safezoneLeftBound = 100;
var safezoneRightBound = safezoneLeftBound + safezoneWidth;
var deathLayLeftWidth = safezoneLeftBound;
var deathLayRightWidth = window.innerWidth - safezoneRightBound;
var p1Velocity;
var p2Velocity;
var timePressed;

resetDeathZone();
player1.style.left = p1XPos+"px";
player2.style.left = p2XPos+"px";
deathLayLeftWidth = safezoneLeftBound;
deathLayRightWidth = window.innerWidth - safezoneRightBound;
leftdeath.style.width = deathLayLeftWidth + "px";
rightdeath.style.width = deathLayRightWidth + "px"; 
deathYPos += deathspeed;
deathzone.style.top = deathYPos+"px";

function randNum(max) {
  var previousBound;
  var randNum;
  previousBound = safezoneLeftBound;
  randNum = Math.floor(Math.random() * (max + 1));
  while (randNum < previousBound + 400 && randNum > previousBound - 400) {
    randNum = Math.floor(Math.random() * (max + 1));
  }
  return randNum;
}

function uniKeyCode(event) {
    var key = event.keyCode;
    if(key == 65) {playermovement[0] = true; console.log(playermovement);}
    if(key == 68) {playermovement[1] = true; console.log(playermovement);}
    if(key == 37) {playermovement[2] = true; console.log(playermovement);}
    if(key == 39) {playermovement[3] = true; console.log(playermovement);}
    if(key == 13) {if(!isRunning){isRunning = true;}else isRunning=false;}
    if(key == 187) {deathspeed += 0.5;}
    if(key == 189) {deathspeed -= 0.5;}
}

function logKeyUp(event) {
    var keyup = event.keyCode;
    if(keyup == 65) {playermovement[0] = false;};
    if(keyup == 68) {playermovement[1] = false;};
    if(keyup == 37) {playermovement[2] = false;};
    if(keyup == 39) {playermovement[3] = false;};
  }

  function resetDeathZone() {
    deathYPos = 0;
    safezoneLeftBound = randNum(1335 - safezoneWidth);
    safezoneRightBound = safezoneLeftBound + safezoneWidth;
    safezone.style.left = safezoneLeftBound + "px";
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
        deathLayRightWidth = window.innerWidth - safezoneRightBound;

        leftdeath.style.width = deathLayLeftWidth + "px";
        rightdeath.style.width = deathLayRightWidth + "px";

        deathspeed += 0.001;
        
        deathYPos += deathspeed;
        deathzone.style.top = deathYPos+"px";
        deathspeed += 0.001;
        if (deathYPos+360 > 933) {
          if(p1XPos > deathLayLeftWidth && p1XPos < (deathLayLeftWidth + safezoneWidth - playerWidth) && p2XPos > deathLayLeftWidth && p2XPos < (deathLayLeftWidth + safezoneWidth)) {
            resetDeathZone();
          }
          else if (!(p1XPos > deathLayLeftWidth && p1XPos < (deathLayLeftWidth + safezoneWidth) || p2XPos > deathLayLeftWidth && p2XPos < (deathLayLeftWidth + safezoneWidth))) {
            p1text.innerHTML = "Deadero Muerto";
            p2text.innerHTML = "Deadero Muerto";
            isRunning = false;
          }
          else if (p1XPos > deathLayLeftWidth && p1XPos < (deathLayLeftWidth + safezoneWidth)) {
            console.log("P2 DIES");
            isRunning = false;
            p2text.innerHTML = "Deadero Muerto";
          }
          else {
            console.log("P1 DIEs");
            isRunning = false;
            p1text.innerHTML = "Deadero Muerto";
          }
          
          
          
        }
      }
  }, 5);
    


