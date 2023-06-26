console.log('hi')

setTimeout(() => {
  console.log('async 첫번째 function 완료')
}, 1)
setTimeout(() => {
  console.log('async 두번째 function 완료')
}, 1)

console.log('안녕하세요')
