function sendUserMessage(msg) {
    const messagesBand = document.getElementById('chat-widget__messages');
    const time = new Date();
    const HH = (time.getHours() > 9) ? time.getHours().toString(): '0'+ time.getHours().toString();
    const mm = (time.getMinutes() > 9) ? time.getMinutes().toString(): '0'+ time.getMinutes().toString();
    let messageWithMarkup = `<div class="message message_client"><div class="message__time">${HH}:${mm}</div><div class="message__text">${msg}</div></div>`;
    messagesBand.innerHTML += messageWithMarkup;                       
}

function sendBotMessage(msg) {
    const messagesBand = document.getElementById('chat-widget__messages');
    const time = new Date();
    const HH = (time.getHours() > 9) ? time.getHours().toString(): '0'+ time.getHours().toString();
    const mm = (time.getMinutes() > 9) ? time.getMinutes().toString(): '0'+ time.getMinutes().toString();
    let messageWithMarkup = `<div class="message"><div class="message__time">${HH}:${mm}</div><div class="message__text">${msg}</div></div>`;
    messagesBand.innerHTML += messageWithMarkup;                       
}

function selectAnswer(){
    const answers = [
        'Кто здесь?',
        'Зайдите после праздников.',
        'Будет, шашлык из тебя будет.',
        'Ну откуда ты такой выискался?',
        'Третьим будешь?'
    ];
    const index = Math.floor(Math.random() * answers.length);
    return answers[index];
}



function run() {
    /* Открытие чата */
    document.querySelector('.chat-widget__side').addEventListener('click', (event)=>{
        event.preventDefault();
        let theChat = document.querySelector('.chat-widget');
        if (!theChat.classList.contains('chat-widget_active'))
            theChat.classList.add('chat-widget_active');
    });

    /* Отправка сообщения в чат */
    document.getElementById('chat-widget__input').addEventListener('keyup', (event)=>{
        if (event.key === 'Enter')
        {
            let text = event.currentTarget.value.trim();
            event.currentTarget.value = '';
            if (text.length > 0) {
                sendUserMessage(text);
                sendBotMessage(selectAnswer());
            }
        }
    });
}

run();