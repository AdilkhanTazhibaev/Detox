window.addEventListener('DOMContentLoaded', () => {
  //Burger Menu
  const burger = document.querySelector('.menuNav');
  const menu = document.querySelector('.header__navbar__ul');
  const linkMenu = menu.querySelectorAll("a[href*='#']")
  

  linkMenu.forEach(item=>{
    item.addEventListener('click', (event)=>{
      event.preventDefault()
      const linkId = item.getAttribute('href')
      document.querySelector('' + linkId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })


 



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
    
  }
  showSlider(imgItem);

  function nextSliderShow(n) {
    showSlider((imgItem += n));
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
  
  const formMail = document.querySelector('#form-Submit');

 
  const btn = document.querySelector('#add')
		const showTime = () =>{
			const modal = document.querySelector('.modal') 	
				modal.style.display = 'block'
				setTimeout(()=>{
				modal.style.display  = 'none'
			},3000)
		}

  formMail.addEventListener('submit', async (event) => {
    
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
    showTime()

   
  });

  //GET Reviews
  fetch('server/reviews.php')
    .then((response) => response.json())
    .then((data) => {
      
       let sotrDate = data.sort(function(a,b){
         
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return b.id - a.id
      });
      sotrDate.forEach((item) => {
        let html = document.querySelector('.reviews__detox__body');
        let reviewsName = document.createElement('div');
        let reviewsText = document.createElement('div');
        reviewsName.classList.add('reviews__detox__body__name');
        reviewsText.classList.add('reviews__detox__body__text');

        reviewsName.innerHTML = `
            <img src="./img/add.png">
            <p>${item.name}</p>
        `;
        reviewsText.innerHTML = `
            <span>${item.data_submit}</span>
            <p>${item.text}</p>
          `;
        html.appendChild(reviewsName);
        html.appendChild(reviewsText);
      });
    });

    
    
});