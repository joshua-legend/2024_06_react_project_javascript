//1. 밑변과 높이를 입력받고, 정삼각형 넓이 alert으로 출력
const base = Number(window.prompt("밑변"))
const height = Number(window.prompt("높이"))
window.alert(`정삼각형의 넓이: ${base*height*0.5}`)
//2. 정수 입력하고 양수입력하면, 양수! 아니면 0 또는 음수 출력

const num = Number(window.prompt("정수 입력"))
const result = num > 0 ? "양수" : "0 또는 음수";
window.alert(`${num}은 ${result} 입니다.`)
//3. 10000~99999 중 아무 숫자 입력하면 만천백십 붙혀서 출력
// ex) 12345 -> 1만2천3백4십5
// ex) 23232 -> 2만3천2백3십2

const num1 = Number(window.prompt("정수 입력"))
// 78414

// 7.8414
const tenThousand = parseInt(num1 / 10000);
// 8.414
const thousand = parseInt((num1 % 10000) / 1000);
// 4.14
const hundred = parseInt((num1 % 1000) / 100);
// 1.4
const ten = parseInt((num1 % 100) / 10);
// 4
const one = num1 % 10;

window.alert(`${tenThousand}만 ${thousand}천 ${hundred}백 ${ten}십 ${one}`)



// 정수 10000~99999 입력 받고, 100의 자리만 출력하기!
// ex) 12735 -> 700, 74636 -> 600
const num3 = Number(window.prompt("정수 입력"))
const result1 = parseInt((num3 % 1000) / 100) * 100
window.alert(`${result1}`)








