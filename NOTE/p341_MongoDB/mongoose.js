const mongoose = require('mongoose')
const Photo = require('./photo.js')
const fs = require('fs')
const path = require('path')
const mongoDB = 'mongodb://127.0.0.1/my_database'
const secure_DB = 'mongodb://YC:1234@127.0.0.1:27017/d1'

mongoose.set('strictQuery', false)
mongoose
  .connect(mongoDB, { useNewUrlParser: true }) // 6.0 이후로는 자동 관리
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
const _path = path.join(__dirname, './photos.json')
const main = async () => {
  const t = JSON.parse(fs.readFileSync(_path).toString())
  console.time('사진 삽입')
  Photo.insertMany(t).then(() => {
    console.timeEnd('사진 삽입')
  })
}
main()
