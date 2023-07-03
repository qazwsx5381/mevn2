const request = require('request')
require('dotenv').config()
const key = process.env.okey

const date = new Date()
function today() {
  const year = date.getFullYear()
  const month = ('0' + (1 + date.getMonth())).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)

  return year + month + day
}
function time() {
  const hour = ('0' + date.getHours()).slice(-2)
  return hour + '00'
}
function time_1() {
  const hour = ('0' + (date.getHours() - 1)).slice(-2)
  return hour + '00'
}
console.log(today(), time())

let standard_url = `http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?beach_num=304&base_date=${today()}&base_time=${time()}&serviceKey=${key}&dataType=JSON`
let url = ''

request(standard_url, (e, res, body) => {
  const arr = JSON.parse(body)
  arr.response.header.resultCode == '03'
    ? (url = `http://apis.data.go.kr/1360000/BeachInfoservice/getVilageFcstBeach?beach_num=304&base_date=${today()}&base_time=${time_1()}&serviceKey=${key}&dataType=JSON`)
    : (url = standard_url)
  request(url, (e, res, body) => {
    const hae = JSON.parse(body)
    console.log(hae)
    const result = hae.response.body.items.item
    console.log(`해운대해수욕장 (${result[0].fcstTime}시 예상날씨)`)
    console.log(`기온 : ${result[0].fcstValue}℃`)
    console.log(`동서바람성분 : ${result[1].fcstValue}m/s`)
    console.log(`남북바람성분 : ${result[2].fcstValue}m/s`)
    console.log(`풍향 : ${result[3].fcstValue}도`)
    console.log(`풍속 : ${result[4].fcstValue}m/s`)
    console.log(`날씨상태코드 : ${result[5].fcstValue}`)
    console.log(`강수상태코드 : ${result[6].fcstValue}`)
    console.log(`강수확률 : ${result[7].fcstValue}%`)
    console.log(`강수량 : ${result[9].fcstValue}`)
    console.log(`파고 : ${result[8].fcstValue}m`)
    // console.log(`남북바람성분 : ${result[9].fcstValue}`)
  })
})
