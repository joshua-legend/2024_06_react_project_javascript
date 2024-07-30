// container 찾기!
const container = document.querySelector(".container");

// hex 코드 배열
const hex = [..."123456789abcdef"];

// min~max중 아무 정수 랜덤 주기
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min); // 최댓값은 제외, 최솟값은 포함;

// 헥사코드 색깔 만들기 함수
const makeColor = () =>
  "#" +
  Array(6)
    .fill()
    .map((v) => hex[getRandomInt(0, hex.length)])
    .join("");

// 200개 배열에 컬러함수 실행 채우기
const colors = Array(200)
  .fill()
  .map((v) => makeColor());

// 200개 배열을 순회해서 div만들고 색채우고 컨테이너에 넣기
colors.forEach((v) => {
  const div = document.createElement("div");
  div.className = "box";
  div.style.backgroundColor = v;
  container.appendChild(div);
});
