import React from "react";
import "./style.css";
import useTodoList from "./model/useTodoList.js";
import TodoListBtns from "./ui/todoListBtns/index.jsx";
function App() {
  const todoContentMainInput = React.useRef();
  const [todoList, renderTodoList, handleTodoListBtn] = useTodoList();

  return (
    <main>
      {/* 할 일 입력 영역 */}
      <form
        className="inputArea"
        onSubmit={(event) => {
          renderTodoList(event, todoContentMainInput.current);
        }}
      >
        <input type="text" ref={todoContentMainInput} />
        <input type="submit" value={"할 일 등록"} />
      </form>
      {/* 할 일 출력 영역 */}
      <div className="outputArea">
        {todoList.map((elem, index) => {
          return (
            <TodoListBtns
              key={index}
              elem={elem}
              handleTodoListBtn={handleTodoListBtn}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
