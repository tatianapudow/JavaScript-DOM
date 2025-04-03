const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slide.length;


function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
});


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
  updateSliderPosition();
});


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index);
        updateSliderPosition();
    });
});




[nextBtn, prevBtn].forEach(btn => btn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    }, 3000);
}));
