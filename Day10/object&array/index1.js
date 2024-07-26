// 기본 타입: Number,String, Boolean, Undefined, Null
// 참조 타입: Object -> {}, Array -> [], Math, Date , ...
const book = Object();
const pizza = Array(10).fill("🍕");
const arr = Array(10)
  .fill("")
  .map((x) => !!x);
const pizzaNum = Array(10)
  .fill("🍕")
  .map((x, i) => i + " " + x);

const arr1 = Array(1000)
  .fill(0)
  .map((x, i) => i);

// [0,1000] -> 홀수는 그대로나오고, 짝수 🍕
Array(1001)
  .fill(0)
  .map((v, i) => (i % 2 == 1 ? i : "🍕"));

// 3 6 9 -> [1,1000] -> '👏'

["1", "2", "13", ..."103"];
const a = Array(1000)
  .fill(0)
  .map((v, i) => String(i + 1))
  .map((v) =>
    v.includes("3") || v.includes("6") || v.includes("9") ? "👏" : v
  )
  .map((v) => (v == "👏" ? "👏" : Number(v)));
