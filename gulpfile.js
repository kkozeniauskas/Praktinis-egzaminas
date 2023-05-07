"use strict"

// nav burger
const burger = document.querySelector("#burger");
const links = document.querySelector(".links");

burger.addEventListener("click", () =>{
  links.classList.toggle("absolute");
  burger.classList.toggle("rotate");
});

// swiper

const swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1000: {
            slidesPerView: 3
        }
    }
  });
