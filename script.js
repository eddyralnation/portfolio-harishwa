var menuList = document.getElementById('menuList');
menuList.style.maxHeight = "0px"; // Initially set to 0px

function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "180px"; // Expand menu
    } else {
        menuList.style.maxHeight = "0px"; // Collapse menu
    }
}
