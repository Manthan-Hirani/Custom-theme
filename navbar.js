var lastScrollTop;
nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.top = '-90px';

    }
    else {
        nav.style.top = '0px';

    }
    lastScrollTop = scrollTop;

});

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("myOverlay").style.width = "0";
    document.getElementById("myOverlay").style.height = "0";
}

function openNav() {
    document.getElementById("myNav").style.width = "50%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

