const elsSliderBtn = document.querySelectorAll('.slider__button');
const elButtonNext = document.querySelector('.btn-next');
const elButtonPrevious = document.querySelector('.btn-previous');
const elsSliderInfoContent = document.querySelectorAll('.slider__info-content');


function deactivateSliderInfo () {
  elsSliderInfoContent.forEach(function (elSliderInfoContent) {
    elSliderInfoContent.parentElement.classList.remove("slider__info--active");
  });
}

elsSliderInfoContent.forEach(function (elSliderInfoContent) {
  elButtonNext.addEventListener('click', function () {
    deactivateSliderInfo();

    elSliderInfoContent.parentElement.classList.add("slider__info--active");
  })

  elButtonPrevious.addEventListener('click', function () {
    deactivateSliderInfo();

    elSliderInfoContent.previousElementSibling.parentElement.classList.add("slider__info--active");
  })
})
