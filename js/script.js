const openMenu = document.querySelector('.open__menu');
const closeMenu = document.querySelector('.close__menu');
const menu = document.querySelector('.nav--links');


openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', closeMenu);


function closeMenu() {
    menu.classList.remove('show');
    if (menu.classList.contains('show')) {
        openMenu.classList.remove('hide');
        closeMenu.classList.remove('show');
    }
}

function showMenu() {
    menu.classList.add('show');
    if (menu.classList.contains('show')) {
        openMenu.style.display = 'none';    
       closeMenu.style.display = 'block';
    }
    // openMenu.classList.add('hide');
    // closeMenu.classList.add('show');
}