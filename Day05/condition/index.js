// 코드 치면 위에서 아래로 감
// 제어문[코드 컨트롤] - 조건문

// const num = Number(prompt("숫자 입력"))
// if(num % 2){
//     alert(`${num}은 홀수입니다!`)
// }else{
//     alert(`${num}은 짝수입니다!`)
// }

// 숫자 입력받고, 양수인지 아니며 양수가 아닌지
// const num = Number(prompt("숫자 입력"))
// if(num>0){
//     alert(`양수`)
// }else{
//     alert(`양수 아님!`)
// }


// 마포,강남,신사,압구정,신촌,노원,화곡,화양
// const seoul = ["마포","강남","신사","압구정","신촌","노원","화곡","화양"]
// const live = prmpot("어디 사셈?")

// if(seoul.includes(live)){
//     alert("서울사람 멋쟁이!")
// }else{
//     alert("촌사람!")
// }

// if(true){

// }else if(true){

// }else if(true){

// }else if(true){

// }else{

// }


//정수를 입력 받고
//양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수

// const num1 = Number(prompt("정수 입력"))

// const positive = num1 > 0;
// const negative = num1 < 0;
// const odd = num1 % 2;
// const even = !(num1 % 2);

// if(positive && odd){
//     alert("양의 홀수")
// }else if(positive && even){
//     alert("양의 짝수")
// }else if(negative && odd){
//     alert("음의 홀수")
// }else if(negative && even){
//     alert("음의 짝수")
// }else{
//     alert("0 입니다!")
// }



// 영어 점수를 입력 받고, 100이면 만점입니다!😊
// const score = Number(prompt("영어 점수"))

// if(score == 100){
//     alert("만점입니다!")
// }else if(score >= 90){
//     alert("A입니다!")
// }else if(score >= 80){
//     alert("B입니다!")
// }else if(score >= 70){
//     alert("C입니다!")
// }else{
//     alert("F입니다!")
// }


//1. 각도 물어보고, 평각,둔각,예각,직각을 알려주는 프로그램
const angle = Number(prompt("각이냐?"))

if(180 === angle){
    alert("평각")
}else if(180 > angle && angle >90){
    alert("둔각")
}else if(90 === angle){
    alert("직각")
}else if(90 > angle && angle > 0){
    alert("예각")
}else{
    alert("오류임 ㅅㄱ")
}





//2. 키와 몸무게를 물어보고, [몸무게/ 키(m)의 제곱]BMI을 한 결과
const height = Number(prompt("키 몇?"))
const weight = Number(prompt("몸무게 몇?"))
const bmi = weight/(height ** 2)

if(bmi > 25){
    alert("비만")
}else if(25 >= bmi && bmi > 23){
    alert("과체중")
}else if(23 >= bmi && bmi > 18.5){
    alert("킹갓정상")
}else if(18.5 >= bmi && bmi > 0){
    alert("멸치")
}else{
    alert("오류 ㅅㄱ")
}















