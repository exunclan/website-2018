console.log("Hello there!");

const hamburger = document.getElementById("navbar-hamburger");
const cross = document.getElementById("navbar-cross");
const navbarInfo = document.querySelector(".navbar-info");

function toggle() {
  navbarInfo.classList.toggle("active");
}

hamburger.onclick = toggle;
cross.onclick = toggle;
