// navbar effect on scroll
window.addEventListener('scroll', function(){
    const navbar = this.document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 50);
});

// change menu appearence in responsive
const togglebar = document.querySelector('.toggle');
const menu = document.querySelector('ol');

function navToggle(){
    togglebar.classList.toggle("active");
    menu.classList.toggle("active");
}