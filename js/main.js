const mobileMenu = document.getElementById('mobile-menu-open');
const mobileMenuList = document.getElementById('mobile-menu-list');
const firstLine = document.getElementById('first-line');
console.log(firstLine)
const secondLine = document.getElementById('second-line');
console.log(secondLine)
const thirdLine = document.getElementById('third-line');
console.log(thirdLine)

mobileMenu.addEventListener('click', function () {

  mobileMenuList.classList.toggle('header__mobile-menu-list_active');

  if (mobileMenuList.classList.contains('header__mobile-menu-list_active')) {
    console.log('yes')
    firstLine.classList.add('header__mobile-menu-line_rotate1');
    secondLine.classList.add('header__mobile-menu-line_none');
    thirdLine.classList.add('header__mobile-menu-line_rotate2');
  } else {
    firstLine.classList.remove('header__mobile-menu-line_rotate1');
    secondLine.classList.remove('header__mobile-menu-line_none');
    thirdLine.classList.remove('header__mobile-menu-line_rotate2');
  }
})