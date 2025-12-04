const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const defaultLength=15
let isCustomLength=false
let pwd1=document.querySelector("#pwd1");
let pwd2=document.querySelector("#pwd2");

// Habilita/deshabilita el input de longitud cuando cambia el checkbox.

document.addEventListener("DOMContentLoaded", () => {
  const setLengthCheckbox = document.querySelector("#setLength");
  const lengthInput = document.querySelector("#lengthInput");

  if (!setLengthCheckbox || !lengthInput) return;

  // Asegura estado inicial coherente (input empieza disabled según HTML)
  lengthInput.disabled = !setLengthCheckbox.checked;

  setLengthCheckbox.addEventListener("change", () => {
    const enabled = setLengthCheckbox.checked;
    lengthInput.disabled = !enabled;
    isCustomLength=true;

    if (enabled) {
      // Enfoca y selecciona el contenido para mejor UX
      lengthInput.focus();
      if (typeof lengthInput.select === "function") {
        lengthInput.select();
      }
    }
  });
});

function renderPwd(){
    pwd1.textContent=genPwd()
    pwd2.textContent=genPwd()
}

function genPwd(){
    let length=defaultLength
    let password=""
    if (isCustomLength){
        length=lengthInput.valueAsNumber
    } else {
        length=defaultLength
    }
    for (let i=0;i<length;i++){
        password+=characters[Math.floor(Math.random()*characters.length)]
        console.log("password: "+password)
        console.log("longitud: "+length)
    }
    return password
}




