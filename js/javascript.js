document.addEventListener("mousemove", getMouse);

var btnpos = {x:0, y:0};

setInterval(followMouse, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

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
 btnpos.x += distX/40;
 btnpos.y += distY/20;

 btn.style.left = btnpos.x + "px";
 btn.style.top = btnpos.y + "px";
}

//gernate random number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getNumber() {
  var number1 = getRndInteger(1, 9);
  var number2 = getRndInteger(100, 999);
  var number3 = (number1 + "," + number2);
  document.getElementById("displayNumber").innerHTML = number3;
}
