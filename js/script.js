function writeUs() {
  var openPopupButton = document.querySelector(".about-us__btn");
  var popup = document.querySelector(".modal.write-us");
  var closePopupButton = popup.querySelector(".btn-modal-close");
  var form = popup.querySelector("form");
  var nameField = popup.querySelector("[name=name]");
  var emailField = popup.querySelector("[name=email]");
  var textField = popup.querySelector("[name=text]");
  var isStorageSupport = true;
  var nameStorage = "";
  var emailStorage = "";

  try {
    nameStorage = localStorage.getItem("nameField");
    emailStorage = localStorage.getItem("emailField");
  } catch (err) {
    isStorageSupport = false;
  }
  openPopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show_flex");
    if (nameStorage) {
      nameField.value = nameStorage;
    } else {
      nameField.focus();
    }
    if (emailStorage) {
      emailField.value = emailStorage;
    }
    if (nameStorage && !emailStorage) {
      emailField.focus();
    }
    if (nameStorage && emailStorage) {
      textField.focus();
    }
  });
  closePopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_flex");
    popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !textField.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      void popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("nameField", nameField.value);
        localStorage.setItem("emailField", emailField.value);
      }
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal__show_flex")) {
        popup.classList.remove("modal__show_flex");
        popup.classList.remove("modal-error");
      }
    }
  });
}

function map() {
  var openMap = document.querySelector(".contacts__link_map");
  var popup = document.querySelector(".modal-map");
  var closePopupButton = popup.querySelector(".btn-modal-close");

  openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show_block");
  });
  closePopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_block");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal__show_block")) {
        popup.classList.remove("modal__show_block");
      }
    }
  });
}

function goodsCardBasket() {
  var openPopupButtonList = document.querySelectorAll(".goods-card__link_buy");
  var popup = document.querySelector(".modal-add-basket");
  var closePopupButton = popup.querySelector(".btn-modal-close");
  var closePopupBigButton = popup.querySelector(".modal-add-basket__continue");

  for (var i = 0; i < openPopupButtonList.length; i++) {
    var openPopupButton = openPopupButtonList[i];

    openPopupButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal__show_flex");
    });
  }
  closePopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_flex");
  });
  closePopupBigButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_flex");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal__show_flex")) {
        popup.classList.remove("modal__show_flex");
      }
    }
  });
}

function service() {
  var serviceItemButton = document.querySelectorAll(".service__item");
  var serviceItemDescription = document.querySelectorAll(".service__item2");
  var addButtonHandler = function (button, description) {
    button.addEventListener("click", function () {
      var buttonActive = document.querySelector(".service__item_active");
      var descriptionActive = document.querySelector(".service__item2_active");

      buttonActive.classList.remove("service__item_active");
      button.classList.add("service__item_active");
      descriptionActive.classList.remove("service__item2_active");
      description.classList.add("service__item2_active");
    });
  };

  for (var i = 0; i < serviceItemButton.length; i++) {
    addButtonHandler(serviceItemButton[i], serviceItemDescription[i]);
  }

}

