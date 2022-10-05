console.log("funcionando")

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu( event ){
    desktopMenu.classList.toggle("inactive");
}

