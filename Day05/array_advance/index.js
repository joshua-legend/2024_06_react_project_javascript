const stocks = ["samsung","kakao","apple","evidia"]

// 변형자 기능들
stocks.push("hybe") // 뒤에 추가
stocks.pop() // 뒤에서 하나 빼기
stocks.unshift("daewoo"); //앞에서 넣기
stocks.shift() // 앞에서 빼기
stocks.reverse();
console.log(stocks)

// 접근자 기능들
stocks.indexOf("kakao") //몇 번째 찾기
stocks.includes("hybe") // 존재 유무 찾기

// 뉴스기사를 스크랩해서 prompt로 입력하고,
// 1.찾고 싶은 단어를 prompt로 입력해서 있으면 있음! 없으면 없음!
// 2.해당 단어가 몇번째에 있는지 알려주기!(있다고 가정하에!)

const news = prompt("뉴스기사 입력")
const word = prompt("찾고 싶은 단어 입력")
alert(news.split(" ").includes(word) ? "있음" : "없음")
alert(news.split(" ").indexOf(word))











