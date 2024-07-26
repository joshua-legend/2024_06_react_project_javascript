// reduce: 누적시키다

//accumulation: 누적
//current: 원래 x
//0 : 스타드 값
[1, 2, 3, 4].reduce((acc, cur) => {
  return acc + cur;
}, 0);

//[0~100]까지 의 합을

Array(100)
  .fill()
  .map((v, i) => i + 1)
  .reduce((acc, cur) => acc + cur, 0);

// const a = [..."hello"].join();
// const b = [..."hello"].join("");

// ["AAA","BBB","CCC","DDD"] -> ["aaa","bbb","ccc","ddd"]
// ["KKK","ZZZ"] -> ['kkk','zzz']

// const a = ["AAA", "BBB", "CCC", "DDD"].map((v) => v.toLowerCase());

// "abstract algebra" -> "AbstrAct AlgebrA"
const word = "abstract algebra";
const result = [...word].map((v) =>
  [..."aA"].some((x) => v === x) ? v.toUpperCase() : v.toLowerCase()
);
