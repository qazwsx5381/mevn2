const express = require("express");
const path = require("path");
const logger = require("morgan");
const { table } = require("console");
const app = express();
const PORT = 3000;
const _path = path.join(__dirname, "./4ex_dist");
console.log(_path);
app.use("/", express.static(_path));
app.use(logger("tiny"));

app.get("/data", (req, res) => {
  let { name, age, select, content, date } = req.query;

  let a = `
    <h1 style="background-color: aquamarine; height: 75px; margin: 0; display: flex; justify-content: center; align-items: center;">오늘도 파이팅!</h1>
    <div class="modal" 
    style="display: block; position: absolute; top: 0; left: 0; width: 100%; min-width: 450px; height: 100%; background-color: rgba(0, 0, 0, 0.5);">
      <div class="modal-body" 
      style="position: absolute; top: 30%; left: 35%; display:flex; justify-content:center; 
      align-items:center; flex-direction:column; background-color:white; width:30%; height:40%;">
        <div class="btn" style="position:absolute; left:90%; top:5%;">
          <img src="/closeBtn.png" alt="닫기" width="16px" height="16px">
        </div>
        <div>${name}님 어서오세요.</div>
        <div>${date}에 접속하셨군요.</div>
      </div>
    </div>
    <script>
    document.querySelector("div.btn").addEventListener("click", () => {
      document.querySelector("div.modal").style.display = "none";
    });
    </script>
    <div style="margin-top:10px; padding-top:10px; border-top:1px solid black;">
    <div style="display:flex; justify-content:center; align-items:center; min-width:450px; width:100%; height:auto; text-align: center; border-bottom: 1px solid black;">
      <div style="display:flex; justify-content:center; align-items:center; width:15%; height:30px; border-right:1px solid black;">이 름</div>
      <div style="display:flex; justify-content:center; align-items:center; width:85%; height:30px;">${name}</div>
    </div>
    <div style="display:flex; justify-content:center; align-items:center; min-width:450px; width:100%; height:auto; text-align: center; border-bottom: 1px solid black;">
      <div style="display:flex; justify-content:center; align-items:center; width:15%; height:30px; border-right:1px solid black;">나 이</div>
      <div style="display:flex; justify-content:center; align-items:center; width:85%; height:30px;">${age}</div>
    </div>
    <div style="display:flex; justify-content:center; align-items:center; min-width:450px; width:100%; height:auto; text-align: center; border-bottom: 1px solid black;">
      <div style="display:flex; justify-content:center; align-items:center; width:15%; height:30px; border-right:1px solid black;">성 별</div>
      <div style="display:flex; justify-content:center; align-items:center; width:85%; height:30px;">${select}</div>
    </div>
    <div style="display:flex; justify-content:center; align-items:center; min-width:450px; width:100%; height:auto; text-align: center; border-bottom: 1px solid black;">
      <div style="display:flex; justify-content:center; align-items:center; width:15%; height:30px; border-right:1px solid black;">날 짜</div>
      <div style="display:flex; justify-content:center; align-items:center; width:85%; height:30px;">${date}</div>
    </div>
    <div style="display:flex; justify-content:center; align-items:center; min-width:450px; width:100%; height:auto; text-align: center;">
      <div style="display:flex; justify-content:center; align-items:center; width:15%; height:30px; border-right:1px solid black;">내 용</div>
      <div style="display:flex; justify-content:center; align-items:center; width:85%; height:30px;">${content}</div>
    </div>
    </div>
    <div style="border-top:1px solid black; padding:5px; margin-top:10px;">
    <a href="/index.html" style="text-decoration-line:none">HOME</a>
    </div>
    `;

  res.send(a);
});

app.listen(PORT, () => {
  console.log(`너의 서버는? ${PORT}`);
});
