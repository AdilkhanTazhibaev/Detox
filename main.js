window.addEventListener('DOMContentLoaded', () => {
  //Burger Menu
  const burger = document.querySelector('.menuNav');
  const menu = document.querySelector('.header__navbar__ul');
  //menu.style.display = 'none';

  burger.addEventListener('click', () => {
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
      burger.classList.add('burger__active');
    } else {
      menu.style.display = 'none';
      burger.classList.remove('burger__active');
    }
  });
  //Slider
  const sliderItem = document.querySelectorAll('.slider_item');
  const nextSlider = document.querySelector('.next');
  const prevSlider = document.querySelector('.prev');
  let indexSlide = 1;
  let state = {};
  function showSlider(n) {
    if (n > sliderItem.length) {
      indexSlide = 1;
    }
    if (n < 1) {
      indexSlide = sliderItem.length;
    }
    sliderItem.forEach((item) => {
      item.style.display = 'none';
    });
    sliderItem[indexSlide - 1].style.display = 'block';

    state['Day'] = indexSlide;
    console.log(state);
  }
  showSlider(indexSlide);

  function nextSliderShow(n) {
    showSlider((indexSlide += n));
  }

  nextSlider.addEventListener('click', (e) => {
    e.preventDefault();
    nextSliderShow(1);
  });
  prevSlider.addEventListener('click', (e) => {
    e.preventDefault();
    nextSliderShow(-1);
  });
  // Обработка формы
});
