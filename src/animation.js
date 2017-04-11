var slideIndex = 1;
var timer;
$(document).ready(function () {
    showDivs(slideIndex);
});

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    clearTimeout(timer);
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("badge");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "transparent";
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "white";
    timer = setTimeout(function () { plusDivs(1) }, 3000);
}