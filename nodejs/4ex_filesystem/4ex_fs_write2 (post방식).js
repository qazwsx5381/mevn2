const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))
app.use(express.json()) // post방식으로
app.use(express.urlencoded({ extended: true }))

app.post('/data', (req, res) => {
  const obj = req.body
  console.log(obj)
  // fs.writeFile(_path + obj.name + '.txt', JSON.stringify(obj), (e) => {
  //   if (e) console.log(e)
  //   console.log('파일 작성이 완료되었습니다.')
  //   res.send(
  //     `<script>alert('${obj.name}.txt로 저장되었습니다.');history.go(-1);</script>`
  //   )
  // })
  fs.writeFile(_path + '/save.txt', JSON.stringify(obj), (e) => {
    if (e) console.log(e)
    console.log('파일 작성이 완료되었습니다.')
    res.send(
      `<script>alert('save.txt로 저장되었습니다.');history.go(-1);</script>`
    )
  })
  // fs.appendFile(_path + obj.name + '.txt', obj.content, (e) => {
  //   res.send(
  //     `<script>alert('${obj.name}.txt로 저장되었습니다.');history.go(-1);</script>`
  //   )
  // })
})

app.get('/list', (req, res) => {
  fs.readdir(_path, 'utf-8', (err, data) => {
    let a = '<ul type="square">'
    data.forEach((v, i) => {
      if (v.indexOf('.') === -1) {
        a += `<li><a href="#" style="text-decoration-line:none;">[폴더] ${v}</a></li>`
      } else {
        a += `<li><input type="checkbox" /><a href="/${v}" style="text-decoration-line:none;">${v}</a></li>`
      }
    })
    a += `</ul>`
    res.send(a)
  })
})

app.listen(3000, () => {
  console.log(`Listing on port 3000`)
})
