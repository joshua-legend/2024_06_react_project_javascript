// 1. 태어난 년도를  물어보고 만 나이으로 출력
const year = window.prompt("몇 년생 입니까?")
window.alert(`만 나이는 ${2024 - Number(year)}이군요!`)
// 2. 한 변의 길이를 입력 받아 정사각형의 넓이를 출력
const side = window.prompt("정사각형의 한 변의 길이 입력")
window.alert(`정사격형의 넓이: ${Number(side) * Number(side)}`)
// 3. 원화를 입력하면 현재 엔화를 출력하기 ex) 10000원 -> 1200엔
const won = window.prompt("원화 입력")
window.alert(`엔화 ${Number(won) * 0.12}`)