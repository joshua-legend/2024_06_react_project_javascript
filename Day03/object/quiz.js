// 유저에게 책 제목, 책 가격, 책 출판사를 물어보고
// 책을 콘솔로 오브젝트 타입으로 출력하기!

// const title = window.prompt("책 제목")
// const price = window.prompt("책 가격")
// const publisher = window.prompt("책 출판사")

// 1번 방법
// const book = {
//     title: title,
//     price: price,
//     publisher: publisher
// }

// 2번 방법
// const book = {}
// book.title = title;
// book.price = price;
// book.publisher = publisher;


//2.mz퀴즈
//유저에게 mbti를 물어봐서 성향을 알려주는 코드
// ex) e에요? i에요? e
// ex) n에요? s에요? n
// ex) t에요? f에요? t
// ex) j에요? p에요? j
// -> 외향적이고 상상력이많고 이성적이고 계획적네요!

// const first = window.prompt("e or i")
// const second = window.prompt("s or n")
// const third = window.prompt("t or f")
// const fourth = window.prompt("j or p")

// const mbti = {
//     e: "외향적",
//     i: "내향적",
//     s: "감각적",
//     n: "상상적",
//     t: "이성적",
//     f: "감성적",
//     p: "즉흥적",
//     j: "계획적"
// }

// console.log(`당신은 ${mbti[first]} ${mbit[second]} ${mbti[third]} ${mbti[fourth]}`)




// 태어난 년도 입력하면 띠 나오는 프로그램

const year = Number(window.prompt("몇년생이냐?"))
const zodiac = year % 12;

const animal = {
    0: "원숭이띠",
    1: "닭띠",
    2: "개띠",
    3: "돼지띠",
    4: "쥐띠",
    5: "소띠",
    6: "호랑이띠",
    7: "토끼띠",
    8: "용띠",
    9: "뱀띠",
    10: "양띠",
    11: "말띠",
}

console.log(`당신은 ${animal[zodiac]} 이군요!`)










