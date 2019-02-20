var openPopupButtonFlex = document.querySelector('.about-us__btn');
var popupWriteUs = document.querySelector('.modal.write-us');
var closePopupButton = popupWriteUs.querySelector('.btn-modal-close');

openPopupButtonFlex.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add('modal__show_flex');
});

closePopupButton.addEventListener('click', function () {
  popupWriteUs.classList.remove('modal__show_flex');
  popupWriteUs.classList.remove('modal__show_block');
});

