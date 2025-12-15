const convertBtn=document.querySelector("#convert-btn")
const inputEl=document.querySelector("#input-el")
const oneMeterToFeet=3.28084
const oneFeetToMeters=0.3048
const oneLiterToUSAGallon=0.264172
const oneUSAGallonToLiters=3.78541
const oneKgToPounds=2.20462
const onePoundToKgs=0.453592
const lengthEl=document.querySelector("#length-el")
const volumeEl=document.querySelector("#volume-el")
const massEl=document.querySelector("#mass-el")


convertBtn.addEventListener("click",function(){
    lengthEl.textContent=`
        ${Number(inputEl.value)} meter(s) = ${converter(Number(inputEl.value),oneMeterToFeet)} feet 
        | 
        ${Number(inputEl.value)} feet = ${converter(Number(inputEl.value),oneFeetToMeters)} meter(s)
    `
    volumeEl.textContent=`
        ${Number(inputEl.value)} liter(s) = ${converter(Number(inputEl.value),oneLiterToUSAGallon)} gallon(s)
        | 
        ${Number(inputEl.value)} gallon(s) = ${converter(Number(inputEl.value),oneUSAGallonToLiters)} liter(s)
    `
    massEl.textContent=`
        ${Number(inputEl.value)} kilo(s) = ${converter(Number(inputEl.value),oneKgToPounds)} pound(s) 
        | 
        ${Number(inputEl.value)} pound(s) = ${converter(Number(inputEl.value),onePoundToKgs)} kilo(s)
    `
})

function converter(qt,destUnit){
    let conversion=Number(qt)*destUnit    
    return conversion.toFixed(2)
}