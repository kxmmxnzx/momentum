const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");

TODOS_KEY = "todos"

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((item)=>{
        return item.id !== parseInt(li.id);
    })
    saveTodos();
    li.remove();
    
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText="❌";

    button.addEventListener("click",deleteToDo);

    li.id = newTodoObj.id;
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    }
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}