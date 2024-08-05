const minus = document.createElement('button')
const num = document.createElement('span')
const plus = document.createElement('button')

minus.innerText = '-'
num.innerText = '0'
plus.innerText = '+'

minus.addEventListener('click',()=>{
    num.innerText = Number(num.innerText) === 0 ? 0 : Number(num.innerText) - 1;
    num.style.color = "black"
})

plus.addEventListener('click',()=>{
    num.innerText = Number(num.innerText) === 10 ? 10 : Number(num.innerText) + 1;
    num.style.color = Number(num.innerText) === 10 ? 'red' : 'black'
})

document.body.appendChild(minus)
document.body.appendChild(num)
document.body.appendChild(plus)


const life = () => {
    alert('인생맥주 모이셈')
}