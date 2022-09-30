const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter')
if (cookieElement !== null && counterElement !== null) {
    const startWidth = cookieElement.width;
    cookieElement.onclick = function() {
        let countClick = +counterElement.textContent;
        counterElement.textContent = ++countClick;
        cookieElement.width = (startWidth === cookieElement.width)?cookieElement.width * 2: cookieElement.width / 2;
    }
}