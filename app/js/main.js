document.querySelectorAll('.menu a').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 60;
    // const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// menu
if (document.querySelector("#menu")) {

  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;

  // Клонируем меню, чтобы задать свои стили для мобильной версии
  const menu = document.querySelector("#menu").cloneNode(1);

  // При клике на иконку hamb вызываем ф-ию hambHandler
  hamb.addEventListener("click", hambHandler);

  // Выполняем действия при клике ..
  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  // Здесь мы рендерим элементы в наш попап
  function renderPopup() {
    popup.appendChild(menu);
  }

  // Код для закрытия меню при нажатии на ссылку
  const links = Array.from(menu.children);

  // Для каждого элемента меню при клике вызываем ф-ию
  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  // Закрытие попапа при клике на меню
  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
}

//lazyload
if (document.querySelector('img[data-src]')) {
  let images = document.querySelectorAll('img[data-src]');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
      if (myImgSingle.intersectionRatio > 0) {
        loadImage(myImgSingle.target);
      }
    });
  };

  function loadImage(image) {
    image.src = image.getAttribute('data-src');
  };

  const observer = new IntersectionObserver(handleImg, options);

  images.forEach(img => {
    observer.observe(img);
  })
}


// map
// if (document.querySelector('#map')) {
//   ymaps3.ready.then(() => {

//     const content = document.createElement('div');
//     content.innerHTML = '<div class="map-marker"></div>';

//     const map = new ymaps3.YMap(document.getElementById('map'), {
//       location: {
//         center: [44.972927, 33.607984],
//         zoom: 10
//       }
//     })
//       .addChild(new ymaps3.YMapDefaultSchemeLayer())
//       .addChild(new ymaps3.YMapDefaultFeaturesLayer({ zIndex: 1800 }))
//       .addChild(new ymaps3.YMapMarker({
//         coordinates: [44.972927, 33.607984],
//         draggable: true
//       }, content));

//   });
// }