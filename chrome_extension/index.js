let msgBtnClick="";
const inputBtn=document.querySelector("#input-btn");
let myLeads=[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads()    
})

function renderLeads(){
    ulEl.innerHTML=""
    for (let i=0;i<myLeads.length;i++){
        ulEl.innerHTML+="<li>"+myLeads[i]+"</li>";
    }
}





