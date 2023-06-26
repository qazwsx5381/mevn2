const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const { Script } = require('vm')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')
// console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/files', (req, res) => {
  fs.readdir(_path, 'utf-8', (err, data) => {
    let a = '<ul type="square">'
    data.forEach((v, i) => {
      if (v.indexOf('.') === -1) {
        a += `<li><a href="#" style="text-decoration-line:none;">[폴더] ${v}</a></li>`
      } else {
        a += `<li><a href="/${v}" style="text-decoration-line:none;">${v}</a><button onclick="location.href='del/${v}'">삭제</button></li>`
      }
    })
    a += `</ul>`
    res.send(a)
  })
})
app.get('/del/:fname', (req, res) => {
  const fname = req.params.fname
  fs.unlink(_path + '/' + fname, (err) => {
    if (err) console.log('삭제에 실패하였습니다.')
    console.log('삭제에 성공하였습니다.')
  })
  res.send(
    // `<script>alert('${fname}을 삭제되었습니다.');location.href='/files'</script>`
    `<script>alert('${fname}을 삭제되었습니다.');location.href=document.referrer</script>`
  )
})

app.listen(port, () => {
  console.log('listenig on port' + port)
})
