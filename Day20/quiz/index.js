const input = document.createElement('input')
const eyeBtn = document.createElement('button')

const openEye = `<i class="fa-solid fa-eye"></i>`
const closedEye = `<i class="fa-solid fa-eye-slash"></i>`
eyeBtn.innerHTML = openEye
input.type = "password"
eyeBtn.addEventListener('click',()=>{
    if(input.type === "password"){
        eyeBtn.innerHTML = closedEye
        input.type = "text"
    }else{
        eyeBtn.innerHTML = openEye
        input.type = "password"
    }
})
document.body.appendChild(input)
document.body.appendChild(eyeBtn)