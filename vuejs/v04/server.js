const express = require('express')
const path = require('path')
const _path = path.join(__dirname, './dist')
const logger = require('morgan')
const VSchema = require('./mdb.cjs')
const app = express()

/* post를 위한 구문 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/* 스태딕 경로 */
app.use('/', express.static(_path))
/* 로그 정보(최소화 해서 표현) */
app.use(logger('tiny'))

/* MongoDB CRUD */
// 1. create
app.post('/dbc', (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const date = req.body.date
  console.log(date)
  ;(() => {
    const _data = { title, content, date }
    const vs = new VSchema(_data)
    const t = vs.save()
    res.send('입력완료!')
  })()
})

app.get('/dbr/:date', (req, res) => {
  const date = req.params.date
  const read = () => {
    VSchema.findOne({ date }, { _id: 0, __v: 0 })
      .then((rst) => {
        res.send(rst)
        app.post('/dbu', (req, res) => {
          const edit_title = req.body.title
          const edit_content = req.body.content
          const edit_date = req.body.date
          ;(() => {
            VSchema.updateOne(
              { date: { $eq: rst.date } },
              {
                $set: {
                  title: edit_title,
                  content: edit_content,
                  date: edit_date
                }
              }
            )
              .then(() => {
                res.send('수정이 완료되었습니다.')
              })
              .catch((e) => console.error(e))
          })()
        })
      })
      .catch((e) => console.error(e))
  }
  read()
})

app.post('/dbd', (req, res) => {
  const del_date = req.body.del_date
  console.log(del_date)
  VSchema.deleteOne({ date: del_date }).then(() => {
    res.send('삭제가 완료되었습니다.')
  })
})

app.listen(3000, () => {
  console.log('3000 포트를 열었습니다.')
})
