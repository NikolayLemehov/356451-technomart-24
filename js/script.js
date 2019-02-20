var popup = document.querySelector('.modal.write-us');
var openPopupButtonFlex = document.querySelector('.btn-default-contacts');
var openPopupButtonBlock = document.querySelector('.btn-default-contacts');
var closePopupButton = popup.querySelector('.btn-modal-close');

openPopupButtonFlex.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal__show_flex');
});

openPopupButtonBlock.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal__show_block');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal__show_flex');
  popup.classList.remove('modal__show_block');
});

