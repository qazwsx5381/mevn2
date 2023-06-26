const job = () => {
  const b = Math.random() * 100
  setTimeout(() => {
    console.log('난 1번이야', b)
  }, b)
}
const job1 = () => {
  const b = Math.random() * 100
  setTimeout(() => {
    console.log('난 2번이야', b)
  }, b)
}
const job2 = () => {
  const b = Math.random() * 100
  setTimeout(() => {
    console.log('난 3번이야', b)
  }, b)
}
job()
job1()
job2()
