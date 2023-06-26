const { Server } = require('socket.io')
const express = require('express')
const http = require('http')
const app = express()
const logger = require('morgan')
const server = http.createServer(app)
const port = 3000
const io = new Server(server)
const path = require('path')
const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    if (msg === '/명령어') {
      io.emit('chat message', '추가 중입니다.')
    } else {
      socket.broadcast.emit('chat message', msg)
    }
  })
  io.on('disconnect', () => {
    console.log('a user disconnected')
  })
})

let count = 0
io.on('connection', function (socket) {
  count++ //사용자가 들어오면 count를 1늘린다.
  io.emit('users.count', `${count}명`) // 접속해있는 모든 사용자의 users.count되있는 부분에 count변수를 뿌림.
  socket.on('disconnect', function () {
    //접속해있는 연결이 종료될 경우 count--해준다.
    count--
    io.emit('users.count', `${count}명`) //빼준 count를 접속해있는 모든 user에게 뿌림.
  })
})

server.listen(port, () => {
  console.log(`listening on : ${port}`)
})
