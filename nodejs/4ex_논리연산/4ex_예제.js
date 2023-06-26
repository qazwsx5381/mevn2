const log = console.log;

// 1번
log(null || 13 || undefined); // 13

//2번
log(log(7) || 13 || log(0)); // 7 / 13

//3번
log(-1 && null && true); // null

//4번
log(null || (13 && 6) || 2); // 6

//5번
log(null || (13 && log(false)) || 2); // false / 2
