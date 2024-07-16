const menu = document.getElementById('hamburger-menu');
const nav = document.querySelector('.navbar-nav');

menu.addEventListener('click', function(){
    nav.classList.toggle('active');
});

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    };
});