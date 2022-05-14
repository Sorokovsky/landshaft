import { isWebp, mobileMenu } from "./modules/functions.js";
import { adminForm } from './modules/variables.js';
import Swiper, { Navigation, Pagination } from "swiper";
try {
    isWebp();
    mobileMenu();
    const mainSlider:Swiper = new Swiper('.main-slider', {
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
    const strongerSlider:Swiper = new Swiper('.stronger-slider', {
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
} catch (error) {
    console.log(error);
}
if (location.pathname == "/admin.php") {
    try {
        adminForm.onsubmit = async (e) => {
            e.preventDefault();
            const nameElement:any = adminForm.children[0]!;
            const passwordElement:any = adminForm.children[1]!;
            const query = {
                name: nameElement.value,
                password: passwordElement.value
            }
            const response = await fetch(`../scripts/loggin.php?name=${query.name}&password=${query.password}`, {method: "GET"});
            const result = await response.json();
            if(response.ok){
                location.reload();
            }
        };
    } catch (error) {
        console.log(error);
    }
    try {
        const logout:HTMLBodyElement = document.querySelector(".logout")!;
        logout.onclick = async (e) => {
            console.log("logout");
            
            e.preventDefault();
            const response = await fetch('../scripts/logout.php', {method: "GET"});
            location.reload();
        }
    } catch (error) {
        console.log(error);
        
    }
}