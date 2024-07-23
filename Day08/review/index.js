const menu = ["americano","latte","mint","choco","valina"]
//1. 5글자이하이면 소문자로 콘솔 보여주고 아니면 대문자로 콘솔
menu.forEach((x)=>{
    const result = x.length <= 5 ? x.toLowerCase() : x.toUpperCase()
    console.log(result)
})

//2. 글자가 짝수개 이면서, n이 들어가는지 확인하는 코드
menu.some((x)=>{
    return x.length % 2 == 0 && x.includes("n")
})


