// .: 클래스 #:아이디
const pwInput = document.querySelector("#passwordInput")
const eyeButton = document.querySelector("#eyeButton")
const openEye = `<i class="fa-solid fa-eye"></i>`
const closedEye = `<i class="fa-solid fa-eye-slash"></i>`

eyeButton.addEventListener('click',()=>{
    if(pwInput.type === "password"){
        eyeButton.innerHTML = closedEye
        pwInput.type = 'text'
    }
    else{
        eyeButton.innerHTML = openEye
        pwInput.type = 'password'
    }
})