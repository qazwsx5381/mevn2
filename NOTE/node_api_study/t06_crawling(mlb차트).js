const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://sports.news.naver.com/wbaseball/index'
axios.get(url).then((res) => {
  const $ = cheerio.load(res.data)
  let league = []
  let team = []
  $('.inner .title').each(function () {
    console.log($(this).text())
    // league.push($(this).text())
  })
  // $('.inner ._tab_mlb .menu').each(function () {
  //   league.push($(this).text())
  // })

  // console.log(league)
})
