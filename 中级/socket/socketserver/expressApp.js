const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{cors: true});

server.listen(80);

io.on('connection', client => {
    client.emit('news', {hello: 'hello Vue'});
    client.on('event', data => { console.log(data) });
});