function slider() {
  var slider = document.querySelector(".promo-slider");
  var prevButton = slider.querySelector(".promo-slider__prev");
  var nextButton = slider.querySelector(".promo-slider__next");
  var sliderDotList = slider.querySelectorAll(".promo-slider__dot-btn");
  var sliderList = slider.querySelectorAll(".promo-slider__item");
  var addDotClickHandler = function (dot, slider) {
    dot.addEventListener("click", function () {
      var sliderDotActive = document.querySelector(".promo-slider__dot-btn_active");
      var sliderActive = document.querySelector(".promo-slider__item.visible");

      sliderDotActive.classList.remove("promo-slider__dot-btn_active");
      dot.classList.add("promo-slider__dot-btn_active");
      sliderActive.classList.remove("visible");
      slider.classList.add("visible");
    });
  };

  nextButton.addEventListener("click", function () {
    for (var i = 0; i < sliderList.length; i++) {
      if (sliderList[i].classList.contains("visible") && i === sliderList.length - 1) {
        sliderList[i].classList.remove("visible");
        sliderDotList[i].classList.remove("promo-slider__dot-btn_active");
        sliderList[0].classList.add("visible");
        sliderDotList[0].classList.add("promo-slider__dot-btn_active");
        return;
      }
      if (sliderList[i].classList.contains("visible") && 0 <= i && i < sliderList.length - 1) {
        sliderList[i].classList.remove("visible");
        sliderDotList[i].classList.remove("promo-slider__dot-btn_active");
        sliderList[i + 1].classList.add("visible");
        sliderDotList[i + 1].classList.add("promo-slider__dot-btn_active");
        return;
      }
    }
  });

  prevButton.addEventListener("click", function () {
    for (var i = 0; i < sliderList.length; i++) {
      var maxI = sliderList.length - 1;

      if (sliderList[i].classList.contains("visible") && i === 0) {
        sliderList[i].classList.remove("visible");
        sliderDotList[i].classList.remove("promo-slider__dot-btn_active");
        sliderList[maxI].classList.add("visible");
        sliderDotList[maxI].classList.add("promo-slider__dot-btn_active");
        return;
      }
      if (sliderList[i].classList.contains("visible") && 0 < i && i <= sliderList.length - 1) {
        sliderList[i].classList.remove("visible");
        sliderDotList[i].classList.remove("promo-slider__dot-btn_active");
        sliderList[i - 1].classList.add("visible");
        sliderDotList[i - 1].classList.add("promo-slider__dot-btn_active");
        return;
      }
    }
  });
  for (var i = 0; i < sliderDotList.length; i++) {
    addDotClickHandler(sliderDotList[i], sliderList[i]);
  }
}

