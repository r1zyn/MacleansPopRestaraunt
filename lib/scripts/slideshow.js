let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("slideshow-dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) slideIndex = 1;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideshow-dot-active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slideshow-dot-active";
    setTimeout(showSlides, 2000);
}