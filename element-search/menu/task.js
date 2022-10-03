function onclickMenu(event) {
    event.preventDefault(); 
    document.querySelectorAll('.menu_active').forEach(item => item.classList.remove('menu_active')); 

    const parent = event.currentTarget.parentElement;
    const subMenu = parent.querySelectorAll('.menu_sub');
    subMenu.forEach(item => item.classList.add('menu_active'));
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
