const express = require("express");
const app = express();
const port = 3000;

app.get("/user/:name/:gender/:age/:address", (req, res) => {
  const params = req.params; //객체로 들어옴
  console.log(params);
  res.send(
    "userName:" +
      params.name +
      " userGender:" +
      params.gender +
      " userAge:" +
      params.age +
      " userAddress:" +
      params.address
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
