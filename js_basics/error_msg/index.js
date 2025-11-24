// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errEl=document.getElementById("error")
let errMsgDesc="Something went wrong, please try again"

function errorMsg(){
    errEl.textContent=errMsgDesc
}