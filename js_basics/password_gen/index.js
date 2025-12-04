const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Habilita/deshabilita el input de longitud cuando cambia el checkbox.
// NOTA: Solo contiene la lógica de interacción solicitada. No incluye
// ninguna funcionalidad de generación de contraseñas ni otra lógica.

document.addEventListener("DOMContentLoaded", () => {
  const setLengthCheckbox = document.getElementById("setLength");
  const lengthInput = document.getElementById("lengthInput");

  if (!setLengthCheckbox || !lengthInput) return;

  // Asegura estado inicial coherente (input empieza disabled según HTML)
  lengthInput.disabled = !setLengthCheckbox.checked;

  setLengthCheckbox.addEventListener("change", () => {
    const enabled = setLengthCheckbox.checked;
    lengthInput.disabled = !enabled;

    if (enabled) {
      // Enfoca y selecciona el contenido para mejor UX
      lengthInput.focus();
      if (typeof lengthInput.select === "function") {
        lengthInput.select();
      }
    }
  });
});



