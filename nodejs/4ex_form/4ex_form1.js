const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "./4ex_dist");
console.log(_path);
app.use("/main", express.static(_path));
app.use(logger("tiny"));

app.get("/main/data", (req, res) => {
  let { name, age, content } = req.query;
  console.log(`저의 이름은 ${name}이고 나이는 ${age}, ${content}`);
  res.redirect("/main/done.html");
  //   res.send(`저의 이름은 ${name}이고 나이는 ${age}, ${content}`);
});

app.listen(PORT, () => {
  console.log(`너의 서버는? ${PORT}`);
});
