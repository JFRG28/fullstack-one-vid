const inputBtn=document.querySelector("#input-btn");
let myLeads=[];
//let myLeads=`["www.awesomelead.com"]`; for testing JSON functions only
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");

/*
localStorage.setItem("myLead","www.youtube.com");
console.log(localStorage.getItem("myLead"));
localStorage.clear()

// 1. Turn the myLeads string into an array
myLeads=JSON.parse(myLeads)
console.log(typeof myLeads)
// 2. Push a new value to the array
myLeads.push("www.google.com")
console.log(myLeads)
// 3. Turn the array into a string again
myLeads=JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)
*/

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"))
    /*
    ulEl.innerHTML+=`
        <li>
            <a href='inputEl.value' target='_blank'>
            ${inputEl.value}
            </a>
        </li>
    `;    
    inputEl.value=""
    */
    renderLeads()
    //renderLead()
})

/*
function renderLead(){
    let listItem="<li>"+inputEl.value+"</li>"
    ulEl.innerHTML+=listItem
    inputEl.value=""
}
*/

function renderLeads(){
    let listItems=""
    inputEl.value=""
    for (let i=0;i<myLeads.length;i++){
        listItems+=`
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        //listItems+="<li>"+myLeads[i]+"</li>"        
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






