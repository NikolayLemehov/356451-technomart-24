var popup = document.querySelector('.modal.write-us');
var openPopupButton = document.querySelector('.btn-default-contacts');
var closePopupButton = popup.querySelector('.btn-modal-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal__show_flex');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal__show_flex');
});

