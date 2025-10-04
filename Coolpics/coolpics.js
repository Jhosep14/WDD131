document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('nav button');
    const navUl = document.querySelector('nav ul');

    menuButton.addEventListener('click', function () {
        navUl.classList.toggle('open');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1000) {
            navUl.classList.remove('open');
        }
    });
});
