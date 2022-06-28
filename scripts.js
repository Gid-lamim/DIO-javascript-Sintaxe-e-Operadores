
var btn = document.getElementById("addBtn");
var inputField = document.getElementById("task");
var ul = document.getElementById("toDoList");
var clearBtn = document.getElementById("clearBtn");

btn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearList);

function getInput() {
        var input = inputField.value;
        inputField.value = "";
        return input;
}


function addTask(){
    var li = document.createElement("li");
    var input = getInput();
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);  
}

function clearList(){
    ul.innerHTML = "";
}