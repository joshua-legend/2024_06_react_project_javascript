const msg = document.createElement('div')
msg.innerText = "아무것도 안눌렀음 ㅅㄱ"
document.body.appendChild(msg)


const makeButton = (color) => {
    const button = document.createElement('button')
    button.innerText = `${color}버튼`
    button.addEventListener('click',()=>{
        msg.innerText =  `${color} 버튼 누름`
    })
    document.body.appendChild(button)
}

["red","yellow","green"].forEach((v)=>makeButton(v))