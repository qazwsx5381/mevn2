const a = [1, 2, 3, 4, 5]
console.log(a.includes(3))

// const ret = a.indeOf(3)
const ret = a.findIndex((e) => e === 3)
console.log(ret)
