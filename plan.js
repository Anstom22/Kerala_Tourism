
var tasks=[]
var events=[]
function todo(){
   let values= document.getElementById("input-todo").value;

tasks.push(values)

let list=document.getElementsByClassName("list-todo")[0];
let item=document.createElement("li")

tasks.forEach(function cb(element,index){
    item.innerText=element
    item.setAttribute("name",`element${index}`)
//btn.setAttribute("onclick","deletes(self)")
item.classList.add("todo-item");
item.onclick = deletes;
});
list.appendChild(item)

btn.style.display="inline"
btn.innerHTML="delete"
list.appendChild(btn)
btn.classList.add("todo-btn");


}

function deletes(){
  this.style.textDecoration="line-through"



}

function eventd(){
    let values= document.getElementById("input-event").value;

    events.push(values)
    
    let list=document.getElementsByClassName("list-events")[0];
    let item=document.createElement("li")
    
   events.forEach(function cb(element,index){
        item.innerText=element
        item.setAttribute("name",`element${index}`)
    //btn.setAttribute("onclick","deletes(self)")
    item.classList.add("event-item");
    item.onclick = deletes;
    });
    list.appendChild(item)
    
    list.appendChild(btn)  
}
