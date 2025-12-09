let msgBtnClick="";
let inputBtn=document.querySelector("#input-btn");

/*function saveInput(){
    msgBtnClick="Button clicked! from onclick attribute"
    console.log(msgBtnClick)
}
*/

inputBtn.addEventListener("click", function(){
        msgBtnClick="Button clicked! from addEventListener"
        console.log(msgBtnClick)
})


