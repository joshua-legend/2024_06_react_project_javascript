// 일반 함수 f(x) - function

// 함수 정의
function icecream(x){
    console.log(`${x}맛 아이스크림 꿀맛!`)
}

// 함수 실행
// icecream("빨간")
// icecream("녹차")
// icecream("민트")

// x를 넣으면 홀수 짝수인지 콘솔로 알려주는 함수
function oddoreven(x){
    if(x % 2 == 1){
        console.log("홀수")
    }else{
        console.log("짝수")
    }
}
// oddoreven(1);
// oddoreven(2)
// oddoreven(3)

function makeDouble(x) {
    // return 함수의 결과를 돌려주는 키워드
    return x * 2
}

const a = makeDouble(10);
console.log(a)

// x를 입력하면 안녕하세요! ~~님!
function hello(x){
    return `안녕하세요! ${x || "Guest"}님!`
}

function add(x,y){
    return x+y;
}

const a2 = add(10,20); // 30

// minus, multiply, square
function minus(x,y){
    return x-y
}

function multiply(x,y){
    return x*y;
}

function square(x,y){
    return x ** y;
}
