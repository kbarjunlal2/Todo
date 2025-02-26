function addToDo() {
    let ctr = 0;
    const value = document.querySelector("input").value;    
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);
    ctr = ctr + 1;
    newDivEl.innerHTML= "<div>" + value + "</div> <button onclick = 'deleteToDo()'>Delete</button>";
    document.querySelector("body").appendChild(newDivEl);
}

function deleteToDo(){

}