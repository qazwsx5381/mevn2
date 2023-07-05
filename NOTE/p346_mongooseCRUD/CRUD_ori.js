require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpwd
const HOST = process.env.dbhost
console.log(USER, PWD, HOST)
const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify',false) // 6.0 이후 자동관리
mongoose.set('strictQuery', false) // 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
const mycol = require('./schema.js')
module.exports = mycol
