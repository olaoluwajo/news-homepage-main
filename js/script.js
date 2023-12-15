const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu");
const menu = document.querySelector(".nav--links");

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);

function showMenu() {
  menu.classList.add("show");
  if (menu.classList.contains("show")) {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    body.style.overflow = "hidden";
  }

}


function hideMenu() {
  menu.classList.remove("show");
  if (!menu.classList.contains("show")) {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    body.style.overflow = "visible";
  }
}