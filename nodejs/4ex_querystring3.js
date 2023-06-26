const express = require("express");
const app = express();
const port = 3000;

// app.get("/user", (req, res) => {
//   let url_name = req.param("name");
//   let url_gender = req.param("gender");
//   let url_age = req.param("age");
//   let url_address = req.param("address");
//   res.send(
//     "userName:" +
//       url_name +
//       " userGender:" +
//       url_gender +
//       " userAge:" +
//       url_age +
//       " userAddress:" +
//       url_address
//   );
// });

// app.get("/user", (req, res) => {
//   let id = req.query.id; //객체로 들어옴
//   const arr = [
//     "My life is egg",
//     "The avengers are Back",
//     "javascript is good enough",
//   ];
//   const str = `<body>
//     <a href="/user?id=0">life</a>
//     <a href="/user?id=1">Avengers</a>
//     <a href="/user?id=2">javascript</a>
//     <h1>${arr[+id] ?? "버튼을 눌러주세요."}</h1>
//     </body>`;

//   res.send(str);
// });

app.get("/user", (req, res) => {
  let id = req.query.id; //객체로 들어옴
  const arr = [
    "My life is egg",
    "The avengers are Back",
    "javascript is good enough",
    "test4",
    "test5",
  ];
  const arr1 = [
    "강사",
    "예찬",
    "재희",
    "성준",
    "영완",
    "정우",
    "창준",
    "민지",
    "병오",
    "재영",
  ];
  let str = `<body><h1>류예찬</h1>`;
  arr.forEach((v, i) => {
    str += `<a href="/user?id=${i}">${i + 1}번째</a>&nbsp`;
  });
  str += `<h1>${arr[+id] ?? "버튼을 눌러주세요."}</h1>
    </body>`;
  arr1.forEach((v, i) => {
    str += `<a href="http://tfjs.site:${7900 + i}/user">${v}의 ${
      7900 + i
    }포트 접속하기</a><br>`;
  });

  res.send(str);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
