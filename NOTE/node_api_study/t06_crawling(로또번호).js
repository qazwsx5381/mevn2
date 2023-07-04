const axios = require('axios')
const cheerio = require('cheerio')

axios
  .get(
    'https://search.daum.net/search?w=tot&DA=UME&t__nil_searchbox=suggest&sug=&sugo=16&sq=fhEh&o=3&q=%EB%A1%9C%EB%98%90'
  )
  .then((res) => {
    const $ = cheerio.load(res.data)
    const date = $('.date').text()
    const num = $('.lottonum').text()
    console.log(date + '\n' + num)
  })
