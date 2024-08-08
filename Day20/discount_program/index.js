const originInput = document.querySelector('#originInput')
const discountInput = document.querySelector('#discountInput')
const calcButton = document.querySelector("#calcButton")
const originPrice = document.querySelector("#originPrice")
const discountPercent = document.querySelector("#discountPercent")
const savePrice = document.querySelector("#savePrice")
const calcPrice = document.querySelector("#calcPrice")

originInput.addEventListener('input',(e)=>{
    const numValue = Number(e.target.value)
    if(0 <= numValue){
        originPrice.innerText = numValue
    }
    savePrice.innerText = 0
    calcPrice.innerText = 0
})

discountInput.addEventListener('input',(e)=>{
    const numValue = Number(e.target.value)
    if(0 <= numValue && numValue <= 100){
        discountPercent.innerText = numValue
    }
})

calcButton.addEventListener('click',()=>{
    savePrice.innerText = Number(originPrice.innerText) * (Number(discountPercent.innerText) / 100)
    calcPrice.innerText = Number(originPrice.innerText) - (Number(originPrice.innerText) * (Number(discountPercent.innerText) / 100))
})