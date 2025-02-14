document.querySelector(".ammafull").addEventListener("click",ammafull);
document.querySelector(".appafull").addEventListener("click",appafull);
document.querySelector(".jawaharfull").addEventListener("click",jawaharfull);
document.querySelector(".priyafull").addEventListener("click",priyafull);

document.querySelector(".ammaaddpoints").addEventListener("click",ammaaddpoints);
document.querySelector(".appaaddpoints").addEventListener("click",appaaddpoints);
document.querySelector(".jawaharaddpoints").addEventListener("click",jawaharaddpoints);
document.querySelector(".priyaaddpoints").addEventListener("click",priyaaddpoints);

function ammaaddpoints(){
  var userInput = parseInt(prompt("Amma's point in the last game?:"));
  var oldPoint = parseInt(document.querySelector(".ammapoint").innerHTML);
  var updatedPoints = userInput + oldPoint;
  document.querySelector(".ammapoint").textContent = updatedPoints;
}

function appaaddpoints(){
  var userInput = parseInt(prompt("Appa's point in the last game?:"));
  var oldPoint = parseInt(document.querySelector(".appapoint").innerHTML);
  var updatedPoints = userInput + oldPoint;
  document.querySelector(".appapoint").textContent = updatedPoints;
}

function jawaharaddpoints(){
  var userInput = parseInt(prompt("Jawahar's point in the last game?:"));
  var oldPoint = parseInt(document.querySelector(".jawaharpoint").innerHTML);
  var updatedPoints = userInput + oldPoint;
  document.querySelector(".jawaharpoint").textContent = updatedPoints;
}

function priyaaddpoints(){
  var userInput = parseInt(prompt("Priya's point in the last game?:"));
  var oldPoint = parseInt(document.querySelector(".priyapoint").innerHTML);
  var updatedPoints = userInput + oldPoint;
  document.querySelector(".priyapoint").textContent = updatedPoints;
}

function ammafull(){
  var updatedPoints = parseInt(document.querySelector(".ammapoint").innerHTML);
  updatedPoints = updatedPoints + 80;
  document.querySelector(".ammapoint").textContent = updatedPoints;
}

function appafull(){
  var updatedPoints = parseInt(document.querySelector(".appapoint").innerHTML);
  updatedPoints = updatedPoints + 80;
  document.querySelector(".appapoint").textContent = updatedPoints;
}

function jawaharfull(){
  var updatedPoints = parseInt(document.querySelector(".jawaharpoint").innerHTML);
  updatedPoints = updatedPoints + 80;
  document.querySelector(".jawaharpoint").textContent = updatedPoints;
}

function priyafull(){
  var updatedPoints = parseInt(document.querySelector(".priyapoint").innerHTML);
  updatedPoints = updatedPoints + 80;
  document.querySelector(".priyapoint").textContent = updatedPoints;
}

window.onbeforeunload = function () {return false;}











