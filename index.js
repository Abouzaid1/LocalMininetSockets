const http = require('http');
const { createServer } = require('node:http');
const { Server } = require("socket.io");
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = new Server(server)
io.on('connect', (socket) => {
    socket.on('joinTopo', (data) => {
        console.log('User Joined');
        socket.emit("joinTopo",data)
    });
});

server.listen(6000, '0.0.0.0', () => {
    console.log('server running at 6000');
});