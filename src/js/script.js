import { isWebp, mobileMenu } from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from "swiper";
try {
    isWebp();
    mobileMenu();
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
}
catch (error) {
    console.log(error);
}
try {
    let adminForm = document.querySelector('.admin__form');
    adminForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameinput = adminForm.children[0];
        const passwordinput = adminForm.children[1];
        const data = {
            name: nameinput.value,
            password: passwordinput.value
        };
        const response = await fetch(`../scripts/admin.php?name=${data.name}&password=${data.password}`, {
            method: "GET",
            redirect: "follow",
        });
        console.log(response);
        let text = await response.text();
        let result = JSON.parse(text);
        console.log(result);
        location.href = location.href;
    });
}
catch (error) {
    console.log(error);
}
