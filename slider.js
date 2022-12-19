const slideContainers = document.querySelectorAll('.slider');

for (let i = 0; i < slideContainers.length; i++) {

  const slider = function () {
    const slides = slideContainers[i].querySelectorAll('.slide');
    const btnLeft = slideContainers[i].querySelector('.slider__btn--left');
    const btnRight = slideContainers[i].querySelector('.slider__btn--right');

    let currentSlide = 0;
    const maxSlide = slides.length;

    const goToSlide = function (slide) {
      slides.forEach(
        (item, i) => (item.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    const nextSlide = function () {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      goToSlide(currentSlide);
    };

    const prevSlide = function () {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }
      goToSlide(currentSlide);
    };

    goToSlide(0);

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

  };

  slider();
}
