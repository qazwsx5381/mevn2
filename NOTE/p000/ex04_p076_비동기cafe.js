/* 
주문 받은 대로 처리하기
1. x초만에 아메리카노가 나왔습니다! (1 <= x < 2)
2. x초만에 라때가 나왔습니다. (2 <= x < 3.5)
3. x초만에 카푸치노가 나왔습니다. (3 <= x < 5)
4. x초만에 에스프레소가 나왔습니다. (2 <= x < 3)
*/
const a = (c = '아메리카노') => {
  return new Promise((resolve, reject) => {
    const delay = (Math.random() + 1).toFixed(3)
    setTimeout(() => {
      console.log(`1. ${delay} 초만에 ${c}가 나왔습니다.`)
      resolve(`1. ${delay} 초만에 ${c}가 나왔습니다.`)
    }, delay * 1000)
  })
}
const b = (c = '라떼') => {
  return new Promise((resolve, reject) => {
    const delay = (Math.random() * 1.5 + 2).toFixed(3)
    setTimeout(() => {
      console.log(`2. ${delay} 초만에 ${c}가 나왔습니다.`)
      resolve(`2. ${delay} 초만에 ${c}가 나왔습니다.`)
    }, delay * 1000)
  })
}
const c = (c = '카푸치노') => {
  return new Promise((resolve, reject) => {
    const delay = (Math.random() * 2 + 3).toFixed(3)
    setTimeout(() => {
      console.log(`3. ${delay} 초만에 ${c}가 나왔습니다.`)
      resolve(`3. ${delay} 초만에 ${c}가 나왔습니다.`)
    }, delay * 1000)
  })
}
const d = (c = '에스프레소') => {
  return new Promise((resolve, reject) => {
    const delay = (Math.random() + 2).toFixed(3)
    setTimeout(() => {
      console.log(`4. ${delay} 초만에 ${c}가 나왔습니다.`)
      resolve(`4. ${delay} 초만에 ${c}가 나왔습니다.`)
    }, delay * 1000)
  })
}
a()
  .then(() => b())
  .then(() => c())
  .then(() => d())
