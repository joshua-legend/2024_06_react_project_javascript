//문자 타입: '',"",``
//숫자 타입: 100, 3.14

//문자 -> 숫자
//Number("문자"), parseInt[해석하셈 정수로]("문자"), +
const num = Number("100");
const num1 = parseInt("100");

//유저한테 숫자 prompt로 두번 입력 받아서
//두 숫자의 합을 alert으로 나타내기!
const first = window.prompt("첫 번째 수 입력")
const second = window.prompt("두 번째 수 입력")
const sum = Number(first) + Number(second)
window.alert(`두 수의 합은 ${sum}입니다.`)


//숫자 -> 문자
//1. String(숫자)
const str = String(100); // "100"
//2. + ""
const str1 = 100 + "" // "100"


//불리언 타입[true or false]
const bool = true;
const bool1 = false;
const bool2 = "true";
const bool3 = "false";


// truthy value: 아래꺼 빼고 다
// falsy value: "", 0, -0, null, undefined

const i = Boolean("") //false






//Null 타입 [비어있음]
//Undefined 타입 [정의 되지 않음]









