let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

// Event Delegation

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentNode.remove();
    }
})

// by this way new added element can't be delete by click on it

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click" , function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }