
const burguer = document.getElementById('check');
const menu = document.querySelector('.navbar-nav');

menu.addEventListener('click', toggleMenu);
burguer.addEventListener('click', toggleMenu);

function toggleMenu () {
    let element = document.querySelector('.navbar-collapse');
    element.classList.toggle('show');
}


