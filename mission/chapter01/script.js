const input = document.querySelector(".input");
const todolist = document.querySelector(".content-list-container");
const donelist = document.querySelector(".done-list-container");

function handleEnterKey(e) {
    if (e.key === "Enter" && e.target.value.trim()) {
        appendTodoItem(e.target.value.trim());
        e.target.value = "";
    }
}

function createItem(text, buttonText, clickHandler) {
    const container = document.createElement("div");
    container.className = "content-box";
    container.innerHTML = `
        <h3>${text}</h3>
        <button class="content-button">${buttonText}</button>
    `;
    container.querySelector("button").addEventListener("click", clickHandler);
    return container;
}

function appendTodoItem(text) {
    const todoItem = createItem(text, "완료", () => moveToDone(todoItem, text));
    todolist.appendChild(todoItem);
}

function appendDoneItem(text) {
    const doneItem = createItem(text, "삭제", (e) => e.target.parentElement.remove());
    donelist.appendChild(doneItem);
}

function moveToDone(todoItem, text) {
    appendDoneItem(text);
    todoItem.remove();
}

// Event listeners
input.addEventListener("keypress", handleEnterKey);
