// Boolean 값으로 할 경우
console.log(false || false || false || true || false);
console.log(null || undefined || 0 || false || 0);
console.log(false || false || 0 || -2 || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(true || console.log("나쁜놈아"));
console.log(false || console.log("나쁜놈아"));

// 그 외의 값
console.log(false || null);
console.log(null || false);
console.log(true || null);
