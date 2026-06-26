let taskList = document.getElementById("taskList");

window.onload = function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(function(task){
        createTask(task);
    });
};

function addTask() {

    let input = document.getElementById("taskInput");

    let text = input.value.trim();

    if(text === ""){
        alert("لطفاً یک کار بنویس.");
        return;
    }

    createTask(text);

    saveTasks();

    input.value = "";
}

function createTask(text){

    let li = document.createElement("li");
li.innerHTML = text +
' <button onclick="completeTask(this)">✔️</button> ' +
'<button onclick="removeTask(this)">❌</button>';

    taskList.appendChild(li);

}

function removeTask(button){

    button.parentElement.remove();

    saveTasks();

}

function saveTasks(){

    let tasks = [];

    document.querySelectorAll("#taskList li").forEach(function(li){

        let text = li.firstChild.textContent.trim();

        tasks.push(text);

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

}
function completeTask(button){

    button.parentElement.classList.toggle("completed");

}