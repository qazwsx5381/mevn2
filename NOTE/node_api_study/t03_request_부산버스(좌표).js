const request = require('request')
// const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser')
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()
require('dotenv').config()
const key = process.env.okey
const url = `http://apis.data.go.kr/6260000/BusanBIMS/busStopList`
const bstop = encodeURI('서면역')
const opt = '?numOfRows=15&pageNo=1&bstopnm=' + bstop + '&serviceKey='

const urlTotal = url + opt + key

request(urlTotal, (e, res, body) => {
  const view = parser.parse(body)
  const _ = view.response.body.items.item
  console.log(_)
})
