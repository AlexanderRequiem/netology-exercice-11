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

function onClickPrev() {
    showSlider(getIndexActiveSlider()-1);
}

function onClickNext() {
    showSlider(getIndexActiveSlider()+1);
}

function onClickDot(event) {
    const dots = Array.from(document.querySelectorAll('.slider__dot'));
    const index = dots.findIndex(item => item == event.currentTarget);
    showSlider(index);
}

function getIndexActiveSlider() {
    const sliders = Array.from(document.querySelectorAll('.slider__item'));
    return sliders.findIndex(item => item.classList.contains('slider__item_active'));
}

function showSlider(index) {
    const sliders = Array.from(document.querySelectorAll('.slider__item'));
    const dots = Array.from(document.querySelectorAll('.slider__dot'));

    const indexActive = sliders.findIndex(slider => slider.classList.contains('slider__item_active'));
    sliders[indexActive].classList.remove('slider__item_active');
    dots[indexActive].classList.remove('slider__dot_active');

    if (index < 0) {
        index =  sliders.length-1;
    }
    if (index >= sliders.length) {
        index = 0; 
    }

    sliders[index].classList.add('slider__item_active');
    dots[index].classList.add('slider__dot_active');
}

init();