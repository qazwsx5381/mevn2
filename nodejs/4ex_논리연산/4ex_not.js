const log = console.log;

log(!true);
log(!true && false);
log(!true || false);
log(!true && true);

log(true || (log("내가 누구게") && false)); // 우선순위 ! (not) > && (and) > || (or)
