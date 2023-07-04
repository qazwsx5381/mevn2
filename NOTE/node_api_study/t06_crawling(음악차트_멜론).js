const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.melon.com/'
axios.get(url).then((res) => {
  const $ = cheerio.load(res.data)
  const song = []
  const artist = []
  const chartTop10 = []
  $('.rank_info .song .mlog').each(function () {
    song.push($(this).text())
  })
  $('.rank_info .artist .ellipsis .checkEllipsisRealtimeChart .mlog').each(
    function () {
      artist.push($(this).text())
    }
  )
  artist.forEach((v, i) => {
    chartTop10.push({ song: song[i], artist: v })
  })
  console.log(chartTop10)
})
