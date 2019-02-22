var openPopupButtonFlex = document.querySelector('.about-us__btn');
var popupWriteUs = document.querySelector('.modal.write-us');
var closePopupButtonWriteUs = popupWriteUs.querySelector('.btn-modal-close');

var openMap = document.querySelector('.contacts__img');
var popupMap = document.querySelector('.modal-map');
var closePopupButtonMap = popupMap.querySelector('.btn-modal-close');

openPopupButtonFlex.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add('modal__show_flex')
});

closePopupButtonWriteUs.addEventListener('click', function () {
  popupWriteUs.classList.remove('modal__show_flex')
});

openMap.addEventListener('click', function () {
  popupMap.classList.add('modal__show_block')
});

closePopupButtonMap.addEventListener('click', function () {
  popupMap.classList.remove('modal__show_block');
});

