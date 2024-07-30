// const div = document.createElement("div");
// //div.innerText or div.textContent
// div.innerText = "메가커피 존맛탱";
// div.style.backgroundColor = "skyblue";
// document.body.appendChild(div);

//quiz
//박스만들기
const [background, content, height, width] =
  prompt("색깔 내용 높이 넓이").split(" ");
const div = document.createElement("div");
div.style.background = background;
div.style.height = height + "px";
div.style.width = width + "px";
div.innerText = content;
document.body.appendChild(div);
