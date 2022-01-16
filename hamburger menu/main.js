const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector(".nav")
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        navItems.classList.add('active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open")
        navItems.classList.remove('active')
        menuOpen = false;
    }
});