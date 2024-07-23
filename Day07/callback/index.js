// const makeHenOrEgg = (x) => {
//     return x % 2 ? "🐔" : "🥚"
// }




const test = (x) =>{
    console.log("코리아!")
    x()
    console.log("아이티!")
}
const icecream = () => {
    alert("아이스크림 먹고품 ㄹㅇ")
}



// f(x) -> f(g(x)) [합성함수 | 콜백함수]
//함수 매개변수에 함수를 넣는거
//콜백함수 개꿀인점 뭔데?

const cook = (recipe) => {
    console.log("요리 준비!")
    recipe()
    console.log("요리 완료!")
}

const taco = () => {
    console.log("살사소스 준비")
    console.log("나초칩")
    console.log("난 준비")
    console.log("고기 올리기")
    console.log("타코 완성")
}

const ramen = () => {
    console.log("물 끓이기")
    console.log("면 넣기")
    console.log("스프 넣기")
    console.log("계란 넣기")
}

cook(taco)
cook(ramen)
cook(() => {
    console.log("밀가루")
    console.log("고기고기")
    console.log("탕후루")
})