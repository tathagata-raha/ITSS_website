document.getElementById("nav-bara").style.position="fixed";
var x = document.getElementById("ahome");
x.addEventListener("mouseover", firstFunction);
x.addEventListener("mouseout", secondFunction);
var x = document.getElementById("agallery");
x.addEventListener("mouseover", thirdFunction);
x.addEventListener("mouseout", fourthFunction);
var x = document.getElementById("acontact");
x.addEventListener("mouseover", fifthFunction);
x.addEventListener("mouseout", sixthFunction);
var x = document.getElementById("ainterest");
x.addEventListener("mouseover", seventhFunction);
x.addEventListener("mouseout", eighthFunction);

function firstFunction() {
  document.getElementById("ahome").style.color = "#33cc33";
}
function secondFunction() {
  document.getElementById("ahome").style.color = "white";
}
function thirdFunction() {
  document.getElementById("agallery").style.color = "#33cc33";
}
function fourthFunction() {
  document.getElementById("agallery").style.color = "white";
}
function fifthFunction() {
  document.getElementById("acontact").style.color = "#33cc33";
}
function sixthFunction() {
  document.getElementById("acontact").style.color = "white";
}
function seventhFunction() {
  document.getElementById("ainterest").style.color = "#33cc33";
}
function eighthFunction() {
  document.getElementById("ainterest").style.color = "white";
}