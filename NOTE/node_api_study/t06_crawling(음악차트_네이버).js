const axios = require('axios')
const cheerio = require('cheerio')

const url =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84'
axios.get(url).then((res) => {
  const $ = cheerio.load(res.data)
  const song = []
  const artist = []
  $('.tit_area').each(function () {
    song.push($(this).text())
  })
  $('.name:last-child').each(function () {
    artist.push($(this).text())
  })
  console.log(song)
  console.log(artist)
  song.forEach((v, i) => {
    console.log(`${i + 1}위 ${v}`)
  })
  //  type_chart
})
