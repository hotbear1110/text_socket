// Set up a WebSocket connection to the server
const socket = io();

let button = document.getElementById('button');

button.addEventListener('mouseup', buttonClick);

function buttonClick(e) {

    const text = document.getElementById('text');

  socket.emit('text', text.value);

}