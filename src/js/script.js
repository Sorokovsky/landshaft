import { isWebp, mobileMenu } from "./modules/functions.js";
isWebp();
mobileMenu();
import Swiper, { Navigation, Pagination } from "swiper";
const mainSlider = new Swiper('.main-slider', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    navigation: {
        nextEl: '.main-slider__next',
        prevEl: '.main-slider__prev',
    },
    pagination: {
        el: '.main-slider__pagination',
        clickable: true,
    },
    modules: [Navigation, Pagination],
});
const strongerSlider = new Swiper('.stronger-slider', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    navigation: {
        nextEl: '.stronger-slider__next',
        prevEl: '.stronger-slider__prev',
    },
    pagination: {
        el: '.stronger-slider__pagination',
        clickable: true,
    },
    modules: [Navigation, Pagination],
});
