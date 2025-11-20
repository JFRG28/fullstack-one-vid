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
console.log(countEl)

function increment(){
    console.log("The button was clicked")
    count++
    countEl.innerText=count
    console.log(count)
}