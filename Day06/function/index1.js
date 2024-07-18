// 일반 함수 function 이름(매개변수){return}
function greet(x) {
    return `${x}님 안녕하세요!`
}

// 화살표 함수 ()=>{}
const a = (x) => {
    return `${x}님 안녕하세요!`
}
const b = a("엄준식") // 
console.log(b)

// x,y를 넣으면 제곱해주는 화살표 함수 만들기!
const square = (x,y) => {
    return x**y;
}

// x를 넣으면 {x}럭키비키잖아😉
const wonyoung = (x) => {
    return `${x}라서 럭키비키잖아😊`
}