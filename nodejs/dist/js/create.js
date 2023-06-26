// 게시물 인덱스
let currentIndex = 0;

// 게시물 불러오기
function getPosts() {
  const postsString = localStorage.getItem("posts");
  if (postsString) {
    return JSON.parse(postsString);
  } else {
    return [];
  }
}

// 게시물 저장
function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// 현재시간 불러오기
function timestamp() {
  var today = new Date();
  today.setHours(today.getHours() + 9);
  return today.toISOString().replace("T", " ").substring(0, 19);
}

// 게시물 생성
if (getPosts().length === 0) {
  id_count = 0;
} else {
  id_count = getPosts()[getPosts().length - 1].id;
}
count_num = 0;
function createPost(title, content, name, count, time, id) {
  const posts = getPosts();
  const newPost = {
    title: title,
    content: content,
    name: name,
    count: count,
    time: time,
    id: id,
  };
  posts.push(newPost);
  savePosts(posts);
}

// 게시물 작성 폼 제출
document.getElementById("btn_save").addEventListener("click", function (event) {
  id_count++;
  id_count = id_count;
  event.preventDefault();
  const titleInput = document.getElementById("title_input");
  const contentInput = document.getElementById("content_input");
  const nameInput = document.getElementById("name_input");

  const title = titleInput.value;
  const content = contentInput.value;
  const name = nameInput.value;
  if (title) {
    title;
  } else {
    alert("제목을 입력하세요");
    return;
  }
  if (content) {
    content;
  } else {
    alert("내용을 입력하세요");
    return;
  }
  if (name) {
    name;
  } else {
    alert("작성자를 입력하세요");
    return;
  }
  const count = count_num;
  const time = timestamp();
  const id = id_count;

  createPost(title, content, name, count, time, id);

  titleInput.value = "";
  contentInput.value = "";
  nameInput.value = "";
  alert("저장이 완료되었습니다.");
  window.location = "./noticeboard.html";
  // location.replace("./noticeboard.html");
});
document.getElementById("btn_list").addEventListener("click", () => {
  window.location = "./noticeboard.html";
});
