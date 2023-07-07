const mongoose = require('mongoose')
const Photo = require('./photo.js')
const secure_DB = 'mongodb://127.0.0.1/my_database'

mongoose.set('strictQuery', false)
mongoose
  .connect(secure_DB, { useUnifiedTopology: true, useNewUrlParser: true }) // 6.0 이후로는 자동 관리
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
const main = async () => {
  console.time('id를 오름차순으로 찾기')
  const ret = await Photo.createIndexes({ id: 1 })
  console.log(ret)
  console.timeEnd('id를 오름차순으로 찾기')
}
main()
