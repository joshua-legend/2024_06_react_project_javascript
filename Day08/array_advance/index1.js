//object
const starbucks = [
    {name:"아메리카노",price:4500,kcal:1},
    {name:"카페 라떼",price:5500,kcal:180},
    {name:"카페 모카",price:6000,kcal:290},
    {name:"프라푸치노",price:6000,kcal:145},
    {name:"자바 칩 프라푸치노",price:5500,kcal:340},
]

// map
const newStarbucks = starbucks.map((x)=> {
    // {name:"아메리카노",price:4500,kcal:1}
    x.price += 1000
    // {name:"아메리카노",price:5500,kcal:1}
    return x
})

//map 프라푸치노는 할인율 30% 먹여서 다시 콘솔로 보여주셈

starbucks.map((x)=> {
    // if(x.name.includes("프라푸치노")){
    //     x.price = x.price * 0.7
    // }
    x.price = x.name.includes("프라푸치노") ? x.price*0.7 : x.price
    return x
})

// kcal < 200 작으면 천원 할인, 아니면 천원 추가 이벤트!
starbucks.map((x)=> {
    x.price = x.kcal < 200 ? x.price - 1000 : x.price + 1000
    return x
})

// 모든 메뉴 이름 앞에 제로 붙히고, kcal 0
starbucks.map((x)=> {
    x.name = "제로 " + x.name;
    x.kcal = 0 
    return x;
})

//프라푸치노만 살리기
starbucks.filter((x)=> x.name.includes("프라푸치노"))
starbucks.filter((x)=> x.price <= 5500)
starbucks.filter((x)=> x.price > 5000 && x.kcal <= 200)

