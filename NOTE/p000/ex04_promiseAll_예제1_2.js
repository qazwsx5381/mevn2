// 정상적인 promise All 동작
function test(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof text === 'string'
        ? resolve('스트링입니다.')
        : reject('파악이 안됩니다.')
    }, time)
    console.log(text)
  })
}

// 일반 비동기처리
const testGo = async () => {
  console.time('일반 비동기처리')
  try {
    await test('코딩', 3000)
    await test('Coding', 2000)
    await test('자바스크립트', 1000)
    await test(123, 1700)
  } catch (e) {
    console.log(e)
  }
  console.timeEnd('일반 비동기처리')
}
testGo()
