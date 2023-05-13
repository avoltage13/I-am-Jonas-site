"use strict";
//_________________________________________________

//script for no reload page when press empty links

document.addEventListener("click", (noReload) => {
    if (noReload.target.matches("[class$='__link']")) {
        const link = noReload.target.closest('a');
        if (link && !link.getAttribute('href')) {
            noReload.preventDefault();
        } 
    }
});

//script for navigation

function scrollToElement(className) {
    const element = document.querySelector('.' + className);
    element.scrollIntoView({ behavior: 'smooth'});
}

document.addEventListener("click", (navigation) => {
    if (navigation.target.matches('.button-work')) {
        scrollToElement('images__title');
    }
    if (navigation.target.matches('.button-about')) {
        scrollToElement('about__text');
    }
    if (navigation.target.matches('.button-contact')) {
        scrollToElement('email');
    }
});