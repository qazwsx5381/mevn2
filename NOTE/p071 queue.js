class Queue {
  constructor() {
    this.a = []
  }
  front() {
    if (this.a.length === 0) {
      return '큐가 비었습니다.(front)'
    } else return this.a[0]
  }
  enqueue(value) {
    this.a.push(value)
  }
  dequeue() {
    if (this.a.length === 0) {
      console.log('큐가 비었습니다.(back)')
      return
    }
    this.a.shift()
  }
}
const q = new Queue()
q.enqueue(11)
q.enqueue(2)
q.enqueue(3)
q.enqueue(44)
q.enqueue(55)
for (let i = 0; i < 6; i++) {
  console.log(q.front())
  q.dequeue()
}
