let inputBox = document.getElementById("input-box");
let todoList = document.getElementById("todo-list");

function addTask()
{
    let newTask = inputBox.value;
    if (newTask) {
        let li = document.createElement("li");
        li.textContent = newTask;
        todoList.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.textContent = "×";
        li.appendChild(span);
    }else{
        alertify.error('Please write a task first!');
    }
    saveData();
}

todoList.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", todoList.innerHTML);
}

function showTask(){
    todoList.innerHTML = localStorage.getItem("data");
}

showTask();