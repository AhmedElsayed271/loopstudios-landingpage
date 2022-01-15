var toggle  = document.querySelector(".toggle"),
    icon    = document.querySelector(".toggle i"),
    menu    = document.querySelector("header nav .menu"),
    overlay = document.querySelector("header .overlay");
toggle.onclick = function () {
    "use strict";
    if (icon.className == "fas fa-bars") {
        icon.className = "fas fa-times";
        overlay.style.position          = "absolute";
        overlay.style.width             = "100%";
        overlay.style.height            = "100%";
        overlay.style.top               = "0";
        overlay.style.backgroundColor   = "#000";
        menu.classList.remove("hidden-xs")

    } else {
        icon.className = "fas fa-bars";
        overlay.style.position          = "static";
        overlay.style.width             = "";
        overlay.style.height            = "";
        overlay.style.top               = "";
        overlay.style.backgroundColor   = "";
        menu.classList.add("hidden-xs");
    }
}