const express = require("express");
const path = require("path"); // 경로모듈
const logger = require("morgan");
const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "./dist"); // __dirname 절대경로를 찾아 거기에 dist 경로 추가
console.log(_path); // d:\RYC\MEVN\nodejs\dist
app.use("/", express.static(_path)); // dist폴더 내의 index.html 기준으로 호스트 서비스 시작
app.use(logger("tiny"));

app.listen(PORT, () => {
  console.log(`너의 서버는? ${PORT}`);
});
