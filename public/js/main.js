// Author: thanhntse

const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        //Click to toggle icon
        topMenu.classList.toggle("hidden");
        topMenu.classList.toggle("ct-top-menu-expanded");
    } else {
        //Click outside from toggle icon
        if (topMenu.classList.contains("ct-top-menu-expanded")) {
            topMenu.classList.remove("ct-top-menu-expanded");
            topMenu.classList.add("hidden");
        }
    }
})

window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
        if (topMenu.classList.contains("ct-top-menu-expanded")) {
            topMenu.classList.remove("ct-top-menu-expanded");
            topMenu.classList.add("hidden");
        }
    }
});
