// slide section JS for slider....

let currentIndex = 0;

function slideLeft() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesToShow = 4;
    if (currentIndex === 0) {
        currentIndex = totalSlides - slidesToShow;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    updateSlider();
}

function slideRight() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slidesToShow = 4;
    if (currentIndex >= totalSlides - slidesToShow) {
        currentIndex = 0;
    } else {
        currentIndex = (currentIndex + 1) % totalSlides;
    }
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 25}%)`;
}
