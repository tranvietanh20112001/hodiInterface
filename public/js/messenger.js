const messagesEl = document.querySelector('.messages');
const messageInputEl = document.querySelector('#message-input');
const sendBtnEl = document.querySelector('#send-btn');

function addMessage(message) {
  const messageEl = document.createElement('div');
  messageEl.classList.add('message');
  messageEl.textContent = message;
  messagesEl.appendChild(messageEl);
}

sendBtnEl.addEventListener('click', () => {
  const message = messageInputEl.value;
  if (message) {
    addMessage(message);
    messageInputEl.value = '';
  }
});

messageInputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const message = messageInputEl.value;
    if (message) {
      addMessage(message);
      messageInputEl.value = '';
    }
  }
});