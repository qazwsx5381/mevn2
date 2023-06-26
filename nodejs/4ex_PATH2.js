const express = require("express");
const app = express();
const port = 3000;

app.get("/user", (req, res) => {
  const str = `<body>
    <button><a href="/user/0">life</a></button>
    <button><a href="/user/1">Avengers</a></button>
    <button><a href="/user/2">javascript</a></button>
    <h1>버튼을 입력하세요</h1>
    </body>`;

  res.send(str);
});

app.get("/user/:id", (req, res) => {
  const obj = req.params ?? 0; //객체로 들어옴
  const arr = [
    "My life is egg",
    "The avengers are Back",
    "javascript is good enough",
  ];
  const str = `<body>
  <button><a href="/user/0">life</a></button>
  <button><a href="/user/1">Avengers</a></button>
  <button><a href="/user/2">javascript</a></button>
  
  <h1>${arr[obj.id]}</h1>
  </body>`;

  res.send(str);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
