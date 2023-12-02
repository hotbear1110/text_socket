// Set up a WebSocket connection to the server
const socket = io();

// Handle messages received over the WebSocket connection
socket.addEventListener('text', function(event) {

    document.getElementById("text").innerHTML = event;
});