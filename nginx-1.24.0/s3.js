const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>3000입니다.</h1>");
});
app.listen(3000, () => console.log("listening on port3000"));
