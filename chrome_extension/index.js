let msgBtnClick="";
const inputBtn=document.querySelector("#input-btn");
let myLeads=[];
const inputEl=document.querySelector("#input-el");

/*function saveInput(){
    msgBtnClick="Button clicked! from onclick attribute"
    console.log(msgBtnClick)
}
*/

inputBtn.addEventListener("click", function(){
        msgBtnClick="Button clicked! from addEventListener";
        console.log(msgBtnClick);
})


