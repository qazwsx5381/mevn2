const http = require("http");
const PORT = 12010;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const obj = {
    이름: "큰돌",
  };
  res.end(JSON.stringify(obj));
});
setTimeout(() => {
  JSON.parse("{Z");
}, 1000);

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
