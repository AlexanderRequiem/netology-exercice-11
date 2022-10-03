// Обработчик для закрытия модального окна
function closeModal(e) {
    e.currentTarget.closest('.modal').remove('modal_active');
}

// Отображает основное модальное окно
function showMain() {
    document.getElementById('modal_main').classList.add('modal_active');
}

// Отображает модальное окно "Хорошо сделано"
function showSuccess() {
    document.getElementById('modal_success').classList.add('modal_active');
}

function run() {
    document.querySelectorAll('.modal__close').forEach( item => item.addEventListener('click', closeModal));
    document.querySelectorAll('.show-success').forEach( item => item.addEventListener('click', showSuccess));

    showMain();    
}


run();