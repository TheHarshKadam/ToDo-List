let task = document.getElementById("task");
let list = document.getElementById("list");

task.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        addTodo(this.value);
        this.value = "";
    }
});

function addTodo(val){
    let li = document.createElement("li");
    li.innerHTML = `${val}`;
    console.log(val);
    list.appendChild(li);
    li.addEventListener("click", function(){
        this.classList.toggle('done');
    });
}