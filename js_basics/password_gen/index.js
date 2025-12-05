const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let isCustomLength=false
let pwd1=document.querySelector("#pwd1");
let pwd2=document.querySelector("#pwd2");
let setLengthCheckbox = null;
let lengthInput = null;

// Habilita/deshabilita el input de longitud cuando cambia el checkbox.

document.addEventListener("DOMContentLoaded", () => {
    setLengthCheckbox = document.querySelector("#setLength");
    lengthInput = document.querySelector("#lengthInput");

  // Asegurarse de obtener los elementos de contraseña desde el DOM
  pwd1 = document.querySelector("#pwd1");
  pwd2 = document.querySelector("#pwd2");

    if (!setLengthCheckbox || !lengthInput || !pwd1 || !pwd2) return;

    // Estado inicial coherente
    lengthInput.disabled = !setLengthCheckbox.checked;
    isCustomLength = !!setLengthCheckbox.checked;

    setLengthCheckbox.addEventListener("change", () => {
        const enabled = setLengthCheckbox.checked;
        lengthInput.disabled = !enabled;        
        isCustomLength = enabled;
    });

  // Añadir comportamiento de copy-on-click a las contraseñas
  [pwd1, pwd2].forEach(el => {
    // estilo visual para indicar que se puede clicar
    el.style.cursor = 'pointer';
    // tooltip
    el.title = 'Click to copy';
    el.addEventListener('click', async () => {
      const text = el.textContent;
      // si no hay contraseña válida, salir
      if (!text || text === '0') return;
      await copyToClipboard(text, el);
    });
  });
});

function renderPwd(){
    pwd1.textContent=genPwd();
    pwd2.textContent=genPwd();
}

function genPwd(){
    let length=lengthInput.min;
    let password="";
    if (isCustomLength){
        if (lengthInput.valueAsNumber<lengthInput.min || 
            lengthInput.valueAsNumber>lengthInput.max){
            console.log("Not valid input for length");
            return 0;
        } else {
            length=lengthInput.valueAsNumber;
        }        
    } else {
        length=lengthInput.min;
    }
    for (let i=0;i<length;i++){
        password+=characters[Math.floor(Math.random()*characters.length)];
    }
    return password;
}

// Copiar al portapapeles con fallback para navegadores sin navigator.clipboard
async function copyToClipboard(text, el){
  try {
    if (navigator.clipboard && navigator.clipboard.writeText){
      await navigator.clipboard.writeText(text);
    } else {
      // forzar fallback mediante excepción para usar el textarea
      throw new Error('No clipboard API');
    }
    // feedback visual
    const original = el.textContent;
    el.textContent = '¡Copiado!';
    setTimeout(() => el.textContent = original, 900);
  } catch (e) {
    // fallback usando un textarea temporal + execCommand
    const textarea = document.createElement('textarea');
    textarea.value = text;
    // evitar que el elemento afecte el layout
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      const original = el.textContent;
      el.textContent = '¡Copiado!';
      setTimeout(() => el.textContent = original, 900);
    } catch (err) {
      console.error('Copy failed', err);
    } finally {
      document.body.removeChild(textarea);
    }
  }
}