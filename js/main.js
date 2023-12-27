const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu-open');
const mobileMenuList = document.getElementById('mobile-menu-list');
const firstLine = document.getElementById('first-line');
console.log(firstLine)
const secondLine = document.getElementById('second-line');
console.log(secondLine)
const thirdLine = document.getElementById('third-line');
console.log(thirdLine)
const screenWidth = window.screen.width;
console.log(screenWidth);
const slides = document.querySelectorAll('.categories__swiper-slide');
console.log(slides.length);
const wrapper = document.querySelector('.swiper-wrapper');
console.log(wrapper.childNodes)

window.addEventListener('resize', function(){
  console.log(screenWidth)
})

// console.log(slides.length)

mobileMenu.addEventListener('click', function (event) {
  event.preventDefault();
  mobileMenuList.classList.toggle('header__mobile-menu-list_active');

  if (mobileMenuList.classList.contains('header__mobile-menu-list_active')) {
    console.log('yes')
    firstLine.classList.add('header__mobile-menu-line_rotate1');
    secondLine.classList.add('header__mobile-menu-line_none');
    thirdLine.classList.add('header__mobile-menu-line_rotate2');
    header.classList.add('header_active');
  } else {
    firstLine.classList.remove('header__mobile-menu-line_rotate1');
    secondLine.classList.remove('header__mobile-menu-line_none');
    thirdLine.classList.remove('header__mobile-menu-line_rotate2');
    header.classList.remove('header_active');
  }
})

const swiper1 = new Swiper('.categories__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints:{
    0: {
      slidesPerView: 1.4,
      spaceBetween:40,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween:20,
    },
    500: {
      slidesPerView: 1.8,
      spaceBetween:20,
    },
    600: {
      slidesPerView: 2.2,
      spaceBetween:20,
    },
    700: {
      slidesPerView: 2.5,
      spaceBetween:20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween:10,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween:10,
    },
    1000: {
      slidesPerView: 3.8,
      spaceBetween:10,
    },
    1100: {
      slidesPerView: 4, 
      spaceBetween:20,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween:20,
    },
    1200: {
      slidesPerView: 4.8,
      spaceBetween:20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween:10,
    },
    1700: {
      slidesPerView: 6,
      spaceBetween: 30,
    }
  },


  // If we need pagination
  pagination: {
    el: '.categories__swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});