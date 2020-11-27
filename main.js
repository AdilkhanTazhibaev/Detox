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
  const img = document.querySelectorAll('#img'),
    nextSlider = document.querySelector('#next'),
    prevSlider = document.querySelector('#prev');
  let state = {};
  let imgItem = 1;

  function showSlider(n) {
    if (n > img.length) {
      imgItem = 1;
    }
    if (n < 1) {
      imgItem = img.length;
    }
    img.forEach((item) => {
      item.style.display = 'none';
    });
    img[imgItem - 1].style.display = 'block';
    state['Day'] = imgItem;
    console.log(state);
  }
  showSlider(imgItem);

  function nextSliderShow(n) {
    showSlider((imgItem += n));
  }

  nextSlider.addEventListener('click', (e) => {
    e.preventDefault();
    nextSliderShow(1);
    console.log('next');
  });
  prevSlider.addEventListener('click', (e) => {
    e.preventDefault();
    nextSliderShow(-1);
    console.log('prev');
  });
  // Обработка формы

  const addForm = document.querySelector('#addForm');

  addForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    let dataAdd = new FormData(addForm);
    await fetch('server/add.php', {
      method: 'POST',
      body: dataAdd,
    }).then((response) => response.text());
  });

  // Отправка данных на почту
  const btnSumbit = document.querySelector('#btn-sumbit');
  const formMail = document.querySelector('#form-Submit');

  console.log(btnSumbit, formMail);

  formMail.addEventListener('submit', async (event) => {
    console.log(state);
    console.log('click');
    event.preventDefault();
    let dataSend = new FormData(formMail);
    for (let key in state) {
      dataSend.append(key, state[key]);
    }
    let data = await fetch('server/mail.php', {
      method: 'POST',
      body: dataSend,
    });
    //console.log(await data.text());
    let result = await data.text();

    console.log(result);
  });

  //GET Reviews
  fetch('server/reviews.php')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((item) => {
        let html = document.querySelector('.reviews__detox__body');
        let reviewsName = document.createElement('div');
        let reviewsText = document.createElement('div');
        reviewsName.classList.add('reviews__detox__body__name');
        reviewsText.classList.add('reviews__detox__body__text');

        reviewsName.innerHTML = `
            <img src="./img/avatar.png">
            <p>${item.name}</p>
        `;
        reviewsText.innerHTML = `
            <span>Дата 12.10.2020</span>
            <p>${item.text}</p>
          `;
        html.appendChild(reviewsName);
        html.appendChild(reviewsText);
      });
    });
});
