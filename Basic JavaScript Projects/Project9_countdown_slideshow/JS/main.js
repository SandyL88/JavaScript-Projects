function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        var timer = document.getElementById("timer");
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();

}

//image slideshow functions
let slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslices");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        n = slides.length;
    }
    if (n < 1) {
        n = 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[n - 1]) { 
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}
    console.log(slides)
}