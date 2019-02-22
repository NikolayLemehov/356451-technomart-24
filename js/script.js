function writeUs() {
  var openPopupButton = document.querySelector('.about-us__btn');
  var popup = document.querySelector('.modal.write-us');
  var closePopupButton = popup.querySelector('.btn-modal-close');

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal__show_flex')
  });

  closePopupButton.addEventListener('click', function () {
    popup.classList.remove('modal__show_flex')
  });
}

function map() {
  var openMap = document.querySelector('.contacts__img');
  var popup = document.querySelector('.modal-map');
  var closePopupButton = popup.querySelector('.btn-modal-close');

  openMap.addEventListener('click', function () {
    popup.classList.add('modal__show_block')
  });

  closePopupButton.addEventListener('click', function () {
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

  closePopupButton.addEventListener('click', function () {
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

writeUs();
map();
goodsCardBasket();
service();
