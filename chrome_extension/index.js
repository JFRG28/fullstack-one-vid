let msgBtnClick="";
const inputBtn=document.querySelector("#input-btn");
let myLeads=[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");

/*function saveInput(){
    msgBtnClick="Button clicked! from onclick attribute"
    console.log(msgBtnClick)
}
*/

inputBtn.addEventListener("click", function(){
    /*msgBtnClick="Button clicked! from addEventListener";
    console.log(msgBtnClick);
    myLeads.push("www.awesomelead.com")
    console.log(myLeads);
    */
    myLeads.push(inputEl.value);
    //console.log(myLeads);
})

for (let i=0;i<myLeads.length;i++){
    console.log(myLeads[i]);
}




