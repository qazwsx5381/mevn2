function* any() {
  yield 10;
  if (false) yield 20;
  yield 30;
  return 90;
  yield 40;
}
/* 방법1 */
const iter = any();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/* 방법2 */
// console.log(...any());
