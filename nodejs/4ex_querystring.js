const express = require("express");
const app = express();
const port = 3000;

app.get("/user", (req, res) => {
  let url_name = req.param("name");
  let url_age = req.param("age") * 1 + 1;
  res.send("userName:" + url_name + " userAge:" + url_age);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
