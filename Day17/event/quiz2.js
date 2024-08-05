// 유저에게 품목과 가격을 입력 받고
const [item, price] = prompt("품목과 가격").split(" ")

// 3 구매하기 -> 치킨값: 45000원 알럿으로 나타내기
const minus = document.createElement('button')
const num = document.createElement('span')
const plus = document.createElement('button')
const buy = document.createElement('button')

minus.innerText = '-'
num.innerText = '0'
plus.innerText = '+'
buy.innerText = `${item} 구매하기`

minus.addEventListener('click',()=>{
    num.innerText = Number(num.innerText) === 0 ? 0 : Number(num.innerText) - 1;
})

plus.addEventListener('click',()=>{
    num.innerText = Number(num.innerText) + 1;
})

buy.addEventListener('click',()=>{
    alert(`${item}의 ${num.innerText}개의 가격은: ${Number(price)*Number(num.innerText)}원`)
})


document.body.appendChild(minus)
document.body.appendChild(num)
document.body.appendChild(plus)
document.body.appendChild(buy)