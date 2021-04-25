let socketio = {}

function getSocket(server) {
    socketio.io = require('socket.io')(server,{cors: true})
}

socketio.getSocket = getSocket;

module.exports = socketio