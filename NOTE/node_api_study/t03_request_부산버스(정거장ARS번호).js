const request = require('request')
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()
require('dotenv').config()
const key = process.env.okey
const url = `http://apis.data.go.kr/6260000/BusanBIMS/bitArrByArsno`
const bstop = '09719'
const opt = '?arsno=' + bstop + '&serviceKey='

const urlTotal = url + opt + key

request(urlTotal, (e, res, body) => {
  const view = parser.parse(body)
  const _ = view.response.body.items.item
  console.log(_)
})
