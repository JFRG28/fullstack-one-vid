//let firstCard=1
//let secondCard=11
//let firstCard=getRandomCard()
//let secondCard=getRandomCard()
//let sum=firstCard+secondCard
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector(".cards-el")
/*let cards=[
    firstCard,
    secondCard
]
*/
let cards=[]

function getRandomCard(){
    let randomCard=Math.floor(Math.random()*13)+1
    
    if (randomCard==1){
        return 11
    } else if (randomCard>10 && randomCard<14){
        return 10
    } else{
        return randomCard
    }
    
    //return 5
}

function startGame(){
    isAlive=true
    sum=0
    cards=[]
    cards[0]=getRandomCard()
    cards[1]=getRandomCard()
    sum=cards[0]+cards[1]
    renderGame()
}

function renderGame(){
    //cardsEl.textContent="Cards: "+firstCard+", "+secondCard
    //cardsEl.textContent="Cards: "+cards[0]+", "+cards[1]
    cardsEl.textContent="Cards: "
    for (let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if (sum<=20){
    message="Do you want to draw a new card? 🙂"
    } else if (sum===21){
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack=true
    } else {
    message="You're out of the game! 😭"
    isAlive=false
    }
    messageEl.textContent=message
}

function newCard(){
    //let card=3
    let card=getRandomCard()
    console.log("Drawing a new card from the deck!"+"("+card+")")
    sum+=card
    cards.push(card)
    renderGame()
}