function filterRangeSlider() {
  var filterRange = document.querySelector(".filter-range");
  var rangeSlider = filterRange.querySelector(".range-slider");
  var tdLeft = rangeSlider.querySelector(".range-slider__td_left");
  var tdRight = rangeSlider.querySelector(".range-slider__td_right");
  var thumbLeft = rangeSlider.querySelector(".range-slider__thumb_left");
  var thumbRight = rangeSlider.querySelector(".range-slider__thumb_right");
  var thumbWidth = thumbRight.offsetWidth;
  var valueMin = filterRange.querySelector(".filter-range__value_min");
  var valueMax = filterRange.querySelector(".filter-range__value_max");
  var tableWidth = rangeSlider.offsetWidth;
  var ratio = (valueMax.dataset.max_value - valueMin.dataset.min_value) / (tableWidth - thumbWidth * 2);

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  function init() {
    tdLeft.style.width = (Number(valueMin.value) / ratio + Number(thumbWidth)) + "px";
    tdRight.style.width = (Number(tableWidth) - Number(valueMax.value) / ratio - Number(thumbWidth)) + "px";
  }

  thumbLeft.onmousedown = function (evt) {
    var thumbCoords = getCoords(this);//Получаем координаты текущего thumb
    var shiftX = evt.pageX - thumbCoords.left;//Расстояние от клика до левого края thumb
    var sliderCoords = getCoords(tdLeft);//Получаем координаты левого td
    var widthTdRight = tdRight.offsetWidth;//Получаем шинину правого td

    document.onmousemove = function (evt) {
      var newLeft = evt.pageX - sliderCoords.left;//Расстояние от дв.мыши до левого края tdLeft.
      var widthTd = newLeft - shiftX + thumbWidth;//Расчёт ширины перед условиями

      if (newLeft <= shiftX) {
        widthTd = thumbWidth;
      }
      if (widthTd > tableWidth - widthTdRight) {
        widthTd = tableWidth - widthTdRight;
      }
      tdLeft.style.width = widthTd + "px";
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
      valueMin.value = (tdLeft.offsetWidth - thumbWidth) * ratio;
    };
    return false;
  };

  thumbRight.onmousedown = function (evt) {
    var thumbCoords = getCoords(this);
    var shiftX = thumbWidth - (evt.pageX - thumbCoords.left);
    var sliderCoordsX = getCoords(tdRight).left;
    var widthTdLeft = tdLeft.offsetWidth;
    var widthTdRight = tdRight.offsetWidth;

    document.onmousemove = function (evt) {
      var newRight = sliderCoordsX + widthTdRight - evt.pageX;
      var widthTd = newRight - shiftX + thumbWidth;

      if (newRight <= shiftX) {
        widthTd = thumbWidth;
      }
      if (widthTd > tableWidth - widthTdLeft) {
        widthTd = tableWidth - widthTdLeft;
      }
      tdRight.style.width = widthTd + "px";
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
      valueMax.value = (tableWidth - tdRight.offsetWidth - thumbWidth) * ratio;
    };
    return false;
  };

  valueMin.addEventListener("keydown", function (evt) {
    var tdLeftMaxWidth = tableWidth - tdRight.offsetWidth;
    if (evt.keyCode === 13 && this.focus) {
      evt.preventDefault();
      if (this.value < 0) {
        this.value = 0;
        tdLeft.style.width = thumbWidth + "px";
      }
      if (this.value > (tdLeftMaxWidth - thumbWidth) * ratio) {
        this.value = (tdLeftMaxWidth - thumbWidth) * ratio;
        tdLeft.style.width = tdLeftMaxWidth + "px";
      }
      if (0 <= this.value <= (tdLeftMaxWidth - thumbWidth) * ratio) {
        tdLeft.style.width = (Number(this.value) / ratio + Number(thumbWidth)) + "px";
      }
      this.select();
    }
  });

  valueMin.addEventListener("blur", function () {
    var tdLeftMaxWidth = tableWidth - tdRight.offsetWidth;
    if (this.value < 0) {
      this.value = 0;
      tdLeft.style.width = thumbWidth + "px";
    }
    if (this.value > (tdLeftMaxWidth - thumbWidth) * ratio) {
      this.value = (tdLeftMaxWidth - thumbWidth) * ratio;
      tdLeft.style.width = tdLeftMaxWidth + "px";
    }
    if (0 <= this.value <= (tdLeftMaxWidth - thumbWidth) * ratio) {
      tdLeft.style.width = (Number(this.value) / ratio + Number(thumbWidth)) + "px";
    }
  });

  valueMax.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13 && this.focus) {
      evt.preventDefault();
      if (+this.value < +valueMin.value) {
        this.value = valueMin.value;
        tdRight.style.width = (Number(thumbWidth) - Number(tdLeft.offsetWidth)) + "px";
      }
      if (this.value > (tableWidth - thumbWidth * 2) * ratio) {
        this.value = (tableWidth - thumbWidth * 2) * ratio;
        tdRight.style.width = (Number(thumbWidth) - Number(thumbWidth)) + "px";
      }
      if (valueMin.value <= this.value <= (tableWidth - thumbWidth * 2) * ratio) {
        tdRight.style.width = (Number(tableWidth) - Number(valueMax.value) / ratio - Number(thumbWidth)) + "px";
      }
      this.select();
    }
  });

  valueMax.addEventListener("blur", function () {
    if (+this.value < +valueMin.value) {
      this.value = valueMin.value;
      tdRight.style.width = (Number(thumbWidth) - Number(tdLeft.offsetWidth)) + "px";
    }
    if (this.value > (tableWidth - thumbWidth * 2) * ratio) {
      this.value = (tableWidth - thumbWidth * 2) * ratio;
      tdRight.style.width = (Number(thumbWidth) - Number(thumbWidth)) + "px";
    }
    if (valueMin.value <= this.value <= (tableWidth - thumbWidth * 2) * ratio) {
      tdRight.style.width = (Number(tableWidth) - Number(valueMax.value) / ratio - Number(thumbWidth)) + "px";
    }
  });

  thumbLeft.ondragstart = function () {
    return false;
  };

  init();
}

if (document.querySelector(".about-us__btn") !== null && document.querySelector(".modal.write-us") !== null) {
  writeUs();
}

if (document.querySelector(".contacts__link_map") !== null && document.querySelector(".modal-map") !== null) {
  map();
}

if (document.querySelector(".goods-card__link_buy") !== null && document.querySelector(".modal-add-basket") !== null) {
  goodsCardBasket();
}

if (document.querySelector(".service__item") !== null && document.querySelector(".service__item2") !== null) {
  service();
}

if (document.querySelector(".promo-slider") !== null) {
  slider();
}

if (document.querySelector(".filter-range") !== null) {
  filterRangeSlider();
}
