function run() {
    window.addEventListener('scroll', onScroll)
}

function onScroll(event) {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(item => {
        if (isVisible(item)) {
            show(item);
        } else {
            hide(item);
        }
    });
    // console.log(event);
    // console.log(this);
}

function isVisible(element) {
    let rec = element.getBoundingClientRect();
    if (rec.bottom < 0) {
        return false;
    }
    if (rec.top > window.innerHeight) {
        return false;
    }

    return true;
}

function show(element) {
    if (!element.classList.contains('reveal_active')) {
        element.classList.add('reveal_active');
    }
}

function hide(element) {
    if (element.classList.contains('reveal_active')) {
        element.classList.remove('reveal_active');
    }
}

run();