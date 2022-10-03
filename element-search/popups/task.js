function run() {
    const handlerCloseModalMain = function() {
        elementMain.classList.remove("modal_active");
    }

    const handlerShowSuccess = function() {
        document.getElementById('modal_success').classList.add('modal_active');
    }

    document.querySelectorAll('.modal__close').forEach( item => item.addEventListener('click', handlerCloseModalMain));
    document.querySelectorAll('.show-success').forEach( item => item.addEventListener('click', handlerShowSuccess));

    const elementMain = document.getElementById('modal_main');
    if (elementMain !== null) {
        elementMain.classList.add('modal_active');
    }
}


run();