const mobileMenu = () => {
    const burger = document.querySelector('.burger');
    const menu  = document.querySelector('.header__row_center');
    
    const toggleMenuOpen = () => {
        menu.classList.toggle('is-open');
        burger.classList.toggle('is-active');
    }

    burger.addEventListener('click', ()=> toggleMenuOpen());
}

export default mobileMenu;