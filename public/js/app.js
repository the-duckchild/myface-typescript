document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

const colorButton = document.getElementById("color-button")

// colorButton.addEventListener("click", randomColor);


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

// menuButton.addEventListener("click", makeMenuVisible);

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

const submitBTN = document.getElementById("submit")

submitBTN.addEventListener("click", validateForm)


function validateForm() {
  const checkName = document.forms["myForm"]["name"].value;
  const checkUserName = document.forms["myForm"]["username"].value;
  const checkEmail = document.forms["myForm"]["email"].value;
  const checkProfileImg = document.forms["myForm"]["profileImageUrl"].value;
  const checkCoverImg = document.forms["myForm"]["coverImageUrl"].value;
  const testRegex = /^[a-z]+$/;

    if (checkName == ""){
      alert("Name must be filled out");
      return false
    }
    else if (testRegex.test(checkUserName) == false) {
      alert ("Username must be all lower case, no spaces.")
      return false 
    }
    else if (checkUsername == "") {
      alert("Username must be filled out");
      return false
    } 

    else if (checkEmail == "") {
      alert("Email must be filled out");
      return false
    } 
    else if (checkProfileImg == ""){
      alert("Profile Img Url must be filled out");
      return false
    }
    else if (checkCoverImg == ""){
      alert("Cover Img Url must be filled out");
      return false
    }

  else if (checkImg == "") {
    alert("Profile Img must be filled out");
    return false
  }
 
}
