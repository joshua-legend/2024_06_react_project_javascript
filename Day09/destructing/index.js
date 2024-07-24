// + -> 사칙연산, 문자 연결 연산

// 1. ... -> String -> Array,
const a = "coffee".split("");
const b = [..."coffee"];

//"abCdeFGHijklM" -> 소문자만 있는 배열로 바꾸셈
[..."abCdeFGHijklM"].filter((x) => x === x.toLowerCase());

//"abCdeFGHijklM" -> ["A","B","c"..]
[..."abCdeFGHijklM"].map((x) =>
  x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
);

// 2. ... 배열은 찢다.
const fruits = ["tomato", "mango", "melon", "apple"];

const a0 = fruits;
const [a1, b1] = fruits;
const [a2, ...rest] = fruits;
console.log(rest[2]); //
