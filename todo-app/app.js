//selectors

const app = {
    addButton: document.getElementById("todo-add-button"),
    todoContainer: document.getElementById("todo-container"),
    inputText: document.querySelector('[name="todo"]'),
    buttonTick: document.querySelector(".todo-check")
}

//onload
document.addEventListener("DOMContentLoaded", createTodoFromStorage)

//EventListener on click

app.addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let li = document.createElement("li");
    li.innerText = `${app.inputText.value}`;
    todo.appendChild(li);
    let buttonCheck = document.createElement("button");
    buttonCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"\
    stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\
    class="feather feather-check-circle">\
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\
    <polyline points="22 4 12 14.01 9 11.01"></polyline>\</svg>';
    buttonCheck.classList.add("todo-check");
    todo.appendChild(buttonCheck);
    buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"\
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\
    stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">\
    <circle cx="12" cy="12" r="10"></circle>\
    <line x1="15" y1="9" x2="9" y2="15"></line>\
    <line x1="9" y1="9" x2="15" y2="15"></line>\</svg>';
    buttonDelete.classList.add("todo-delete");
    todo.appendChild(buttonDelete);
    if (app.inputText.value === "") {
        Swal.fire({
            target: 'body',
            titleText: 'you have to type something',
            text: 'It\'s look like you hadn\'t typed anything',
            icon: 'warning',
            confirmButtonText: "Okay!",
        })
    } else {
        saveLocaltodoList(app.inputText.value);
        app.todoContainer.appendChild(todo);
    }
    app.inputText.value = "";
});


//eventlistener on enter

app.inputText.addEventListener("keyup", (e) => {
    e.preventDefault();
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let li = document.createElement("li");
    li.innerText = `${app.inputText.value}`;
    todo.appendChild(li);
    let buttonCheck = document.createElement("button");
    buttonCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"\
    stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\
    class="feather feather-check-circle">\
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\
    <polyline points="22 4 12 14.01 9 11.01"></polyline>\</svg>';
    buttonCheck.classList.add("todo-check");
    todo.appendChild(buttonCheck);
    buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"\
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\
    stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">\
    <circle cx="12" cy="12" r="10"></circle>\
    <line x1="15" y1="9" x2="9" y2="15"></line>\
    <line x1="9" y1="9" x2="15" y2="15"></line>\</svg>';
    buttonDelete.classList.add("todo-delete");
    todo.appendChild(buttonDelete);
    if (app.inputText.value === "" && event.keyCode == 13) {
        Swal.fire({
            target: 'body',
            titleText: 'you have to type something',
            text: 'It\'s look like you hadn\'t typed anything',
            icon: 'warning',
            confirmButtonText: "Okay!",
        })
    } else if (event.keyCode == 13) {
        app.todoContainer.appendChild(todo);
        saveLocaltodoList(app.inputText.value);
        app.inputText.value = "";
    }

});

app.todoContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("todo-delete")) {
        let items = target.parentElement;
        items.style.animation = "goAway 500ms ease";
        removeTodosFromStorage(items)
        items.addEventListener("animationend", () => {
            items.remove()
        })
    }
    if (target.classList.contains("todo-check")) {
        let item = target.parentElement;;
        item.classList.toggle("completed")
    }

})

//local storgae

function saveLocaltodoList(e) {
    let todoList;
    if (localStorage.getItem("todoList") === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"))
    }

    todoList.push(e);
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function createTodoFromStorage() {
    let todoList;
    if (localStorage.getItem("todoList") === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"))
    }
    todoList.forEach((e) => {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        let li = document.createElement("li");
        li.innerText = e;
        todo.appendChild(li);
        let buttonCheck = document.createElement("button");
        buttonCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"\
        stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\
        class="feather feather-check-circle">\
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\
        <polyline points="22 4 12 14.01 9 11.01"></polyline>\</svg>';
        buttonCheck.classList.add("todo-check");
        todo.appendChild(buttonCheck);
        buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"\
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"\
        stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">\
        <circle cx="12" cy="12" r="10"></circle>\
        <line x1="15" y1="9" x2="9" y2="15"></line>\
        <line x1="9" y1="9" x2="15" y2="15"></line>\</svg>';
        buttonDelete.classList.add("todo-delete");
        todo.appendChild(buttonDelete);
        app.todoContainer.appendChild(todo);
    })
}

function removeTodosFromStorage(e) {
    let todoList;
    if (localStorage.getItem("todoList") === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"))
    }
    let index = e.children[0].innerText;
    todoList.splice(todoList.indexOf(index), 1);
    localStorage.setItem("todoList", JSON.stringify(todoList))
}
//draggable-none-to-image

let img = document.querySelectorAll("svg");

img.forEach((e) => {
    e.setAttribute('draggable', 'false')
})