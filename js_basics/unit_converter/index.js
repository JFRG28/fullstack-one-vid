const convertBtn=document.querySelector("#convert-btn")
const inputEl=document.querySelector("#input-el")
const oneFeetToMeters=3.28084
const oneMeterToFeet=0.3048
const oneLiterToImpGallon=0.219969
const oneImpGallonToLiters=4.54609
const oneKgToPounds=35.274
const onePoundToKgs=0.02834955374248

convertBtn.addEventListener("click",function(){
    console.log("mt to feet= "+converter(Number(inputEl.value),oneFeetToMeters))
    console.log("feet to mt= "+converter(Number(inputEl.value),oneMeterToFeet))
    console.log("lt to gallImp= "+converter(Number(inputEl.value),oneLiterToImpGallon))
    console.log("gallImp to lt = "+converter(Number(inputEl.value),oneImpGallonToLiters))
    console.log("kg to pounds= "+converter(Number(inputEl.value),oneKgToPounds))
    console.log("pound to kgs = "+converter(Number(inputEl.value),onePoundToKgs))
})

function converter(qt,destUnit){
    let conversion=Number(qt)*destUnit    
    return conversion.toFixed(2)
}