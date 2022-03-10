// for menu bar

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu .classList.remove('fa-times');
    navbar.classList.remove('active');
}