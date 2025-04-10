document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const a = document.querySelectorAll('.carousel-inner a');
    
    let index = 0;
    const totalImages = a.length;

    function updateCarousel() {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index <= 0) ? totalImages - 1 : index - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index >= totalImages - 1) ? 0 : index + 1;
        updateCarousel();
    });
});
