//document.getElementById("count-el").innerText = 5


//console.log(count)
//
//let myAge=34
//let humanDogRatio=7
//let myDogAge=myAge*humanDogRatio
//console.log(myDogAge)
//
//let bonusPoints=50
//console.log(bonusPoints)
//bonusPoints=bonusPoints+50
//console.log(bonusPoints)
//bonusPoints=bonusPoints-75
//console.log(bonusPoints)
//bonusPoints=bonusPoints+45
//console.log(bonusPoints)

let count=0
let countEl=document.getElementById("count-el")
//console.log(countEl)
let saveEl=document.getElementById("save-el")

function increment(){
//    console.log("The button was clicked")
    count++
    countEl.innerText=count
//    console.log(count)
}

function save(){
    let entryHistory=count+" - "
    saveEl.textContent+=entryHistory
    count=0
    countEl.textContent=count
    console.log(count)
    console.log(entryHistory)
}

//using the escape character "\" 
let wish = "I'd love to see the show \"The Lion King\"."
console.log(wish)

let welcomeEl=document.getElementById("welcome-el")
//console.log(welcomeEl)
let name="Paco"
let greeting="Welcome back "
welcomeEl.innerText=greeting+name
//welcomeEl.innerText=welcomeEl.innerText+" 👋" //noob way
welcomeEl.innerText+=" 👋" //pro way