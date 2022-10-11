function createTooltip(text) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = text;
    return tooltip;
}

function showTooltip(targetElement) {
    let flagHide = false;

    // Скроем все отображаемые всплывушечки
    listTooltip = document.querySelectorAll('.tooltip.tooltip_active');
    listTooltip.forEach(item => {
        if (item.classList.contains('tooltip_active')) {
            item.classList.remove('tooltip_active');
            if (item.parentElement === targetElement) {
                flagHide = true;
            }
        }
    })

    if (flagHide) {
        /* Если мы кликнули по элементу для которого уже отображалась всплывушка - мы её уже спратали.
           И больше ничего не делаем. Выходим.
        */
        return;
    }

    let tooltip = targetElement.querySelector(".tooltip");
    if (tooltip === null) {
        tooltip = createTooltip(targetElement.getAttribute('title'));
        targetElement.insertAdjacentElement('beforeEnd', tooltip);
     }
     
    tooltip.style.left = targetElement.getBoundingClientRect().left+'px';
    tooltip.classList.add('tooltip_active');
}

function run() {
    const listElementsNeedTooltip = document.querySelectorAll('.has-tooltip');

    listElementsNeedTooltip.forEach(item => item.addEventListener('click', (event) => {
        event.preventDefault();
        showTooltip(event.currentTarget);
    }));
}

run();