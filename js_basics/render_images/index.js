// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const containerEl=document.querySelector("#container")

function renderImg(paramArr,className){
    let listItems=""
    for (let i=0;i<paramArr.length;i++){
        listItems+=`
            <img class="${className}" src="${paramArr[i]}">        
        `
    }
    containerEl.innerHTML=listItems
}

renderImg(imgs,"team-img")
