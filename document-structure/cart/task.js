function getCount(product) {
    const quantity = product.querySelector('.product__quantity-value');
    return +quantity.textContent;
}

function setCount(product, value) {
    const quantity = product.querySelector('.product__quantity-value');
    if (value > 0) {
        quantity.textContent = value;
    }
}

function createProduct(product) {
    const result = document.createElement('div');
    result.classList.add('cart__product');
    result.dataset.id = product.dataset.id;

    const img = document.createElement('img');
    img.classList.add('cart__product-image');
    img.setAttribute('src', product.querySelector('.product__image').getAttribute('src'));
    result.appendChild(img);

    const count = document.createElement('div');
    count.classList.add('cart__product-count');
    count.textContent = getCount(product);
    result.appendChild(count);

    return result;
}

function addProductIntoCart(product) {
    const listCartProducts = document.querySelector('.cart__products');
    let productInCart = Array.from(listCartProducts.children).find(item => item.dataset.id === product.dataset.id);
    if (productInCart === undefined) {
        listCartProducts.appendChild(createProduct(product));
    } else {
        const count = productInCart.querySelector('.cart__product-count');
        count.textContent = +count.textContent + getCount(product);
    }

    setCount(product, 1);
}

function onClickDec(event) {
    const product = event.currentTarget.closest('.product');
    setCount(product, getCount(product)-1);
}

function onClickInc(event) {
    const product = event.currentTarget.closest('.product');
    setCount(product, getCount(product)+1);
}

function onClickAdd(event) {
    const product = event.currentTarget.closest('.product');
    addProductIntoCart(product);
}

function run() {
    document.querySelectorAll('.product').forEach(product => {
        product.querySelectorAll('.product__quantity-control_dec').forEach(button_dec => button_dec.addEventListener('click', onClickDec));
        product.querySelectorAll('.product__quantity-control_inc').forEach(button_inc => button_inc.addEventListener('click', onClickInc));
        product.querySelectorAll('.product__add').forEach(button_add => button_add.addEventListener('click', onClickAdd));
   });

}

run();