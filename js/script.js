function showMenu () {
    let menu = document.querySelector('.main__menu__nav-active');

    if (menu.style.left == '0%') {
        menu.style.left = '-100%'
    } else {
        menu.style.left = '0%';
    }
};