let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruits(paramArray,paramFruit){
    let sortedShelf=[]
    for (let i=0;i<paramArray.length;i++){
        if (paramArray[i]===paramFruit){
            sortedShelf.push(paramArray[i])
        }
    }
    return sortedShelf
}

function renderShelf(paramArray,id){
    for (let i=0;i<paramArray.length;i++){
        id.textContent+=paramArray[i]
    }
}

renderShelf(sortFruits(fruit,"🍎"),appleShelf)
renderShelf(sortFruits(fruit,"🍊"),orangeShelf)
