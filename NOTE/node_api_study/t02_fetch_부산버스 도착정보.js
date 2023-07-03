const request = require('request')
const convert = require('xml-js')
require('dotenv').config()
const key = process.env.okey

const url = `https://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?bstopid=500090000&serviceKey=${key}`

const arr = []

request(url, (e, res, body) => {
  const result = convert.xml2js(body, {
    compact: true, // Compact JSON으로 받기
    spaces: 4 // XML 결과물 들여쓰기에 사용할 공백 수
  })
  console.log(result.response.body.items.item)
})
