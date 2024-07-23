//함수[기능]
// x -> x + 1000

const magic = (x) => {
    return x+1000
}
console.log(magic(10000)) // 11000

//1. 두 매개변수를 받고 큰 수를 돌려주는 화살표 함수 만들기
const bigger = (x,y) => {
    return x > y ? x : y;
}
//2. 하나의 매개변수를 받고 홀수 or 짝수 알려주는 함수

const evenOrOdd =  (x) => {
    return x % 2 === 1 ? "홀수" : "짝수"
}

//3. 하나의 매개변수를 받고 홀수이면 제곱해서 돌려주고, 짝수이면 두배해서 돌려주기

const multipleOrDouble = (x) =>{
    return x % 2 === 1 ? x**x : x*2
}

//4. 하나의 매개변수를 받고 문자의 길이가 6글자 보다 크면 🥕 돌려주기 아니면 🍅 돌려주기
const isOver6 = (x) => {
    return x.length > 6 ? "🥕" : "🍅"
}


