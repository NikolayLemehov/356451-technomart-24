var currentLocation = window.location;

function writeUs() {
  var openPopupButton = document.querySelector('.about-us__btn');
  var popup = document.querySelector('.modal.write-us');
  var closePopupButton = popup.querySelector('.btn-modal-close');

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal__show_flex')
  });

  closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal__show_flex')
  });
}

function map() {
  var openMap = document.querySelector('.contacts__img');
  var popup = document.querySelector('.modal-map');
  var closePopupButton = popup.querySelector('.btn-modal-close');

  openMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal__show_block')
  });

  closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal__show_block');
  });
}

function goodsCardBasket() {
  var openPopupButtonList = document.querySelectorAll('.goods-card__link_buy');
  var popup = document.querySelector('.modal-add-basket');
  var closePopupButton = popup.querySelector('.btn-modal-close');

  for (var i = 0; i < openPopupButtonList.length; i++) {
    var openPopupButton = openPopupButtonList[i];
    openPopupButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('modal__show_flex')
    });
  }

  closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal__show_flex')
  });
}

function service() {
  var serviceItemList = document.querySelectorAll('.service__item');

  for (var i = 0; i < serviceItemList.length; i++) {
    var serviceItem = serviceItemList[i];

    serviceItem.addEventListener('click', function (evt) {
      var serviceItemActive = document.querySelector('.service__item_active');

      evt.preventDefault();
      serviceItemActive.classList.remove('service__item_active');
      this.classList.add('service__item_active');
    })
  }
}

function slider() {
  var prevButton = document.querySelector('.promo-slider__prev');
  var nextButton = document.querySelector('.promo-slider__next');
  var sliderDotList = document.querySelectorAll('.promo-slider__dot-btn');
  var sliderList = document.querySelectorAll('.promo-slider__item');
  var addDotClickHandler = function (dot, slider) {
    dot.addEventListener('click', function () {
      var sliderDotActive = document.querySelector('.promo-slider__dot-btn_active');
      var sliderActive = document.querySelector('.promo-slider__item.visible');

      sliderDotActive.classList.remove('promo-slider__dot-btn_active');
      dot.classList.add('promo-slider__dot-btn_active');
      sliderActive.classList.remove('visible');
      slider.classList.add('visible');
    })
  };

  nextButton.addEventListener('click', function () {
    for (var i = 0; i < sliderList.length; i++) {
      if (sliderList[i].classList.contains('visible') && i === sliderList.length - 1) {
        sliderList[i].classList.remove('visible');
        sliderDotList[i].classList.remove('promo-slider__dot-btn_active');
        sliderList[0].classList.add('visible');
        sliderDotList[0].classList.add('promo-slider__dot-btn_active');
        console.log('else' + i);
        return
      }
      if (sliderList[i].classList.contains('visible') && 0 <= i && i < sliderList.length - 1) {
        sliderList[i].classList.remove('visible');
        sliderDotList[i].classList.remove('promo-slider__dot-btn_active');
        sliderList[i + 1].classList.add('visible');
        sliderDotList[i + 1].classList.add('promo-slider__dot-btn_active');
        console.log('if' + i);
        return
      }
    }
  });

  prevButton.addEventListener('click', function () {
    for (var i = 0; i < sliderList.length; i++) {
      var maxI = sliderList.length - 1;

      if (sliderList[i].classList.contains('visible') && i === 0) {
        sliderList[i].classList.remove('visible');
        sliderDotList[i].classList.remove('promo-slider__dot-btn_active');
        sliderList[maxI].classList.add('visible');
        sliderDotList[maxI].classList.add('promo-slider__dot-btn_active');
        return
      }
      if (sliderList[i].classList.contains('visible') && 0 < i && i <= sliderList.length - 1) {
        sliderList[i].classList.remove('visible');
        sliderDotList[i].classList.remove('promo-slider__dot-btn_active');
        sliderList[i - 1].classList.add('visible');
        sliderDotList[i - 1].classList.add('promo-slider__dot-btn_active');
        return
      }
    }
  });

  for (var i = 0; i < sliderDotList.length; i++) {
    addDotClickHandler(sliderDotList[i], sliderList[i]);
  }
}

if (currentLocation.pathname === '/356451-technomart-24/index.html') {
  writeUs();
  map();
  goodsCardBasket();
  service();
  slider();
}

if (currentLocation.pathname === "/356451-technomart-24/catalog.html") {
  goodsCardBasket();
}


