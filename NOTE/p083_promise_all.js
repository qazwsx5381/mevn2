const async = (message, ret) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message)
      console.log(new Date())
      resolve(ret)
    }, ret * 1000)
  })
}
const promises = [async('비동기함수1발동', 2), async('비동기함수2발동', 1)]

Promise.all(promises).then((data) => {
  console.log(data)
})

const timeTest = async () => {
  console.time('promiseAll측정')
  await Promise.all(promises).then(console.log())
  console.timeEnd('promiseAll측정')
}
timeTest()
