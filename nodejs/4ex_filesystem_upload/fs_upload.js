const express = require('express')
const path = require('path')
const multer = require('multer')
const fs = require('fs')
const app = express()
const port = 3000

const _path = path.join(__dirname, '/')
app.use('/', express.static(_path))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, _path)
  },
  filename: function (req, res, cb) {
    const fix = Buffer.from(res.originalname, 'latin1').toString('utf-8') // 파일명 한글이 깨질 때
    cb(null, fix)
    // cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage }) // 멀터의 옵션에 디스크스토리지 엔진 탑재

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(
    `<script>alert('파일 업로드 완료');location.replace('index.html')</script>`
  )
})

app.get('/mkdir', (req, res) => {
  const { mk } = req.query
  let save = `<script>alert('${mk} 폴더 생성 완료');location.replace('index.html')</script>`
  fs.readdir(_path, 'utf-8', (err, data) => {
    fs.mkdir(_path + '/' + mk, (e) => {
      if (e) console.log(e)
      console.log(data.indexOf(mk))
      if (data.indexOf(mk) >= 0) {
        res.send(
          `<script>alert('동일한 이름의 폴더가 있습니다.');location.replace('index.html')</script>`
        )
        return
      } else {
        res.send(save)
      }
    })
  })
})

app.get('/list', (req, res) => {
  fs.readdir(_path, 'utf-8', (err, data) => {
    let a = '<ul type="square">'
    let sta = ''
    data.forEach((v, i) => {
      if (v.indexOf('.') === -1) {
        a += `<li><a href="#" style="text-decoration-line:none;">[폴더] ${v}</a><button class="information" type="button">파일정보</button></li>`
      } else {
        a += `<li><a href="/${v}" style="text-decoration-line:none;">${v}</a><button onclick="location.href='list/del/${v}'">삭제</button><button class="information" type="button">파일정보</button></li>`
      }
    })
    a += `</ul>
    <button onclick="location.href='/index.html'">처음으로</button>
    <script>`
    for (let i = 0; i < data.length; i++) {
      // fs.stat(_path + '/' + data[i], (err, stats) => {
      a += `document.querySelectorAll('button.information')[${i}].addEventListener('click',()=>{console.log('${data[i]}')});`
      // })
    }
    a += `</script>`
    res.send(a)
  })
})

app.get('/list/del/:fname', (req, res) => {
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
  console.log(`port는? ${port}`)
})
