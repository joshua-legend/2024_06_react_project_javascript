const pallete = document.createElement('div')
pallete.style.display = 'grid'
pallete.style.gridTemplateColumns = 'repeat(5,1fr)'

const colors = "black grey blue green darksalmon pink red white yellow skyblue".split(" ")
colors.forEach((v)=>{
    const box = document.createElement('div')
    box.style.width = "50px"
    box.style.height = "50px"
    box.style.backgroundColor = v;
    box.addEventListener('mouseenter',()=>{
        choiceBox.style.backgroundColor  = v
    })
    pallete.appendChild(box)
})

const choiceBox = document.createElement('div')
choiceBox.style.width = "300px"
choiceBox.style.height = "300px"
choiceBox.style.border = "1px solid black"

const minus = document.createElement('button')
const plus = document.createElement('button')
minus.innerText = '-'
plus.innerText = '+'

minus.addEventListener('click',()=>{
    choiceBox.style.width = (parseInt(choiceBox.style.width) - 10) + 'px'
    choiceBox.style.height = (parseInt(choiceBox.style.height) - 10) + 'px'
})

plus.addEventListener('click',()=>{
    choiceBox.style.width = (parseInt(choiceBox.style.width) + 10) + 'px'
    choiceBox.style.height = (parseInt(choiceBox.style.height) + 10) + 'px'
})



document.body.appendChild(pallete)
document.body.appendChild(choiceBox)
document.body.appendChild(minus)
document.body.appendChild(plus)