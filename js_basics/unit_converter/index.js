const convertBtn=document.querySelector("#convert-btn")
const inputEl=document.querySelector("#input-el")
const oneFeetInMeters=3.28084
const oneMeterInFeet=0.3048

convertBtn.addEventListener("click",function(){
    console.log("mt to feet= "+converter(Number(inputEl.value),oneFeetInMeters))
    console.log("feet to mt= "+converter(Number(inputEl.value),oneMeterInFeet))
})

function converter(qt,destUnit){
    let conversion=Number(qt)*destUnit    
    return conversion.toFixed(2)
}