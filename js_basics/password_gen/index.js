const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let isCustomLength=false
let pwd1=document.querySelector("#pwd1");
let pwd2=document.querySelector("#pwd2");
let setLengthCheckbox = null;
let lengthInput = null;

// Habilita/deshabilita el input de longitud cuando cambia el checkbox.

document.addEventListener("DOMContentLoaded", () => {
    setLengthCheckbox = document.querySelector("#setLength");
    lengthInput = document.querySelector("#lengthInput");

    if (!setLengthCheckbox || !lengthInput) return;

    // Estado inicial coherente
    lengthInput.disabled = !setLengthCheckbox.checked;
    isCustomLength = !!setLengthCheckbox.checked;

    setLengthCheckbox.addEventListener("change", () => {
        const enabled = setLengthCheckbox.checked;
        lengthInput.disabled = !enabled;
        // <-- FIX: asignar el valor real del checkbox en vez de forzar true
        isCustomLength = enabled;
    });
});

function renderPwd(){
    pwd1.textContent=genPwd()
    pwd2.textContent=genPwd()
}

function genPwd(){
    let length=lengthInput.min
    let password=""
    if (isCustomLength){
        if (lengthInput.valueAsNumber<15 || lengthInput.valueAsNumber>64){
            console.log("Not valid input for length")
            return 0
        } else {
            length=lengthInput.valueAsNumber
        }        
    } else {
        length=lengthInput.min
    }
    for (let i=0;i<length;i++){
        password+=characters[Math.floor(Math.random()*characters.length)]
        console.log("password: "+password)
        console.log("longitud: "+length)
    }
    return password
}




