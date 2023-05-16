
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
    element.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("click", (navigation) => {
    if (navigation.target.matches('.button-work')) {
        scrollToElement('images__title');
    }
    if (navigation.target.matches('.button-about')) {
        scrollToElement('about__title');
    }
    if (navigation.target.matches('.button-contact')) {
        scrollToElement('email');
    }
    if (navigation.target.matches('.button-home')) {
        scrollToElement('header');
    }
});

//goTop button

const upBtn = document.querySelector('.gotop__arrow');
let prevScrollPos = window.scrollY
let timeoutId;
window.addEventListener("scroll", trackScroll);
window.addEventListener('scroll', function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(checkScrollPos, 2000);
});

function trackScroll() {
    const currentScrollPos = window.scrollY;
    const coord = document.documentElement.clientHeight;
    if ((currentScrollPos > coord) && (Math.abs(currentScrollPos - prevScrollPos) >= 450)) {
        upBtn.classList.add("gotop__arrow--show");
    }
    else {
        upBtn.classList.remove("gotop__arrow--hide");
        upBtn.classList.remove("gotop__arrow--show");
}};

function checkScrollPos() {
    const currentScrollPos = window.scrollY;
    const coord = document.documentElement.clientHeight;
    if ((currentScrollPos !== prevScrollPos) && (Math.abs(currentScrollPos - prevScrollPos) >= 450) && (currentScrollPos > coord)) {
        upBtn.classList.remove("gotop__arrow--show");
        upBtn.classList.add("gotop__arrow--hide");
    }
    else {
        upBtn.classList.remove("gotop__arrow--hide");
    }
    prevScrollPos = currentScrollPos;
    timeoutId = setTimeout(checkScrollPos, 2000);
}

upBtn.addEventListener("click", function goTop() {
    if (window.scrollY > 0) {
        upBtn.classList.add("gotop__arrow--hide");
        window.scrollBy(0, -60);
        setTimeout(goTop, 0);
    }
});
