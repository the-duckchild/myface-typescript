document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

const colorButton = document.getElementById("color-button")

colorButton.addEventListener("click", randomColor);


function randomColor() {

  // const postCards = document.getElementsByClassName("postCard");
  const postCards = document.getElementsByTagName("li")
 for (i=0; i<postCards.length; i++) {
  postCards[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  console.log(postCards)
 }

}

const menuButton = document.getElementById("menu-button");
const navBar = document.getElementsByClassName("navBar");
console.log(navBar)

menuButton.addEventListener("click", makeMenuVisible);

function makeMenuVisible() {

  navBar[0].setAttribute("id", "ourNav")}
