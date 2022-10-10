function setStateOfChildElements(parent, state) {
    const list = parent.querySelectorAll('.interest__check');
    list.forEach(item => {
        item.checked = state
    });
}

function run() {
    const listUpLevel = document.querySelectorAll('.interest__check');
    listUpLevel.forEach(item => { 
        item.addEventListener('change', (event) => {
            setStateOfChildElements(event.currentTarget.closest('li'), event.currentTarget.checked);
        });
    });
}

run();