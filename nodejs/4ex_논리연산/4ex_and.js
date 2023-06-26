const log = console.log;

log(false && false);
log(true && false);
log(true && false && console.log("넌날미워할수없어"));
log(true && console.log("넌날미워할수없어") && true); // 실행은 되지만 undefined 반환
log(false && true);
log(false && 333);
log(true && true);
log(true && 123);
