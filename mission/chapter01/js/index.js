const todoListSubmitEvent = (event) => {
  // 새로고침 방지
  event.preventDefault();
  // 태그 가져오기
  const todoList = document.getElementById("todo");
  const todoListinput = document.getElementById("todoListInput");
  // append할 태그 만들기
  const contentDiv = document.createElement("div");
  contentDiv.className = "TodoList__content";
  const p = document.createElement("p");
  p.innerHTML = todoListinput.value;
  todoListinput.value = "";
  const button = document.createElement("input");
  button.setAttribute("type", "button");
  button.setAttribute("value", "완료");
  button.className = "TodoList__btn";
  button.addEventListener("click", todoContentCompleteEvent);
  // append하기
  contentDiv.appendChild(p);
  contentDiv.appendChild(button);
  todoList.appendChild(contentDiv);
};

const todoContentCompleteEvent = (event) => {
  const parTag = event.target.parentNode;
  const cloneTag = parTag.cloneNode(true);
  cloneTag.querySelector(".TodoList__btn").value = "삭제";

  const doneList = document.getElementById("done");
  const deleteBtn = cloneTag.querySelector(".TodoList__btn");
  
  deleteBtn.removeEventListener("click", todoContentCompleteEvent);
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentNode.className = "none";
    console.log(event.target.parentNode);
  });

  doneList.appendChild(cloneTag);
  parTag.className = "none";
};

const displayNone = (target) => {
  target.className = "none";
};
