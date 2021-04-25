const server = require('http').createServer();
const io = require('socket.io')(server,{cors: true});

server.listen(80);

io.on('connection', client => {
    client.emit('news', {hello: 'hello Vue'});
    client.on('event', data => { console.log(data) });
});

// const server = require('http').createServer(handler)
// const io = require('socket.io')(server,{cors: true})
// const fs = require('fs')
//
// server.listen(80)
//
// // 处理web服务器正常请求
// function handler(req, res) {
//     fs.readFile(__dirname + '/index.html',
//         function (err, data) {
//             if (err) {
//                 res.writeHead(500)
//                 return res.end('Error')
//             }
//             res.writeHead(200)
//             res.end(data)
//         })
// }
//
// // 实时通讯的连接
// // io.on('connection', ()=>{}),监听io的连接事件
// io.on('connection', function (client) {
//     // emit发事件:前面的字符串为该事件的方法,客户端可以通过该方法实现一对一的访问
//     client.emit('news', {hello: 'world'})
//     // on接收事件
//     client.on('event', function (data) {
//         console.log(data)
//     })
// })
