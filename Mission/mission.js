const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    const selectedTheme = themeSelector.value;
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('img').src = 'images/byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('img').src = 'images/byui-logo_blue.webp';
    }
}