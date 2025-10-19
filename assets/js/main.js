// JavaScript for smooth scrolling and other future functionalities

const navSlide = () => {
    const burger = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            nav.style.transform = 'translateX(100%)';
        } else {
            nav.classList.add('nav-active');
            nav.style.transform = 'translateX(0%)';
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

$(document).ready(function(){
    $('.stories-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
