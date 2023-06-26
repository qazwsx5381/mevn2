// 게시물 인덱스
let currentIndex = 0;

// 게시물 불러오기
function getLocal() {
  const postsString = localStorage.getItem("posts");
  if (postsString) {
    return JSON.parse(postsString);
  } else {
    return [];
  }
}

// 게시물 저장
function saveLocal(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// 현재시간 불러오기
function timestamp() {
  var today = new Date();
  today.setHours(today.getHours() + 9);
  return today.toISOString().replace("T", " ").substring(0, 19);
}

// 게시물 생성
function createLocal(title, content, name, count, time, id) {
  const posts = getLocal();
  const newPost = {
    title: title,
    content: content,
    name: name,
    count: count,
    time: time,
    id: id,
  };
  posts.push(newPost);
  saveLocal(posts);
}

// 게시물 수정
function editPost(index) {
  const posts = getLocal();
  const post = posts[index];
  document.getElementsByClassName("main")[0].style.display = "none";
  document.getElementsByClassName("edit")[0].style.display = "block";
  document.getElementsByClassName("show")[0].style.display = "none";
  document.getElementsByClassName("btn_main")[0].style.display = "none";
  document.getElementsByClassName("btn_list")[0].style.display = "none";
  document.getElementsByClassName("btn_edit")[0].style.display = "flex";

  document.getElementById("title_input").value = post.title;
  document.getElementById("content_input").value = post.content;
  document.getElementById("name_input").value = post.name;
  editTitle = post.title;
  editContent = post.content;

  document.getElementById("title_input").addEventListener("change", (event) => {
    editTitle = event.currentTarget.value;
  });
  document
    .getElementById("content_input")
    .addEventListener("change", (event) => {
      editContent = event.currentTarget.value;
    });

  document.getElementById("btn_edit_1").addEventListener("click", () => {
    if (editTitle === "") {
      editTitle = post.title;
      editContent;
    } else if (editContent === "") {
      editTitle;
      editContent = post.content;
    } else if (editTitle === "" && editContent === "") {
      editTitle = post.title;
      editContent = post.content;
    } else {
      editTitle;
      editContent;
    }
    post.title = editTitle;
    post.content = editContent;
    saveLocal(posts);
    showDetail(index);
  });
  document.getElementById("btn_del_1").addEventListener("click", () => {
    showDetail(index);
  });
}

// 게시물 리스트 보기
function renderLocal() {
  const postsList = document.getElementsByClassName("main_list")[0];
  const posts = getLocal();
  if (posts.length === 0) {
    const link = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = "작성된 게시물이 없습니다.";
    td.className = "board_num";
    td.setAttribute("colspan", "5");
    link.append(td);
    postsList.appendChild(link);
    document.querySelector("td").style.backgroundColor = "gainsboro";
    document.querySelector("td").style.height = "30px";
  } else {
    for (let i = posts.length - 1; i >= 0; i--) {
      const post = posts[i];
      const link = document.createElement("tr");
      const td = document.createElement("td");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      link.setAttribute("class", "line");
      link.style.textAlign = "center";
      td.textContent = post.id;
      td1.textContent = post.title;
      td2.textContent = post.name;
      td3.textContent = post.count;
      td4.textContent = post.time;
      td.className = "board_num";
      td1.className = "board_tit";
      td2.className = "board_create";
      td3.className = "board_count";
      td4.className = "board_time";

      td1.addEventListener("click", () => {
        showDetail(i);
      });
      link.append(td, td1, td2, td3, td4);
      postsList.appendChild(link);
      document.querySelectorAll("td").forEach((v) => {
        v.style.backgroundColor = "gainsboro";
      });
      document.querySelectorAll("td.board_tit").forEach((v) => {
        v.addEventListener("mouseover", () => {
          v.style.backgroundColor = "lightgray";
        });
      });
      document.querySelectorAll("td.board_tit").forEach((v) => {
        v.addEventListener("mouseleave", () => {
          v.style.backgroundColor = "gainsboro";
        });
      });
    }
  }
  b_list = document.querySelector("button#create");
  b_list.addEventListener("click", () => {
    window.location = "./create.html";
  });
}

// 게시물 내용 보기(제목 클릭)
function showDetail(index) {
  const posts = getLocal();
  const post = posts[index];
  post.count = post.count + 1;
  saveLocal(posts);
  document.getElementById("show_id_value").textContent = post.id;
  document.getElementById("show_title_value").textContent = post.title;
  document.getElementById("show_count_value").textContent = post.count;
  document.getElementById("show_name_value").textContent = post.name;
  document.getElementById("show_time_value").textContent = post.time;
  document.getElementById("show_content_value").textContent = post.content;
  document.getElementsByClassName("main")[0].style.display = "none";
  document.getElementsByClassName("edit")[0].style.display = "none";
  document.getElementsByClassName("show")[0].style.display = "block";
  console.log(document.getElementsByClassName("btn_main"));
  document.getElementsByClassName("btn_main")[0].style.display = "none";
  document.getElementsByClassName("btn_list")[0].style.display = "flex";
  document.getElementsByClassName("btn_edit")[0].style.display = "none";
  console.log(document.getElementById("btn_list"));
  document.getElementById("btn_list").addEventListener("click", () => {
    window.location = "./noticeboard.html";
  });
  document.getElementById("btn_edit").addEventListener("click", () => {
    editPost(index);
  });
  document.getElementById("btn_del").addEventListener("click", () => {
    deletePost(index);
  });
  document.getElementById("btn_pre").addEventListener("click", () => {
    showPreviousPost(index);
  });
  document.getElementById("btn_next").addEventListener("click", () => {
    showNextPost(index);
  });
}

// 이전 게시물 보기
function showPreviousPost(index) {
  const previousIndex = index - 1;
  showDetail(previousIndex);
}

// 다음 게시물 보기
function showNextPost(index) {
  const posts = getLocal();
  const nextIndex = index + 1;
  showDetail(nextIndex);
}

// 게시글 삭제
function deletePost(index) {
  const posts = getLocal();
  posts.splice(index, 1);
  saveLocal(posts);
  window.location = "./noticeboard.html";
}

// 초기 게시물 렌더링
renderLocal();
