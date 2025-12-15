const convertBtn=document.querySelector("#convert-btn")
const inputEl=document.querySelector("#input-el")
const oneMeterToFeet=3.28084
const oneFeetToMeters=0.3048
const oneLiterToUSAGallon=0.264172
const oneUSAGallonToLiters=3.78541
const oneKgToPounds=2.20462
const onePoundToKgs=0.453592

convertBtn.addEventListener("click",function(){
    console.log("mt to feet= "+converter(Number(inputEl.value),oneMeterToFeet))
    console.log("feet to mt= "+converter(Number(inputEl.value),oneFeetToMeters))
    console.log("lt to USAgall= "+converter(Number(inputEl.value),oneLiterToUSAGallon))
    console.log("USAgall to lt = "+converter(Number(inputEl.value),oneUSAGallonToLiters))
    console.log("kg to pounds= "+converter(Number(inputEl.value),oneKgToPounds))
    console.log("pound to kgs = "+converter(Number(inputEl.value),onePoundToKgs))
})

function converter(qt,destUnit){
    let conversion=Number(qt)*destUnit    
    return conversion.toFixed(2)
}