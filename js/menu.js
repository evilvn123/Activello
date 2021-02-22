const body = document.body;
function showMenu() {
    const menu = document.getElementById("menu-res");
    menu.classList.toggle('display-block');
}

function showMenuAbout() {
    const menu = document.getElementById("about-test");
    menu.classList.toggle('display-block');
}

function showMenuLevel() {
    const menu = document.getElementById("level");
    menu.classList.toggle('display-block');
}
const responsiveMenu = () => {
    const menu = document.getElementById("menu-res");
    console.log("responsive")
    if (window.innerWidth >= 767) {
        menu.classList.remove('display-block');
    }
}
responsiveMenu();
body.onresize = () => responsiveMenu();