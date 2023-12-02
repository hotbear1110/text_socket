const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let images = {};
let viewHidden = true;

// Serve the index.html file
app.get('/edit', (req, res) => {
  res.sendFile(__dirname + '/public/html/edit.html');
});
app.get('/view', (req, res) => {
  res.sendFile(__dirname + '/public/html/view.html');
});

app.use('/static', express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle messages received from the client
    socket.on('text', (msg) => {
        console.log(msg);
        socket.broadcast.emit('text', msg);
      });

    // Handle disconnections
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  
    // Handle errors
    socket.on('error', (err) => {
      console.error(`Socket error: ${err}`);
    });
  });
  

// Start the server
server.listen(2020, () => {
  console.log('Server listening on port 2020');
});