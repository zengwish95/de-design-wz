document.addEventListener("mousemove", getMouse);

var btnpos = {x:0, y:0};

setInterval(followMouse, 40);

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


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getInitialNumber() {
  currentNumber = getRndInteger (10, 9999);
  document.getElementById("displayInitialNumber").innerHTML = currentNumber;
}

getInitialNumber();

function addFollower() {
  //conditional statement for exe:
  if (currentNumber < 9999) {
    currentNumber++;
  } else { alert ("Enough is enough, don't be greedy.")} ;
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
