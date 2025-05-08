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

const menuShown = navBar[0].getAttribute("id")


   if (menuShown ) {
    navBar[0].removeAttribute("id"); 
  }
  else
  {
  navBar[0].setAttribute("id", "ourNav");
}
}


document.addEventListener("click", clickAwayHideMenu);

function clickAwayHideMenu (e) {
  const navBar = document.getElementsByClassName("navBar");
  const menuButton = document.getElementById("menu-button");
  if (!navBar[0].contains(e.target) && !menuButton.contains(e.target))
    {
    navBar[0].removeAttribute("id"); 
  }
}

document.addEventListener("keydown", escEvent);

function escEvent (e) {
  navBar[0].removeAttribute("id");
}

// menuButton.addEventListener("click", animateBarButton);

// function animateBarButton() {
//   const burger = document.getElementsByClassName("hamburger")
//   for(i=0; i < burger.length; i++) {
//     burger[i].classList.add("change");
//   }
//   console.log(burger)

// }

function animateBarButton(x) {
  x.classList.toggle("change");
}

