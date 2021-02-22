const slides = Array.from(document.getElementsByClassName("item"));
const dots = Array.from(document.getElementsByClassName("dot"));
let currentIndexSlide = 0;
const moveSlide = (number) => {
    slides[currentIndexSlide].classList.remove("active");
    dots[currentIndexSlide].classList.remove("dot-active");
    currentIndexSlide += number;
    currentIndexSlide = currentIndexSlide > 4 ? 0 : currentIndexSlide;
    currentIndexSlide = currentIndexSlide < 0 ? 4 : currentIndexSlide;
    slides[currentIndexSlide].classList.add("active");
    dots[currentIndexSlide].classList.add("dot-active");
}
const moveToSlide = (number) => {
    slides[currentIndexSlide].classList.remove("active");
    dots[currentIndexSlide].classList.remove("dot-active");
    currentIndexSlide = number;
    slides[number].classList.add("active");
    dots[currentIndexSlide].classList.add("dot-active");
}