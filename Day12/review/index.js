import { data } from "./dummy.js";

//{"credit_card":"6763868264954524","file_name":"RidiculusMusVivamus.avi",
//"money":"$285.14","longitude":98.6270628,"latitude":3.6711541}
//1. credit_card: 뒤의 네자리는 남기고 나머지 *, file_name 확장자만 남기고
//money-> 반올림 첫번째자리 $290

const newData = data.map((x) => {
  const card = [...x.credit_card]
    .map((v, i) => (i <= x.credit_card.length - 5 ? "*" : v))
    .join("");
  const [_, extension] = x.file_name.split(".");
  const newMoney = "$" + Math.round(Number(x.money.replace("$", "")) / 10) * 10;
  return { ...x, credit_card: card, file_name: extension, money: newMoney };
});

console.log(newData);
