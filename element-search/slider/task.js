function init() {
    // Настраиваем обработчик для кнопки слайд-влево
    document.querySelector('.slider__arrow_prev').addEventListener('click', onClickPrev);

    // Настраиваем обработчик для кнопки слайд-вправо
    document.querySelector('.slider__arrow_next').addEventListener('click', onClickNext);

    // Настраиваю обработчик для точек
    document.querySelectorAll('.slider__dot').forEach(item => {
        item.addEventListener('click', onClickDot)
    });
}

function onClickPrev(event) {
    const sliderActive = document.querySelector('.slider__item_active');
    const sliders = Array.from(document.querySelectorAll('.slider__item'));
    const dots = Array.from(document.querySelectorAll('.slider__dot'));
    const indexSliderActive = sliders.indexOf(sliderActive);

    sliderActive.classList.remove('slider__item_active');
    if (indexSliderActive !== -1) {
        dots[indexSliderActive].classList.remove('slider__dot_active');
        if (indexSliderActive !== 0) {
            sliders[indexSliderActive-1].classList.add('slider__item_active');
            dots[indexSliderActive-1].classList.add('slider__dot_active');
        } else {
            sliders[sliders.length-1].classList.add('slider__item_active');
            dots[sliders.length-1].classList.add('slider__dot_active');
        }
    }
}

function onClickNext(event) {
    const sliderActive = document.querySelector('.slider__item_active');
    const sliders = Array.from(document.querySelectorAll('.slider__item'));
    const dots = Array.from(document.querySelectorAll('.slider__dot'));
    const indexSliderActive = sliders.indexOf(sliderActive);

    sliderActive.classList.remove('slider__item_active');
    if (indexSliderActive !== -1) {
        dots[indexSliderActive].classList.remove('slider__dot_active');
        if (indexSliderActive !== sliders.length-1) {
            sliders[indexSliderActive+1].classList.add('slider__item_active');
            dots[indexSliderActive+1].classList.add('slider__dot_active');
        } else {
            sliders[0].classList.add('slider__item_active');
            dots[0].classList.add('slider__dot_active');
        }
    }
}

function onClickDot(event) {
    const sliders = Array.from(document.querySelectorAll('.slider__item'));
    const dots = Array.from(document.querySelectorAll('.slider__dot'));

    dots.forEach((item, index) => {
        if (item === event.currentTarget) {
            item.classList.add('slider__dot_active');
            sliders[index].classList.add('slider__item_active');
        } else {
            item.classList.remove('slider__dot_active');
            sliders[index].classList.remove('slider__item_active');
        }
    });
}

init();