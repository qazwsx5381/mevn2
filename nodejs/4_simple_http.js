const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain;charset=utf-8"); // 한글 깨짐 방지
  res.write(`첫번째 write<br>`);
  res.write(`두번째 write`);
  res.end(`전송 끝1`);
  //   res.send("send 전송 끝1");
});
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
