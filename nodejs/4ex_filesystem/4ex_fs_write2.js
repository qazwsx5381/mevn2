const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express()

const _path = path.join(__dirname, '/')

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/data', (req, res) => {
  const { name, content } = req.query
  fs.writeFile(_path + name + '.txt', content, (e) => {
    if (e) console.log(e)
    console.log('파일 작성이 완료되었습니다.')
    res.send(
      `<script>alert('${name}.txt로 저장되었습니다.');history.go(-1);</script>`
    )
  })
  fs.unlink('./1.txt')
})


app.listen(3000, () => {
  console.log(`Listing on port 3000`)
})
