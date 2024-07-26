import { data } from "./mock.js"; //1. 모카루 데이터 여기로 import 하기

//3. credit_card -> 앞에 4자리만 살리고 나머지는 ***로 바꾸기
const a = data.map((x) => {
  const credit_card = [...x.credit_card]
    .map((v, i) => (i < 4 ? v : "*"))
    .join("");
  return { ...x, credit_card };
});
console.log(a);
