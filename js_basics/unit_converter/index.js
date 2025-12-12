const convertBtn=document.querySelector("#convert-btn")
const inputEl=document.querySelector("#input-el")
const oneFeetToMeters=3.28084
const oneMeterToFeet=0.3048
const oneLiterToImpGallon=0.219969
const oneImpGallonToLiters=0.219969

convertBtn.addEventListener("click",function(){
    console.log("mt to feet= "+converter(Number(inputEl.value),oneFeetToMeters))
    console.log("feet to mt= "+converter(Number(inputEl.value),oneMeterToFeet))
})

function converter(qt,destUnit){
    let conversion=Number(qt)*destUnit    
    return conversion.toFixed(2)
}