//1. 유저에게 커피 종류와 커피의 샷을 물어보고 
// 3 이상이면 진하게, 3 미만이면 연하게
// ~~ 커피가 진하게 나왔습니다 or ~~커피가 연하게 나왔습니다.

const coffee = window.prompt("커피 종류 ㄱ")
const shot = window.prompt("샷 ㄱ")
const density = Number(shot) >= 3 ? "진하게" : "연하게"
window.alert(`주문한 ${coffee}가 ${density} 나왔습니다.`)

//2. 유저에게 정수를 하나 입력 받고, 홀수인지 짝수인지 판별해주기!
const num = window.prompt("정수 입력")
const result = Number(num) % 2 == 0 ? "짝수" : "홀수"
window.alert(result)

// ex) 3 -> 홀수! 2 -> 짝수!
