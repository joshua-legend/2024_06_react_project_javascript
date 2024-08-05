const minus = document.createElement('button')
const num = document.createElement('span')
const plus = document.createElement('button')

minus.innerText = '-'
num.innerText = '0'
plus.innerText = '+'

minus.addEventListener('click',()=>{
    num.innerText = Number(num.innerText) - 1
})

plus.addEventListener('click',()=>{
    num.innerText = Number(num.innerText) + 1
})

document.body.appendChild(minus)
document.body.appendChild(num)
document.body.appendChild(plus)