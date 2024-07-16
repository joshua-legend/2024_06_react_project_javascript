//1. 유저에게 카페 음료를 물어보고
//에이드가 포함되면 에이드 주문! 아니면 음료 주문!
const beverage = prompt("카페 음료 입력")
const order = beverage.includes("에이드") ? "에이드 주문!" : "음료 주문!"
alert(`${order}`)

//2. 영단어 아무거나 물어보고
const word = prompt("영단어 입력")
const index = word.indexOf('e') + 1 || '없음'
alert(`알파벳 e는 ${index}`)
//알파벳 'e'가 몇번째인지 알려주는 코드 없으면 없음!


// 3. 영어 문장을 입력해서 배열화 시키기
// ex) I am hungry -> ['i','am','hungry']
const sentence = prompt("문장 입력")
console.log(sentence.split(" "))

// 4. 영단어 입력하고, 알파벳 하나 입력하고, 숫자 입력하고
// apple, l, 3 -> appappapp
// banana, n, 3 -> bababa
// fine, i, 5 -> fffff
const word1 = prompt("영단어 입력")
const alpha = prompt("알파벳 입력")
const num  = Number(prompt("숫자 입력"))

const result = word1.slice(0,word1.indexOf(alpha)).repeat(num)
console.log(result)











