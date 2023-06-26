const arr = Array(100)
  .fill(0)
  .reduce((a, c, i, arr) => {
    arr[i] = i + 1
    return arr
  }, 0)
let arr1 = arr.reduce((a, c) => a + c)
console.log(arr)
console.log(arr1)
