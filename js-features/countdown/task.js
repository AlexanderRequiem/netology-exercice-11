const element = document.getElementById('timer');
if (element !== null) {
    let timerValue = +element.innerText;
    let timerId = setInterval(() => {
        timerValue--;
        element.innerText = timerValue;
        if (timerValue <= 0) {
            clearInterval(timerId);
            window.alert('Вы победили в конкурсе!');
        }
    }, 1000);
}