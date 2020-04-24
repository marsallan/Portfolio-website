var navMenu = document.getElementById("menu");
var nav = document.getElementById("nav");
var overlay = document.getElementById("overlay");
const header = document.getElementById("header");
const stickyPosition = header.offsetTop;
const list = document.getElementsByClassName("nav-link");
const closeButton = document.getElementById("closeButton");

(function ($) {
    "use strict";
    $(window).load(function () {
        $('#loader').fadeOut("slow", function () {
            $('#pre-loader').delay(200).fadeOut("slow")
        })
    })
})(jQuery);

closeButton.addEventListener("click", menutoggle)

function menutoggle() {
    if (nav.classList.contains("nav-transform") && overlay.classList.contains("overlay-visible")) {
        nav.classList.remove("nav-transform")
        overlay.classList.remove("overlay-visible")
    }
}

navMenu.addEventListener("click", menu)

function menu() {
    nav.classList.toggle("nav-transform");
    overlay.classList.toggle("overlay-visible");
    //if (overlay.classList.contains("overlay-visible"))
}

overlay.addEventListener("click", toggleOverlay)

function toggleOverlay() {
    overlay.classList.remove("overlay-visible")
    if (nav.classList.contains("nav-transform")) {
        nav.classList.remove("nav-transform")
    }
}

window.onscroll = function () {
    sticky()
}

function sticky() {
    if (window.pageYOffset > stickyPosition) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }

    if (header.classList.contains("sticky") == true) {
        for (var i = 0; i < list.length; i++) {
            list[i].classList.add("sticky-nav-link")
        }
    } else {
        for (var i = 0; i < list.length; i++) {
            list[i].classList.remove("sticky-nav-link")
        }
    }
}

window.onscroll = function () {
    var scrolled_top = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop

    var to_scroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - (document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight)

    var horizontal_width = (scrolled_top / to_scroll) * 100;

    document.getElementById('horizontal-scroll').style.width = horizontal_width + '%';
}