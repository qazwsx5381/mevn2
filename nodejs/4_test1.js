const app = require("express")();

app.get("/search.naver", (req, res) => {
  //   const equery = req.query.query;
  //   const ewhere = req.query.where;
  let { query, where } = req.query;
  res.send(`query는 ${query}이고 where은 ${where}입니다.`);
});
// app.get("/search.naver/:where/:sm/:fbm/:ie/:query", (req, res) => {
//   const obj = req.params;
//   res.send(`query는 ${obj.query}이고 where은 ${obj.where}입니다.`);
// });

app.listen(3000, () => {
  console.log("");
});
