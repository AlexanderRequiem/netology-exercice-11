function onclickMenu(event) {
    event.preventDefault(); 

    const parent = event.currentTarget.parentElement;
    const subMenu = parent.querySelector('.menu_sub');

    if (subMenu.classList.contains('menu_active')) {
        subMenu.classList.remove('menu_active')
    } else {
        document.querySelectorAll('.menu_active').forEach(item => item.classList.remove('menu_active'));
        subMenu.classList.add('menu_active');
    }
}

function run() {
    document.querySelectorAll('.menu__link').forEach(item => {
        const parent = item.parentElement;
        const subMenu = parent.querySelectorAll('.menu_sub');
        if (subMenu.length !== 0) {
            item.addEventListener('click', onclickMenu);
        }    
    });    
}    

run();
