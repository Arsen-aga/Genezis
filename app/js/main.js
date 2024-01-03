document.querySelectorAll(".menu a, .popup-menu__list a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 60;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//menu sticky
if (document.querySelector(".subheader")) {
  // инициализируем subheader
  const subheader = document.querySelector(".subheader");
  // Функция добавляет класс элементу в зависимости от координат окна
  function checkСoordinatesElem(elem) {
    // запуск функции по движению скролла
    window.addEventListener("scroll", function () {
      // инициализируем координаты окна по Y
      const coordWindow = window.scrollY;
      // если координаты окна больше 80, то добавляем класс, иначе - нет
      coordWindow > 80
        ? elem.classList.add("active")
        : elem.classList.remove("active");
    });
  }

  checkСoordinatesElem(subheader);
}

// menu
if (document.querySelector("#popup-menu")) {
  // бургер
  const humb = document.getElementById("hamb");
  // body
  const body = document.querySelector("body");
  // попап меню - блок
  const popupMenu = document.getElementById("popup-menu");
  // массив меню элементов
  const menuItems = document.querySelectorAll(".popup-menu__list-item");

  // Удаление класса active у элементов в массиве
  const removeActive = (elems) => {
    elems.forEach((menuItem) => menuItem.classList.remove("active"));
  };

  // при клике на бургер выполняются действия
  humb.addEventListener("click", () => {
    // добавяем/удаляем класс active у элемента
    popupMenu.classList.toggle("active");
    // добавяем/удаляем класс noscroll у body
    body.classList.toggle("noscroll");
    // удаляем у всех элементов класс active
    removeActive(menuItems);
  });

  menuItems.forEach((menuItem) => {
    // при клике на элемент выполняются действия
    menuItem.addEventListener("click", () => {
      // удаляем у всех элементов класс active
      removeActive(menuItems);
      // добавяем/удаляем класс active у элемента
      menuItem.classList.toggle("active");
    });
  });
}

//lazyload
if (document.querySelector("img[data-src]")) {
  //lazyload
  let images = document.querySelectorAll("img[data-src]");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function handleImg(myImg, observer) {
    myImg.forEach((myImgSingle) => {
      if (myImgSingle.intersectionRatio > 0) {
        loadImage(myImgSingle.target);
      }
    });
  }

  function loadImage(image) {
    image.src = image.getAttribute("data-src");
  }

  const observer = new IntersectionObserver(handleImg, options);

  images.forEach((img) => {
    observer.observe(img);
  });
}

// map
if (document.querySelector("#map")) {
  initMap();

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    const map = new YMap(document.getElementById("map"), {
      location: {
        center: [34.11379250000001, 44.947650204413435],
        zoom: 10,
      },
    });
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    const addNewMarker = () => {
      let count = 1;
      return function (a, b) {
        const newMarker = document.createElement("div");
        newMarker.innerHTML = `<div class="map-marker marker-${count}"></div>`;

        const marker = new ymaps3.YMapMarker(
          {
            coordinates: [a, b],
            draggable: false,
            mapFollowsOnDrag: true,
          },
          newMarker
        );
        map.addChild(marker);
        count++;
      };
    };

    const newMarker = addNewMarker();
    newMarker(34.071185499999984, 44.97955057457932);
    newMarker(34.07559599999993, 44.97416907459107);
    newMarker(34.09326599999996, 44.97775907460032);
    newMarker(34.09383200000003, 44.967480574599456);
    newMarker(34.10436899999996, 44.9579200746003);
    newMarker(34.12512899999999, 44.96383857459005);
  }

  // [34.071185499999984, 44.97955057457932];
  // [34.07559599999993, 44.97416907459107];
  // [34.09326599999996, 44.97775907460032];
  // [34.09383200000003, 44.967480574599456];
  // [34.10436899999996, 44.9579200746003];
  // [34.12512899999999, 44.96383857459005];
}

//swiper
if (document.querySelector(".banner")) {
  const swiper1 = new Swiper(".banner", {
    loop: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
if (document.querySelector(".news")) {
  const swiper2 = new Swiper(".news", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 3,
      },
      960: {
        slidesPerView: 4,
      },
      1140: {
        slidesPerView: 5,
      },
    },
  });
}