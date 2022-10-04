function run() {
    document.querySelectorAll('.tab').forEach(item => item.addEventListener('click', onClickTab));
}

function setActiveTab(index) {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    
    // Если индекс задан неверно, ничего не делаем, никуда не сообщаем.
    if (index < 0 || index >= tabs.length) {
        return;
    }
    
    const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
    const indexActiveOld = tabs.findIndex(item => item.classList.contains('tab_active'));
    if (indexActiveOld !== -1) {
        tabs[indexActiveOld].classList.remove('tab_active');
        tabsContent[indexActiveOld].classList.remove('tab__content_active');
    }

    tabs[index].classList.add('tab_active');
    tabsContent[index].classList.add('tab__content_active');
}

function getMyIndex(tab) {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    return tabs.findIndex(item => item === tab);
}

function onClickTab() {
    const index = getMyIndex(this);
    setActiveTab(index);
}

run();