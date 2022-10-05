/* Методы для работы с размером шрифта */
function offFontSize(controlItem) {
    if (controlItem != null && controlItem.classList.contains('font-size_active')) {
        controlItem.classList.remove('font-size_active');
        
        const theBook = document.getElementById('book');
        const classes = ['book_fs-big','book_fs-small'];
        classes.forEach(item=>{
            if (theBook.classList.contains(item)){
                theBook.classList.remove(item)
            }
        })
    }
}

function onFontSize(controlItem) {
    if (controlItem != null && !controlItem.classList.contains('font-size_active')) {
        controlItem.classList.add('font-size_active');
        
        const theBook = document.getElementById('book');
        if (controlItem.dataset.size === 'small' && !theBook.classList.contains('book_fs-small')) {
            theBook.classList.add('book_fs-small')
        }
        if (controlItem.dataset.size === 'big' && !theBook.classList.contains('book_fs-big')) {
            theBook.classList.add('book_fs-big')
        }
    }
}

function onClickChangeFontSize(event) {
    event.preventDefault(); 
    const currentActiveControl = document.querySelector('.font-size_active');
    if (currentActiveControl !== this) {
        offFontSize(currentActiveControl);
        onFontSize(this);
    }
}

/* Методы для работы с цветом шрифта */
function offTextColor(controlItem){
    if (controlItem != null && controlItem.classList.contains('color_active')) {
        controlItem.classList.remove('color_active');
        
        const theBook = document.getElementById('book');
        const classes = [];
        document.querySelectorAll('.book__control_color .color').forEach(item=>classes.push('book_color-'+item.dataset.textColor));
        classes.forEach(item=>{
            if (theBook.classList.contains(item)){
                theBook.classList.remove(item)
            }
        })
    }
}

function onTextColor(controlItem){
    if (controlItem != null && !controlItem.classList.contains('color_active')) {
        controlItem.classList.add('color_active');
        
        const theBook = document.getElementById('book');
        const className = 'book_color-'+controlItem.dataset.textColor;

        if (!theBook.classList.contains(className)) {
            theBook.classList.add(className)
        }
    }
}

function onClickChangeTextColor(event){
    event.preventDefault(); 
    const currentActiveControl = document.querySelector('.book__control_color .color_active');
    if (currentActiveControl !== this) {
        offTextColor(currentActiveControl);
        onTextColor(this);
    }
}

/* Методы для работы с цветом фона */
function offBackgroundColor(controlItem){
    if (controlItem != null && controlItem.classList.contains('color_active')) {
        controlItem.classList.remove('color_active');
        
        const theBook = document.getElementById('book');
        //const classes = ['book_bg-gray','book_bg-black','book_bg-white'];
        const classes = [];
        document.querySelectorAll('.book__control_background .color').forEach(item=>classes.push('book_bg-'+item.dataset.bgColor));
        classes.forEach(item=>{
            if (theBook.classList.contains(item)){
                theBook.classList.remove(item)
            }
        })
    }
}

function onBackgroundColor(controlItem){
    if (controlItem != null && !controlItem.classList.contains('color_active')) {
        controlItem.classList.add('color_active');
        
        const theBook = document.getElementById('book');
        const className = 'book_bg-'+controlItem.dataset.bgColor;

        if (!theBook.classList.contains(className)) {
            theBook.classList.add(className)
        }
    }
}

function onClickChangeBackgroundColor(event){
    event.preventDefault(); 
    const currentActiveControl = document.querySelector('.book__control_background .color_active');
    if (currentActiveControl !== this) {
        offBackgroundColor(currentActiveControl);
        onBackgroundColor(this);
    }
}


function run() {
    document.querySelectorAll('.font-size').forEach(item=>item.addEventListener('click', onClickChangeFontSize));
    document.querySelectorAll('.book__control_color .color').forEach(item=>item.addEventListener('click', onClickChangeTextColor));
    document.querySelectorAll('.book__control_background .color').forEach(item=>item.addEventListener('click', onClickChangeBackgroundColor));
}

run();