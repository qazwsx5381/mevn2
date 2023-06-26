const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))

io.on('connection', (socket) => {
  //받을 내용
  socket.on('chat message', (msg) => {
    if (msg === '/명령어') {
      io.emit('chat message', '/안녕, /')
    } else if (msg === '/안녕') {
      io.emit('chat message', '님 반가워요!')
    } else {
      io.emit('chat message', msg)
    } //보낼 내용
  })
})

server.listen(port, () => {
  console.log(`사용중인 포트는 : ${port}`)
})

/* 
메세지를 전송한 클라이언트에게만 메세지를 전송
socket.emit('event_name',msg)

메세지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메세지를 전송한다.
socket.broadcast.emit('event_name',msg)

연결 종료 시
socket.on('disconnect',()=>{})

연결 시
socket.on('connection',()=>{})
*/
