// we've created a funtion called navSlide which is equal to an anonymous function
const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards`;
        }
        
    
    });

});



}



navSlide();