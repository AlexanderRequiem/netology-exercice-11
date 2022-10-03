function run() {
    const btn = document.querySelector('.dropdown');
    btn.addEventListener('click', changeVisibleList);

    document.querySelectorAll('.dropdown__item').forEach(item => {
        item.addEventListener('click', setTextOnButton);
    });
}

function changeVisibleList() {
    const list = this.querySelector('.dropdown__list');
    if (list.classList.contains('dropdown__list_active')) {
        list.classList.remove('dropdown__list_active')
    } else {
        list.classList.add('dropdown__list_active')
    }
}

function setTextOnButton(event) {
    event.preventDefault(); 
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = this.textContent;
}

run();