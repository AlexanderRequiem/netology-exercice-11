function initOnClick() {
    var holes = document.querySelectorAll('.hole');

    const countDeadElement = document.getElementById('dead');
    const countLostElement = document.getElementById('lost');

    function resetGame(){
        countDeadElement.textContent = 0;
        countLostElement.textContent = 0;
    }

    holes.forEach(hole => {
        hole.onclick = (event) => {
            if (event.target === document.querySelector('.hole_has-mole')) {
                let count = +countDeadElement.textContent;
                countDeadElement.textContent = ++count;
                if (count === 10) {
                    alert('Поздравляю с победой!');
                    resetGame();
                }
            } else {
                let count = +countLostElement.textContent;
                countLostElement.textContent = ++count;
                if (count === 5) {
                    alert('Вы проиграли.');
                    resetGame();
                }
            }
        }
    });
}


initOnClick();