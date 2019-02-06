document.addEventListener("mousemove", getMouse);

var btnpos = {x:0, y:0};

setInterval(followMouse, 20);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

//global variable:
var currentNumber;

function getMouse(e){
 mouse.x = e.pageX;
 mouse.y = e.pageY;
}

function followMouse(){
 //1. find distance X , distance Y
 var distX = mouse.x - btnpos.x;
 var distY = mouse.y - btnpos.y;
 //Easing motion
  //Progressive reduction of distance
 btnpos.x += distX/100;
 btnpos.y += distY/50;

 btn.style.left = btnpos.x + "px";
 btn.style.top = btnpos.y + "px";
}


//generate random number for followers
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//get and display initial follower number:
function getInitialNumber() {
  currentNumber = getRndInteger (10, 9999);
  document.getElementById("displayInitialNumber").innerHTML = currentNumber;
}

getInitialNumber();

//decrease by random:
var down = true;
var floor = 0;
var increment; //random value
var randomTime; //random value

//basic decrease function
function numberDecrease() {
  increment = getRndInteger (1, 3);
  if (down == true && currentNumber >= floor) {
    currentNumber -= increment
    if (currentNumber == floor) {
      down = false;
    }
      if (currentNumber < 9999) {
        down = true;
      }
  }
  document.getElementById('displayInitialNumber').innerHTML = currentNumber;
}

function timedDecrease() {
  randomTime = getRndInteger (4000, 10000);
  setInterval(numberDecrease, randomTime);
}

timedDecrease();

//add 1 to initial number on click:
function addFollower() {
  //conditional statement for exe:
  if (currentNumber < 9999) {
    currentNumber++;
  } else { alert ("Enough is enough, don't be greedy!")} ;
  document.getElementById("displayInitialNumber").innerHTML = currentNumber;
}

//set interval
//function for subtract follower
//function pick a random number to subtract from overall follower numbers
//
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
//
// function getNumber() {
//   var number1 = getRndInteger(1, 9);
//   var number2 = getRndInteger(100, 999);
//   var number3 = (number1 + "," + number2);
//   document.getElementById("displayNumber").innerHTML = number3;
// }
