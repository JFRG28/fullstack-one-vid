const inputBtn=document.querySelector("#input-btn");
let myLeads=[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");

localStorage.setItem("myLead","www.youtube.com");
console.log(localStorage.getItem("myLead"));
localStorage.clear()

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    ulEl.innerHTML+=`
        <li>
            <a href='inputEl.value' target='_blank'>
            ${inputEl.value}
            </a>
        </li>
    `;
    inputEl.value=""
    //renderLeads()
    //renderLead()
})

function renderLead(){
    let listItem="<li>"+inputEl.value+"</li>"
    ulEl.innerHTML+=listItem
    inputEl.value=""
}

function renderLeads(){
    let listItems=""
    inputEl.value=""
    for (let i=0;i<myLeads.length;i++){
        listItems+="<li>"+myLeads[i]+"</li>"        
        // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>";
        /* alternative way to render de elements
            1. create element
            2. set text content
            3. append to ul
        
            const li=document.createElement("li")
            li.textContent=myLeads[i]
            ulEl.append(li)
        */
    }
    ulEl.innerHTML=listItems
}






