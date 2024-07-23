const icecream = ["mint","choco","banana"]
// 아이스크림 배열에 알파벳 a가 하나라도 있는지 확인 해주는 코드

const result = icecream.some((x)=> x.includes("a"))

const result1 = icecream.some((x)=>x.length >= 5)

const fruits = ["apple","peach","tomato","plum","pear","durian","grape","lemon"]

//1. 글자가 4글자이면서 알파벳 r 포함하는 단어 있니?

const result2 = fruits.some((x)=> x.length == 4 && x.includes("r"))

//2. 글자가 홀수이면서, p로 시작하는 단어가 있니?
const result3 = fruits.some((x)=> x.length % 2 && x.startsWith("p"))


//3. 모음으로 시작하는 단어가 있니?
// const vowels = ['a','e','o','i','u'];
// fruits.some((fruit)=> vowels.some((x)=> fruit.startsWith(x)))


//4. [k,b,s]에서 하나라도 포함하는 과일단어가 있니?
const alphabet = ['k','b','s']
fruits.some((fruit)=> alphabet.some((word)=> fruit.includes(word)))

//5.뉴스기사를 가져오고, 유저가 입력한 단어들 포함되는지 물어보는 코드만들기!

// -1) 뉴스기사는 변수에 넣고

const newsList = `Republican members of Congress are focusing on the role of the Secret Service, as their frustration and anger grow over the agency's response to an attempt to assassinate presidential nominee Donald Trump.
A House committee hearing will on Monday grill its Director, Kimberly Cheatle -something Speaker Mike Johnson said would make for "must-see TV" for Americans concerned about security lapses at a Pennsylvania rally earlier this month.
"She's got a lot to answer for. And these concerns are bipartisan," Mr Johnson told CNN.
Ms Cheatle's agency is charged with providing protection to the president and his family, former presidents, those in line to the White House and other political candidates.`.split(" ")

// -2) prompt로 찾고 싶은 단어들 입력: love trump party
const findWordList = prompt("찾고 싶은 단어들").split(" ") //[trump, is, with]

// -3) 해당 단어는 포함합니다. 안합니다.
const result5 = newsList.some((word)=> findWordList.some((x)=> word===x))

alert(`해당 단어들은 ${result5 ? "포함합니다" : "포함안합니다."}`)






